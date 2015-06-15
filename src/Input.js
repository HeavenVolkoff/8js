/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Input() {
	EventEmitter.call(this);
	this.keyboard = new Array(16);
}

util.inherits(Input, EventEmitter);

module.exports.Input = Input;

Input.prototype.isKeyPressed = function isKeyPressed(key) {
	return !!this.keyboard[key];
};