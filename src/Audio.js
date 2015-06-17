/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

/**
 * Audio Class
 *
 * @param duration
 * @constructor
 */
function Audio(duration) {
	this.duration = duration;
	this.isPlaying = false;
	this.canStop = false;
}

module.exports.Audio = Audio;

Audio.prototype.play = function play() {
	var self = this;

	this.isPlaying = true;
	this.canStop = false;

	this.promise.play.call(this.promise);

	setTimeout(function () {
		self.canStop = true;
	}, this.duration * 1000);
};

Audio.prototype.stop = function stop() {
	if (this.canStop) {
		this.promise.stop.call(this.promise);
		this.isPlaying = false;
	}
};

Audio.prototype.promise = {};
Audio.prototype.promise.play = function () {
};
Audio.prototype.promise.stop = function () {
};