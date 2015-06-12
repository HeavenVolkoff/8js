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
	var buffer = new Buffer(16);
	buffer.fill(0x0);
	var pointer = 0;

	this.push = function push(value) {
		buffer.writeUInt8(value, pointer);
		pointer++;
	};

	this.pop = function pop() {
		return buffer[pointer--];
	}
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
	 * @type {number}
	 */
	this.i = 0;

	/**
	 * CPU Program Counter
	 * Value Range: 0x000 - 0xFFF
	 * Starts at 0x200 (see Memory)
	 *
	 * @type {number}
	 */
	this.pc = 0x200;

	/**
	 * CPU stack
	 * Only used to store return addresses when subroutines are called
	 *
	 * @type {Stack}
	 */
	this.stack = new Stack();

	/**
	 * CPU Timers
	 * Used to count down at 60hz
	 *
	 * @type {{delay: number, sound: number}}
	 */
	this.timer = {
		delay: 0,
		sound: 0
	};

	this.halt = false;

	this.motherboard = motherboard;
}

/**
 * 00EE - RET
 *
 * Return from a subroutine.
 * The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack
 * pointer.
 *
 * @param address
 */
CPU.prototype.return = function returnFromSubroutine(address) {
	this.pc = this.stack.pop()
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
	this.pc = address;
};

/**
 * Bnnn - JP V0, addr
 *
 *Jump to location nnn + V0.
 *The program counter is set to nnn plus the value of V0.
 *
 * @param address
 */
CPU.prototype.jumpr = function jumpToAddressPlusV0(address) {
	this.pc += 2
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
	this.stack.push(this.pc);
	this.pc = address;
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
		this.pc += 2
	}
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
		this.pc += 2
	}
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
		this.pc += 2
	}
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
		this.pc += 2
	}
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
};

/**
 * Annn - LD I, addr
 *
 * Set I = nnn.
 * The value of register I is set to nnn.
 *
 * @param address
 */
CPU.prototype.movei = function moveAddrToI(address) {
	this.i = address;
};

/**
 * Fx07 - LD Vx, DT
 *
 * Set Vx = delay timer value.
 * The value of DT is placed into Vx.
 *
 * @param reg
 */
CPU.prototype.movedt = function moveDelayTimeToReg(reg) {
	this.reg.writeUInt8(this.timer.delay);
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
	this.reg.writeUInt8(this.reg[reg] + value, reg);
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

	this.reg.writeUInt8(result, reg1);
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

	this.reg.writeUInt8(this.reg[reg1] - this.reg[reg2], reg1);
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

	this.reg.writeUInt8(this.reg[reg2] - this.reg[reg1], reg1);
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
	this.reg.writeUInt8(this.reg[reg] >> 0xF, 0xF);
	this.reg.writeUInt8(this.reg[reg] << 1, reg);
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
	this.reg.writeUInt8(
		this.motherboard.video.drawSprite(regX, regY,
			{
				data: this.motherboard.memory.buffer.slice(this.i, nibble),
				widht: 8,
				height: nibble
			}
		)
		, 0xF);
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
		this.pc += 2
	}
};

/**
 * Ex9E - SKP Vx
 *
 * Skip next instruction if key with the value of Vx is not pressed.
 * Checks the keyboard, and if the key corresponding to the value of Vx is currently in the up position, PC is
 * increased by 2.
 *
 * @param reg
 */
CPU.prototype.sknp = function skipWhenKeyIsNotPressed(reg) {
	if (!this.motherboard.input.isKeyPressed(this.reg[reg])) {
		this.pc += 2
	}
};


CPU.prototype.wkp = function waitKeyPress(reg, key) {
	this.halt = true;

	this.reg.writeUInt8(
	);
};
