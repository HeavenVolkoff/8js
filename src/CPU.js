/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

/**
 * Returns a random integer between min (included) and max (excluded)
 *
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * CPU Stack
 *
 * @constructor
 */
function Stack() {
	var buffer = new Buffer(16 * 2);
	buffer.fill(0);
	var pointer = 0;

	this.pushFrom = function pushFrom(buff) {
		buff.copy(buffer, pointer);
		pointer += 2;
	};

	this.popTo = function popTo(buff) {
		pointer -= 2;
		buffer.copy(buff, 0, pointer, pointer + buff.length);
	};

	this.clear = function clear() {
		buffer.fill(0);
		pointer = 0;
	};
}

/**
 * System CPU
 *
 * @returns {CPU}
 * @constructor
 */
function CPU(motherboard) {
	/**
	 * Registers:
	 * 15 8-bit general purpose registers, plus a
	 * 16th register used  for the ‘carry flag’
	 *
	 * @type {Buffer}
	 */
	this.reg = new Buffer(16);
	this.reg.fill(0x0);

	/**
	 * Index Register
	 * Value Range: 0x000 - 0xFFF
	 *
	 * @type {Buffer}
	 */
	this.i = new Buffer(2);
	this.i.fill(0x0);

	/**
	 * CPU Program Counter
	 * Value Range: 0x000 - 0xFFF
	 * Starts at 0x200 (see Memory)
	 *
	 * @type {Buffer}
	 */
	this.pc = new Buffer("0200", "hex");

	/**
	 * CPU stack
	 * Only used to store return addresses when subroutines are called
	 *
	 * @type {Stack}
	 */
	this.stack = new Stack();

	/**
	 * This CPU clock in Khz
	 * @type {number}
	 */
	this.clock = 5;

	/**
	 * CPU Timers
	 * Count down at 60hz
	 *
	 * @type {{delay: number, sound: number, clock: number}}
	 */
	this.timer = {
		delay: 0,
		sound: 0,
		clock: 1000 / 60
	};

	/**
	 * Used to stop cpu execution
	 *
	 * @type {boolean}
	 */
	this.halt = false;

	/**
	 * Reference to the object that handle the connections
	 */
	this.motherboard = motherboard;
}

module.exports = CPU;

CPU.prototype.changeClock = function changeClock(clock){
	this.clock = clock|0;
};

/**
 * Function to move the program counter to the next operation
 */
CPU.prototype.nextInstruction = function incrementsPC() {
	this.pc.writeUInt16BE(this.pc.readUInt16BE(0) + 2);
};

/**
 * Update Internal Timers
 */
CPU.prototype.updateTimers = function updateTimers() {
	if (this.timer.sound > 0) {
		this.timer.sound--;
	} else if (this.motherboard.audio.isPlaying) {
		this.motherboard.audio.stop();
	}

	if (this.timer.delay > 0) {
		this.timer.delay--;
	}
};

/**
 * Clear CPU Registers and Stack to reset
 */
CPU.prototype.clear = function clear() {
	this.i.fill(0x0);
	this.reg.fill(0x0);
	this.pc.writeUInt16BE(0x200);
	this.stack.clear();
	this.timer.delay = 0;
	this.timer.sound = 0;
	this.halt = false;
};

/**
 * 00E0 - CLS
 *
 * Clear the display.
 */
CPU.prototype.cls = function clearScreen() {
	this.motherboard.video.clear();
	this.nextInstruction();
};

/**
 * 00EE - RET
 *
 * Return from a subroutine.
 * The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack
 * pointer.
 */
CPU.prototype.return = function returnFromSubroutine() {
	this.stack.popTo(this.pc);
	this.nextInstruction();
};

/**
 * 1nnn - JP addr
 *
 * Jump to location nnn.
 * The interpreter sets the program counter to nnn.
 *
 * @param address
 */
CPU.prototype.jump = function jumpToAddress(address) {
	this.pc.writeUInt16BE(address);
};

/**
 * Bnnn - JP V0, addr
 *
 * Jump to location nnn + V0.
 * The program counter is set to nnn plus the value of V0.
 *
 * @param address
 */
CPU.prototype.jumpr = function jumpToAddressPlusV0(address) {
	this.pc.writeUInt16BE(address + this.reg.readUInt8(0));
};

/**
 * 2nnn - CALL addr
 *
 * Call subroutine at nnn.
 * The interpreter increments the stack pointer, then puts the current PC on the top of the stack. The PC is then
 * set to nnn.
 *
 * @param address
 */
CPU.prototype.call = function callSubroutine(address) {
	this.stack.pushFrom(this.pc);
	this.pc.writeUInt16BE(address);
};

