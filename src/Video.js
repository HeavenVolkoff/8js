/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

/**
 * Video Class
 *
 * @param canvasHeight
 * @param canvasWidth
 * @constructor
 */
function Video(canvasHeight, canvasWidth) {
	this.width = 64;
	this.height = 32;

	this.pixel = new Array(this.width * this.height);

	if (canvasHeight < canvasWidth) {
		this.scale = canvasHeight / this.height;
	} else {
		this.scale = canvasWidth / this.width;
	}
}

module.exports.Video = Video;

Video.prototype.drawSprite = function drawSprite(x, y, sprite) {
	var carry = 0;

	for (var yLine = 0; yLine < sprite.height; yLine++) {
		var pixel = sprite.data.readUInt8(yLine);

		for (var xLine = 0; xLine < sprite.width; xLine++) {
			if ((pixel & (0x80 >> xLine)) !== 0) {
				var pixelPos = ((x + xLine) % this.width) + (((y + yLine) % this.height) * this.width);

				if (this.pixel[pixelPos] === 1) {
					carry = 1;
				}

				var color = this.pixel[pixelPos] ^ 1;
				this.pixel[pixelPos] = color;

				this.promise.x = ((x + xLine) % this.width) * this.scale;
				this.promise.y = ((y + yLine) % this.height) * this.scale;
				this.promise.realX = x;
				this.promise.realY = y;
				this.promise.scale = this.scale;
				this.promise.color = color ? 'black' : 'white';
				this.promise.draw.call(this.promise);
			}
		}
	}

	return carry;
};

Video.prototype.clear = function clearScreen() {
	this.pixel = new Array(this.width * this.height);

	this.promise.clearTimes++;
	this.promise.clear.call(this.promise);
};

Video.prototype.promise = {
	clearTimes: 0,
	x: undefined,
	y: undefined,
	realX: undefined,
	realY: undefined,
	scale: undefined,
	color: undefined};
Video.prototype.promise.draw = function(){};
Video.prototype.promise.clear = function(){};