/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

function Video(canvas) {
	this.width = 64;
	this.height = 32;

	this.ctx = canvas.getContext('2d');

	this.pixel = new Array(this.width * this.height);
}

Video.prototype.drawSprite = function drawSprite(x, y, sprite) {
	var carry = 0;

	for (var yLine = 0; yLine < sprite.height; yLine++) {
		for (var xLine = 0; xLine < sprite.width; xLine++) {
			if (sprite.data.readUint8(yLine) != 0) {
				if (this.pixel[((x + xLine) % this.width) + (((y + yLine) % this.height) * this.width)] === 1) {
					carry = 1;
				}

				var color = this.pixel[((x + xLine) % this.width) + (((y + yLine) % this.height) * this.width)] ^ 1;
				this.pixel[((x + xLine) % this.width) + (((y + yLine) % this.height) * this.width)] = color;

				this.ctx.fillStyle = color ? 'black' : 'white';
				this.ctx.fillRect(x + xLine, y + yLine, 1, 1);
			}
		}
	}

	return carry;
};