/**
 * 3xkk - SE Vx, byte
 *
 * Skip next instruction if Vx = kk.
 * The interpreter compares register Vx to kk, and if they are equal, increments the program counter by 2.
 *
 * @param reg
 * @param value
 */
CPU.prototype.se = function skipEqual(reg, value) {
	if (this.reg[reg] === value) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * 5xy0 - SE Vx, Vy
 *
 * Skip next instruction if Vx = Vy.
 * The interpreter compares register Vx to register Vy, and if they are equal, increments the program counter by 2.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.ser = function skipEqualBetweenRegs(reg1, reg2) {
	if (this.reg[reg1] === this.reg[reg2]) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * 4xkk - SNE Vx, byte
 *
 * Skip next instruction if Vx != kk.
 * The interpreter compares register Vx to kk, and if they are not equal, increments the program counter by 2.
 *
 * @param reg
 * @param value
 */
CPU.prototype.sne = function skipNotEqual(reg, value) {
	if (this.reg[reg] !== value) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * 9xy0 - SNE Vx, Vy
 *
 * Skip next instruction if Vx != Vy.
 * The values of Vx and Vy are compared, and if they are not equal, the program counter is increased by 2.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.sner = function skipNotEqualRegs(reg1, reg2) {
	if (this.reg[reg1] !== this.reg[reg2]) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * 6xkk - LD Vx, byte
 *
 * Set Vx = kk.
 * The interpreter puts the value kk into register Vx.
 *
 * @param reg
 * @param value
 */
CPU.prototype.move = function moveValueToReg(reg, value) {
	this.reg.writeUInt8(value, reg);
	this.nextInstruction();
};

/**
 * 8xy0 - LD Vx, Vy
 *
 * Set Vx = Vy.
 * Stores the value of register Vy in register Vx.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.mover = function moveRegToReg(reg1, reg2) {
	this.reg.copy(this.reg, reg1, reg2, reg2 + 1);
	this.nextInstruction();
};

/**
 * Annn - LD I, addr
 *
 * Set I = nnn.
 * The value of register I is set to nnn.
 *
 * @param address
 */
CPU.prototype.movei = function moveAddressToI(address) {
	this.i.writeUInt16BE(address);
	this.nextInstruction();
};

/**
 * Fx07 - LD Vx, DT
 *
 * Set Vx = delay timer value.
 * The value of DT is placed into Vx.
 *
 * @param reg
 */
CPU.prototype.movedtr = function moveDelayTimeToReg(reg) {
	this.reg.writeUInt8(this.timer.delay, reg);
	this.nextInstruction();
};

/**
 * Fx15 - LD DT, Vx
 *
 * Set delay timer = Vx.
 * DT is set equal to the value of Vx.
 *
 * @param reg
 */
CPU.prototype.moverdt = function moveRegToDelayTime(reg) {
	this.timer.delay = this.reg[reg];
	this.nextInstruction();
};

/**
 * Fx18 - LD ST, Vx
 *
 * Set sound timer = Vx.
 * ST is set equal to the value of Vx.
 *
 * @param reg
 */
CPU.prototype.moverst = function moveRegToSoundTime(reg) {
	this.timer.sound = this.reg[reg];
	this.motherboard.audio.play();
	this.nextInstruction();
};

/**
 * 7xkk - ADD Vx, byte
 *
 * Set Vx = Vx + kk.
 * Adds the value kk to the value of register Vx, then stores the result in Vx.
 *
 * @param reg
 * @param value
 */
CPU.prototype.add = function addValue(reg, value) {
	this.reg.writeUInt8(this.reg[reg] + value, reg, true);
	this.nextInstruction();
};

/**
 * 8xy4 - ADD Vx, Vy
 *
 * Set Vx = Vx + Vy, set VF = carry.
 * The values of Vx and Vy are added together. If the result is greater than 8 bits (i.e., > 255,) VF is set to 1,
 * otherwise 0. Only the lowest 8 bits of the result are kept, and stored in Vx.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.addr = function addRegs(reg1, reg2) {
	var result = this.reg[reg1] + this.reg[reg2];

	if (result > 0xFF) {
		this.reg.writeUInt8(1, 0xF);
	} else {
		this.reg.writeUInt8(0, 0xF);
	}

	this.reg.writeUInt8(result, reg1, true);

	this.nextInstruction();
};

/**
 * Fx1E - ADD I, Vx
 *
 * Set I = I + Vx.
 * The values of I and Vx are added, and the results are stored in I.
 *
 * @param reg
 */
CPU.prototype.addi = function addRegToI(reg) {
	var result = this.i.readUInt16BE(0) + this.reg.readUInt8(reg);

	if (result > 0xFFF) {
		this.reg.writeUInt8(1, 0xF);
	} else {
		this.reg.writeUInt8(0, 0xF);
	}

	this.i.writeUInt16BE(result, 0, true);
	this.nextInstruction();
};

/**
 * 8xy1 - OR Vx, Vy
 *
 * Set Vx = Vx OR Vy.
 * Performs a bitwise OR on the values of Vx and Vy, then stores the result in Vx. A bitwise OR compares the
 * corresponding bits from two values, and if either bit is 1, then the same bit in the result is also 1. Otherwise,
 * it is 0.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.or = function or(reg1, reg2) {
	this.reg.writeUInt8(this.reg[reg1] | this.reg[reg2], reg1);
	this.nextInstruction();
};

/**
 * 8xy2 - AND Vx, Vy
 *
 * Set Vx = Vx AND Vy.
 * Performs a bitwise AND on the values of Vx and Vy, then stores the result in Vx. A bitwise AND compares the
 * corresponding bits from two values, and if both bits are 1, then the same bit in the result is also 1. Otherwise,
 * it is 0.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.and = function and(reg1, reg2) {
	this.reg.writeUInt8(this.reg[reg1] & this.reg[reg2], reg1);
	this.nextInstruction();
};

/**
 * 8xy3 - XOR Vx, Vy
 *
 * Set Vx = Vx XOR Vy.
 * Performs a bitwise exclusive OR on the values of Vx and Vy, then stores the result in Vx. An exclusive OR
 * compares  the corresponding bits from two values, and if the bits are not both the same, then the corresponding
 * bit in the result is set to 1. Otherwise, it is 0.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.xor = function xor(reg1, reg2) {
	this.reg.writeUInt8(this.reg[reg1] ^ this.reg[reg2], reg1);
	this.nextInstruction();
};

/**
 * 8xy5 - SUB Vx, Vy
 *
 * Set Vx = Vx - Vy, set VF = NOT borrow.
 * If Vx > Vy, then VF is set to 1, otherwise 0. Then Vy is subtracted from Vx, and the results stored in Vx.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.subr = function subRegs(reg1, reg2) {
	if (this.reg[reg1] > this.reg[reg2]) {
		this.reg.writeUInt8(1, 0xF);
	} else {
		this.reg.writeUInt8(0, 0xF);
	}

	this.reg.writeUInt8(this.reg[reg1] - this.reg[reg2], reg1, true);
	this.nextInstruction();
};

/**
 * 8xy7 - SUBN Vx, Vy
 *
 * Set Vx = Vy - Vx, set VF = NOT borrow.
 * If Vy > Vx, then VF is set to 1, otherwise 0. Then Vx is subtracted from Vy, and the results stored in Vx.
 *
 * @param reg1
 * @param reg2
 */
CPU.prototype.subrn = function subRegsN(reg1, reg2) {
	if (this.reg[reg1] < this.reg[reg2]) {
		this.reg.writeUInt8(1, 0xF);
	} else {
		this.reg.writeUInt8(0, 0xF);
	}

	this.reg.writeUInt8(this.reg[reg2] - this.reg[reg1], reg1, true);
	this.nextInstruction();
};

/**
 * 8xy6 - SHR Vx {, Vy}
 *
 * Set Vx = Vx SHR 1.
 * If the least-significant bit of Vx is 1, then VF is set to 1, otherwise 0. Then Vx is divided by 2.
 *
 * @param reg
 */
CPU.prototype.shr = function shiftRigth(reg) {
	this.reg.writeUInt8(this.reg[reg] & 0x1, 0xF);
	this.reg.writeUInt8(this.reg[reg] >> 1, reg);
	this.nextInstruction();
};

/**
 * 8xyE - SHL Vx {, Vy}
 *
 * Set Vx = Vx SHL 1.
 * If the most-significant bit of Vx is 1, then VF is set to 1, otherwise to 0. Then Vx is multiplied by 2.
 *
 * @param reg
 */
CPU.prototype.shl = function shiftLeft(reg) {
	this.reg.writeUInt8(this.reg[reg] >> 7, 0xF);
	this.reg.writeUInt8(this.reg[reg] << 1, reg, true);
	this.nextInstruction();
};

/**
 * Cxkk - RND Vx, byte
 *
 * Set Vx = random byte AND kk.
 * The interpreter generates a random number from 0 to 255, which is then ANDed with the value kk. The results are
 * stored in Vx. See instruction 8xy2 for more information on AND.
 *
 * @param reg
 * @param byte
 */
CPU.prototype.rnd = function generateRandom(reg, byte) {
	this.reg.writeUInt8(getRandomInt(0, 256) & byte, reg);
	this.nextInstruction();
};

/**
 * Dxyn - DRW Vx, Vy, nibble
 *
 * Display n-byte sprite starting at memory location I at (Vx, Vy), set VF = collision.
 * The interpreter reads n bytes from memory, starting at the address stored in I. These bytes are then displayed as
 * sprites on screen at coordinates (Vx, Vy). Sprites are XORed onto the existing screen. If this causes any pixels
 * to be erased,  VF is set to 1, otherwise it is set to 0. If the sprite is positioned so part of it is outside the
 * coordinates of the display, it wraps around to the opposite side of the screen.
 *
 * @param regX
 * @param regY
 * @param nibble
 */
CPU.prototype.dwr = function display(regX, regY, nibble) {
	var i = this.i.readUInt16BE(0);

	this.reg.writeUInt8(
		this.motherboard.video.drawSprite(this.reg.readUInt8(regX), this.reg.readUInt8(regY),
			{
				data: this.motherboard.memory.buffer.slice(i, i + nibble),
				width: 8,
				height: nibble
			}
		), 0xF);

	this.nextInstruction();
};

/**
 * Ex9E - SKP Vx
 *
 * Skip next instruction if key with the value of Vx is pressed.
 * Checks the keyboard, and if the key corresponding to the value of Vx is currently in the down position, PC is
 * increased by 2.
 *
 * @param reg
 */
CPU.prototype.skp = function skipWhenKeyIsPressed(reg) {
	if (this.motherboard.input.isKeyPressed(this.reg[reg])) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * ExA1 - SKNP Vx
 *
 * Skip next instruction if key with the value of Vx is not pressed.
 * Checks the keyboard, and if the key corresponding to the value of Vx is currently in the up position, PC is
 * increased by 2.
 *
 * @param reg
 */
CPU.prototype.sknp = function skipWhenKeyIsNotPressed(reg) {
	if (!this.motherboard.input.isKeyPressed(this.reg[reg])) {
		this.nextInstruction();
	}
	this.nextInstruction();
};

/**
 * Fx0A - LD Vx, K
 *
 * Wait for a key press, store the value of the key in Vx.
 * All execution stops until a key is pressed, then the value of that key is stored in Vx.
 *
 * @param reg
 */
CPU.prototype.wkp = function waitKeyPress(reg) {
	var self = this;
	this.halt = true;

	this.motherboard.input.once("keypress", function (key) {
		self.reg.writeUInt8(key, reg);
		self.nextInstruction();
		self.halt = false;
	});
};

/**
 * Fx29 - LD F, Vx
 * Set I = location of sprite for digit Vx.
 * The value of I is set to the location for the hexadecimal sprite corresponding to the value of Vx.
 *
 * @param reg
 */
CPU.prototype.moveft = function moveFontPosToReg(reg) {
	this.i.writeUInt16BE(this.reg.readUInt8(reg) * 5);
	this.nextInstruction();
};

/**
 * Fx33 - LD B, Vx
 * Store BCD representation of Vx in memory locations I, I+1, and I+2.
 * The interpreter takes the decimal value of Vx, and places the hundreds digit in memory at location in I, the tens
 * digit at location I+1, and the ones digit at location I+2.
 *
 * @param reg
 */
CPU.prototype.movebcd = function moveBCDOfRegToMem(reg) {
	var bcd = this.reg.readUInt8(reg);
	var bcd100 = bcd / 100;
	var bcd10 = (bcd / 10) % 10;
	var bcd1 = bcd % 10;
	var i = this.i.readUInt16BE(0);

	this.motherboard.memory.buffer.writeUInt8(bcd100, i);
	this.motherboard.memory.buffer.writeUInt8(bcd10, ++i);
	this.motherboard.memory.buffer.writeUInt8(bcd1, ++i);
	this.nextInstruction();
};

/**
 * Fx55 - LD [I], Vx
 * Store registers V0 through Vx in memory starting at location I.
 * The interpreter copies the values of registers V0 through Vx into memory, starting at the address in I.
 *
 * @param reg
 */
CPU.prototype.store = function storeRegsFromMemory(reg) {
	this.reg.copy(this.motherboard.memory.buffer, this.i.readUInt16BE(0), 0, reg + 1);
	this.i.writeUInt16BE(this.i.readUInt16BE(0) + reg + 1);
	this.nextInstruction();
};

/**
 * Fx65 - LD Vx, [I]
 * Read registers V0 through Vx from memory starting at location I.
 * The interpreter reads values from memory starting at location I into registers V0 through Vx.
 *
 * @param reg
 */
CPU.prototype.read = function readRegsFromMemory(reg) {
	this.motherboard.memory.buffer.copy(this.reg, 0, this.i.readUInt16BE(0), this.i.readUInt16BE(0) + reg + 1);
	this.i.writeUInt16BE(this.i.readUInt16BE(0) + reg + 1);
	this.nextInstruction();
};