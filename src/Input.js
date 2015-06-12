/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

function Input() {
 EventEmitter2.call(this);
	this.keyboard = new Array(16);
}

heir.inherit(Input, EventEmitter2);

Input.prototype.isKeyPressed = function isKeyPressed(key) {
	return !!this.keyboard[key];
};