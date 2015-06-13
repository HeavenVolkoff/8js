/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

function Chip8(rom, canvas) {
	this.cpu = new CPU(this);
	this.memory = new Memory(rom);
	this.video = new Video(canvas);
	this.input = new Input();
	this.audio = new Audio();
}

Chip8.prototype.init = function initialize() {
	var self = this;
	var clock = new Worker('clock.js');

	clock.onmessage = function () {
		self.cycle();
	}
};

Chip8.prototype.restart = function restart(rom) {
	//TODO: Clear Everything and reset rom
};

Chip8.prototype.cycle = function emulateCycle() {
	if (!this.cpu.halt) {
		var opCode = this.memory.buffer.readUInt16BE(this.cpu.pc);
		this.opCode[(opCode & 0xF000) >> 12](opCode);
	}
};

/**
 * OpCodes Function Array
 *
 * @type {[]}
 */
Chip8.prototype.opCode = [
	function opCode0(opCode) {
		switch (opCode) {
			case 0x00E0:
				this.cpu.cls();
				break;
			case 0x00EE:
				this.cpu.return();
				break;
			default:
			//TODO: 0nnn, function, thought it' considered deprecated
		}
	},
	function opCode1(opCode) {
		this.cpu.jump(opCode & 0x0FFF);
	},
	function opCode2(opCode) {
		this.cpu.call(opCode & 0x0FFF);
	},
	function opCode3(opCode) {
		this.cpu.se((opCode & 0x0F00) >> 8, opCode & 0x00FF);
	},
	function opCode4(opCode) {
		this.cpu.sne((opCode & 0x0F00) >> 8, opCode & 0x00FF);
	},
	function opCode5(opCode) {
		this.cpu.ser((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4);
	},
	function opCode6(opCode) {
		this.cpu.move((opCode & 0x0F00) >> 8, opCode & 0x00FF);
	},
	function opCode7(opCode) {
		this.cpu.add((opCode & 0x0F00) >> 8, opCode & 0x00FF);
	},
	function opCode8(opCode) {
		var x = (opCode & 0x0F00) >> 8;
		var y = (opCode & 0x00F0) >> 4;

		switch (opCode & 0x000F) {
			case 0x0:
				this.cpu.mover(x, y);
				break;
			case 0x1:
				this.cpu.or(x, y);
				break;
			case 0x2:
				this.cpu.and(x, y);
				break;
			case 0x3:
				this.cpu.xor(x, y);
				break;
			case 0x4:
				this.cpu.addr(x, y);
				break;
			case 0x5:
				this.cpu.subr(x, y);
				break;
			case 0x6:
				this.cpu.shr(x);
				break;
			case 0x7:
				this.cpu.subrn(x, y);
				break;
			case 0xE:
				this.cpu.shl(x);
				break;
		}
	},
	function opCode9(opCode) {
		this.cpu.sner((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4);
	},
	function opCodeA(opCode) {
		this.cpu.movei(opCode & 0x0FFF);
	},
	function opCodeB(opCode) {
		this.cpu.jumpr(opCode & 0x0FFF);
	},
	function opCodeC(opCode) {
		this.cpu.rnd((opCode & 0x0F00) >> 8, opCode & 0x00FF);
	},
	function opCodeD(opCode) {
		this.cpu.dwr((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4, opCode & 0x000F);
	},
	function opCodeE(opCode) {
		var x = (opCode & 0x0F00) >> 8;

		switch (opCode & 0x00FF) {
			case 0x9E:
				this.cpu.skp(x);
				break;
			case 0xA1:
				this.cpu.sknp(x);
				break;
		}
	},
	function opCodeF(opCode) {
		var x = (opCode & 0x0F00) >> 8;

		switch (opCode & 0x00FF) {
			case 0x07:
				this.cpu.movedtr(x);
				break;
			case 0x0A:
				this.cpu.wkp(x);
				break;
			case 0x15:
				this.cpu.moverdt(x);
				break;
			case 0x18:
				this.cpu.moverst(x);
				break;
			case 0x1E:
				this.cpu.addi(x);
				break;
			case 0x29:
				this.cpu.moveft(x);
				break;
			case 0x33:
				this.cpu.movebcd(x);
				break;
			case 0x55:
				this.cpu.store(x);
				break;
			case 0x65:
				this.cpu.read(x);
				break;
		}
	}
];