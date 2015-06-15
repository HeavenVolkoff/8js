/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

function Audio() {
	this.isPlaying = false;
}

module.exports.Audio = Audio;

Audio.prototype.play = function play() {
	this.isPlaying = true;
	//TODO: implement buzz play
};

Audio.prototype.stop = function stop() {
	this.isPlaying = false;
	//TODO: implement buzz stop
};