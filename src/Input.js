/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

function Input() {
	this.keyboard = new Array(16);
}

Input.prototype.isKeyPressed = function isKeyPressed(key) {
	return !!this.keyboard[key];
};

Input.prototype.waitKeyPress = function waitKeyPress(key) {

};