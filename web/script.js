/**
 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
 */

(function ($, Chip8) {
	'use strict';
	var romInput = $('#romInput');
	var fileReader = new FileReader();

	$('#changeRomButton').click(function () {
		romInput.click();
	});

	romInput.change(function () {
		var self = this;
		var file = this.files[0];

		fileReader.onloadend = function () {
			window.file = fileReader.result;
			window.chip = new Chip8(fileReader.result, $('#chip8')[0]);
		};

		fileReader.readAsBinaryString(file);
	});
})(window.jQuery, window.Chip8);