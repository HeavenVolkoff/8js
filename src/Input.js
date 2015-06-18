/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Input() {
	EventEmitter.call(this);

	/**
	 * Control each key state
	 *
	 * @type {Array}
	 */
	this.keyboard = new Array(16);

	/**
	 *  -> ORIGINAL HEXADECIMAL KEYBOARD LAYOUT
	 *  1 2 3 C
	 *  4 5 6 D
	 *  7 8 9 E
	 *  A 0 B F
	 *
	 * -> ACTUAL BIND LAYOUT
	 *  1 2 3 4
	 *  Q W E R
	 *  A S D F
	 *  Z X C V
	 */
	this.bind = {
		49: 0x1, 50: 0x2, 51: 0x3, 52: 0xC,
		81: 0x4, 87: 0x5, 69: 0x6, 82: 0xD,
		65: 0x7, 83: 0x8, 68: 0x9, 70: 0xE,
		90: 0xA, 88: 0x0, 67: 0xB, 86: 0xF
	};
}

util.inherits(Input, EventEmitter);

module.exports = Input;

Input.prototype.isKeyPressed = function isKeyPressed(key) {
	return !!this.keyboard[key];
};

Input.prototype.keyDown = function keyDown(key) {
	if (this.bind[key]) {
		this.keyboard[this.bind[key]] = true;
		this.emit('keypress');
	}
};

Input.prototype.keyUp = function (key) {
	if (this.bind[key]) {
		this.keyboard[this.bind[key]] = false;
	}
};

Input.prototype.clear = function clear() {
	this.keyboard = new Array(16);
};