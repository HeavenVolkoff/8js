/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Audio = require('./Audio.js');
var Memory = require('./Memory.js');
var Video = require('./Video.js');
var Input = require('./Input.js');
var CPU = require('./CPU.js');

/**
 * Chip8 Control Class
 *
 * @param rom
 * @param canvas
 * @param audio
 * @constructor
 */
function Chip8(rom, canvas, audio) {
	EventEmitter.call(this);

	this.cpu = new CPU(this);
	this.memory = new Memory(rom);
	this.video = new Video(canvas.height, canvas.width);
	this.input = new Input();
	this.audio = new Audio(audio.duration);

	this.interval = {
		timer: 0,
		cycle: 0
	};

	var self = this;

	this.audio.promise.play = function () {
		self.emit('playAudio');
	};
	this.audio.promise.stop = function () {
		self.emit('stopAudio');
	};
	this.video.promise.clear = function () {
		self.emit('clearScreen', {clearTimes: this.clearTimes});
	};
	this.video.promise.draw = function () {
		self.emit('drawSprite', {x: this.x, y: this.y, scale: this.scale, color: this.color});
	};

	/**
	 * OpCodes Function Array
	 *
	 * @type {[]}
	 */
	this.opCode = [
		function opCode0(opCode) {
			switch (opCode) {
				case 0x00E0:
					self.cpu.cls();
					break;
				case 0x00EE:
					self.cpu.return();
					break;
				default:
				//TODO: 0nnn, function, thought it' considered deprecated
			}
		},
		function opCode1(opCode) {
			self.cpu.jump(opCode & 0x0FFF);
		},
		function opCode2(opCode) {
			self.cpu.call(opCode & 0x0FFF);
		},
		function opCode3(opCode) {
			self.cpu.se((opCode & 0x0F00) >> 8, opCode & 0x00FF);
		},
		function opCode4(opCode) {
			self.cpu.sne((opCode & 0x0F00) >> 8, opCode & 0x00FF);
		},
		function opCode5(opCode) {
			self.cpu.ser((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4);
		},
		function opCode6(opCode) {
			self.cpu.move((opCode & 0x0F00) >> 8, opCode & 0x00FF);
		},
		function opCode7(opCode) {
			self.cpu.add((opCode & 0x0F00) >> 8, opCode & 0x00FF);
		},
		function opCode8(opCode) {
			var x = (opCode & 0x0F00) >> 8;
			var y = (opCode & 0x00F0) >> 4;

			switch (opCode & 0x000F) {
				case 0x0:
					self.cpu.mover(x, y);
					break;
				case 0x1:
					self.cpu.or(x, y);
					break;
				case 0x2:
					self.cpu.and(x, y);
					break;
				case 0x3:
					self.cpu.xor(x, y);
					break;
				case 0x4:
					self.cpu.addr(x, y);
					break;
				case 0x5:
					self.cpu.subr(x, y);
					break;
				case 0x6:
					self.cpu.shr(x);
					break;
				case 0x7:
					self.cpu.subrn(x, y);
					break;
				case 0xE:
					self.cpu.shl(x);
					break;
				default:
					throw new Error('Unknown opCode');
			}
		},
		function opCode9(opCode) {
			self.cpu.sner((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4);
		},
		function opCodeA(opCode) {
			self.cpu.movei(opCode & 0x0FFF);
		},
		function opCodeB(opCode) {
			self.cpu.jumpr(opCode & 0x0FFF);
		},
		function opCodeC(opCode) {
			self.cpu.rnd((opCode & 0x0F00) >> 8, opCode & 0x00FF);
		},
		function opCodeD(opCode) {
			self.cpu.dwr((opCode & 0x0F00) >> 8, (opCode & 0x00F0) >> 4, opCode & 0x000F);
		},
		function opCodeE(opCode) {
			var x = (opCode & 0x0F00) >> 8;

			switch (opCode & 0x00FF) {
				case 0x9E:
					self.cpu.skp(x);
					break;
				case 0xA1:
					self.cpu.sknp(x);
					break;
				default:
					throw new Error('Unknown opCode');
			}
		},
		function opCodeF(opCode) {
			var x = (opCode & 0x0F00) >> 8;

			switch (opCode & 0x00FF) {
				case 0x07:
					self.cpu.movedtr(x);
					break;
				case 0x0A:
					self.cpu.wkp(x);
					break;
				case 0x15:
					self.cpu.moverdt(x);
					break;
				case 0x18:
					self.cpu.moverst(x);
					break;
				case 0x1E:
					self.cpu.addi(x);
					break;
				case 0x29:
					self.cpu.moveft(x);
					break;
				case 0x33:
					self.cpu.movebcd(x);
					break;
				case 0x55:
					self.cpu.store(x);
					break;
				case 0x65:
					self.cpu.read(x);
					break;
				default:
					throw new Error('Unknown opCode');
			}
		}
	];
}

util.inherits(Chip8, EventEmitter);

module.exports = Chip8;

Chip8.prototype.init = function initialize() {
	var self = this;
	var now;
	var old = performance.now();
	var timerOld = old;

	this.interval.cycle = setInterval(function () {
		for (var counter = 0; counter < self.cpu.clock;) {
			now = performance.now();
			if(now - old >= (1 / self.cpu.clock)){
				self.cycle();
				counter++;
				old = now;
			}
			if(now - timerOld >= self.cpu.timer.clock){
				self.cpu.updateTimers();
				timerOld = now;
			}
		}
	}, 1);
};

Chip8.prototype.restart = function restart(rom) {
	clearInterval(this.interval.cycle);
	clearInterval(this.interval.timer);

	this.audio.canStop = true;
	this.audio.stop();
	this.video.clear();
	this.memory.clear();
	this.input.clear();
	this.cpu.clear();

	this.memory.load(rom);
	this.init();
};

Chip8.prototype.cycle = function emulateCycle() {
	if (!this.cpu.halt) {
		var opCode = this.memory.buffer.readUInt16BE(this.cpu.pc.readUInt16BE(0));
		this.opCode[(opCode & 0xF000) >> 12](opCode);
	}
};