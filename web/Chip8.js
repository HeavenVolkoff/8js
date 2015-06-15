(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a)return a(o, !0);
				if (i)return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {exports: {}};
			t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}

	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++)s(r[o]);
	return s
})({
	1: [function (require, module, exports) {
		/**
		 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
		 */

		function Audio() {
			this.isPlaying = false;
			this.beep = new window.Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
			this.beep.loop = true;
			this.canStop = false;
			this.shouldStop = false;
		}

		module.exports.Audio = Audio;

		Audio.prototype.play = function play() {
			var self = this;

			this.isPlaying = true;
			this.shouldStop = false;
			this.canStop = false;

			this.beep.play();

			setTimeout(function () {
				self.canStop = true;
			}, this.beep.duration * 1000);
		};

		Audio.prototype.stop = function stop() {
			if (this.canStop) {
				this.beep.pause();
				this.beep.currentTime = 0;
				this.isPlaying = false;

			} else {
				this.shouldStop = true;
			}

		};
	}, {}],
	2: [function (require, module, exports) {
		(function (Buffer) {
			/**
			 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
			 */

			/**
			 * Returns a random integer between min (included) and max (excluded)
			 *
			 * @param min
			 * @param max
			 * @returns {number}
			 */
			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			}

			/**
			 * CPU Stack
			 *
			 * @constructor
			 */
			function Stack() {
				var buffer = new Buffer(16 * 2);
				buffer.fill(0x0);
				var pointer = 0;

				this.pushFrom = function pushFrom(buff) {
					console.log('Push to Stack');
					buff.copy(buffer, pointer);
					pointer += 2;
				};

				this.popTo = function popTo(buff) {
					console.log('Pop from Stack');
					pointer -= 2;
					buffer.copy(buff, 0, pointer, pointer + buff.length);
				};
			}

			/**
			 * System CPU
			 *
			 * @returns {CPU}
			 * @constructor
			 */
			function CPU(motherboard) {
				/**
				 * Registers:
				 * 15 8-bit general purpose registers, plus a
				 * 16th register used  for the ‘carry flag’
				 *
				 * @type {Buffer}
				 */
				this.reg = new Buffer(16);
				this.reg.fill(0x0);

				/**
				 * Index Register
				 * Value Range: 0x000 - 0xFFF
				 *
				 * @type {Buffer}
				 */
				this.i = new Buffer(2);
				this.i.fill(0x0);

				/**
				 * CPU Program Counter
				 * Value Range: 0x000 - 0xFFF
				 * Starts at 0x200 (see Memory)
				 *
				 * @type {Buffer}
				 */
				this.pc = new Buffer("0200", "hex");

				/**
				 * CPU stack
				 * Only used to store return addresses when subroutines are called
				 *
				 * @type {Stack}
				 */
				this.stack = new Stack();

				/**
				 * CPU Timers
				 * Used to count down at 60hz
				 *
				 * @type {{delay: number, sound: number}}
				 */
				this.timer = {
					delay: 0,
					sound: 0
				};

				/**
				 * Used to stop cpu execution
				 *
				 * @type {boolean}
				 */
				this.halt = false;

				/**
				 * Reference to the object that handle the connections
				 */
				this.motherboard = motherboard;
			}

			module.exports.CPU = CPU;

			/**
			 * Function to move the program counter to the next operation
			 */
			CPU.prototype.nextInstruction = function incrementsPC() {
				this.pc.writeUInt16BE(this.pc.readUInt16BE(0) + 2);
			};

			CPU.prototype.updateTimers = function updateTimers() {
				if (this.timer.sound > 0) {
					this.timer.sound--;
				} else if (this.motherboard.audio.isPlaying) {
					this.motherboard.audio.stop();
				}

				if (this.timer.delay > 0) {
					this.timer.delay--;
				}
			};

			/**
			 * 00E0 - CLS
			 *
			 * Clear the display.
			 */
			CPU.prototype.cls = function clearScreen() {
				this.motherboard.video.clear();
				this.nextInstruction();
			};

			/**
			 * 00EE - RET
			 *
			 * Return from a subroutine.
			 * The interpreter sets the program counter to the address at the top of the stack, then subtracts 1 from the stack
			 * pointer.
			 */
			CPU.prototype.return = function returnFromSubroutine() {
				this.stack.popTo(this.pc);
				this.nextInstruction();
			};

			/**
			 * 1nnn - JP addr
			 *
			 * Jump to location nnn.
			 * The interpreter sets the program counter to nnn.
			 *
			 * @param address
			 */
			CPU.prototype.jump = function jumpToAddress(address) {
				this.pc.writeUInt16BE(address);
			};

			/**
			 * Bnnn - JP V0, addr
			 *
			 * Jump to location nnn + V0.
			 * The program counter is set to nnn plus the value of V0.
			 *
			 * @param address
			 */
			CPU.prototype.jumpr = function jumpToAddressPlusV0(address) {
				this.pc.writeUInt16BE(address + this.reg.readUInt8(0));
			};

			/**
			 * 2nnn - CALL addr
			 *
			 * Call subroutine at nnn.
			 * The interpreter increments the stack pointer, then puts the current PC on the top of the stack. The PC is then
			 * set to nnn.
			 *
			 * @param address
			 */
			CPU.prototype.call = function callSubroutine(address) {
				this.stack.pushFrom(this.pc);
				this.pc.writeUInt16BE(address);
			};

			/**
			 * 3xkk - SE Vx, byte
			 *
			 * Skip next instruction if Vx = kk.
			 * The interpreter compares register Vx to kk, and if they are equal, increments the program counter by 2.
			 *
			 * @param reg
			 * @param value
			 */
			CPU.prototype.se = function skipEqual(reg, value) {
				if (this.reg[reg] === value) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * 5xy0 - SE Vx, Vy
			 *
			 * Skip next instruction if Vx = Vy.
			 * The interpreter compares register Vx to register Vy, and if they are equal, increments the program counter by 2.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.ser = function skipEqualBetweenRegs(reg1, reg2) {
				if (this.reg[reg1] === this.reg[reg2]) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * 4xkk - SNE Vx, byte
			 *
			 * Skip next instruction if Vx != kk.
			 * The interpreter compares register Vx to kk, and if they are not equal, increments the program counter by 2.
			 *
			 * @param reg
			 * @param value
			 */
			CPU.prototype.sne = function skipNotEqual(reg, value) {
				if (this.reg[reg] !== value) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * 9xy0 - SNE Vx, Vy
			 *
			 * Skip next instruction if Vx != Vy.
			 * The values of Vx and Vy are compared, and if they are not equal, the program counter is increased by 2.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.sner = function skipNotEqualRegs(reg1, reg2) {
				if (this.reg[reg1] !== this.reg[reg2]) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * 6xkk - LD Vx, byte
			 *
			 * Set Vx = kk.
			 * The interpreter puts the value kk into register Vx.
			 *
			 * @param reg
			 * @param value
			 */
			CPU.prototype.move = function moveValueToReg(reg, value) {
				this.reg.writeUInt8(value, reg);
				this.nextInstruction();
			};

			/**
			 * 8xy0 - LD Vx, Vy
			 *
			 * Set Vx = Vy.
			 * Stores the value of register Vy in register Vx.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.mover = function moveRegToReg(reg1, reg2) {
				this.reg.copy(this.reg, reg1, reg2, reg2 + 1);
				this.nextInstruction();
			};

			/**
			 * Annn - LD I, addr
			 *
			 * Set I = nnn.
			 * The value of register I is set to nnn.
			 *
			 * @param address
			 */
			CPU.prototype.movei = function moveAddressToI(address) {
				this.i.writeUInt16BE(address);
				this.nextInstruction();
			};

			/**
			 * Fx07 - LD Vx, DT
			 *
			 * Set Vx = delay timer value.
			 * The value of DT is placed into Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.movedtr = function moveDelayTimeToReg(reg) {
				this.reg.writeUInt8(this.timer.delay, reg);
				this.nextInstruction();
			};

			/**
			 * Fx15 - LD DT, Vx
			 *
			 * Set delay timer = Vx.
			 * DT is set equal to the value of Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.moverdt = function moveRegToDelayTime(reg) {
				this.timer.delay = this.reg[reg];

				this.nextInstruction();
			};

			/**
			 * Fx18 - LD ST, Vx
			 *
			 * Set sound timer = Vx.
			 * ST is set equal to the value of Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.moverst = function moveRegToSoundTime(reg) {
				this.timer.sound = this.reg[reg];
				this.motherboard.audio.play();

				this.nextInstruction();
			};

			/**
			 * 7xkk - ADD Vx, byte
			 *
			 * Set Vx = Vx + kk.
			 * Adds the value kk to the value of register Vx, then stores the result in Vx.
			 *
			 * @param reg
			 * @param value
			 */
			CPU.prototype.add = function addValue(reg, value) {
				this.reg.writeUInt8(this.reg[reg] + value, reg, true);
				this.nextInstruction();
			};

			/**
			 * 8xy4 - ADD Vx, Vy
			 *
			 * Set Vx = Vx + Vy, set VF = carry.
			 * The values of Vx and Vy are added together. If the result is greater than 8 bits (i.e., > 255,) VF is set to 1,
			 * otherwise 0. Only the lowest 8 bits of the result are kept, and stored in Vx.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.addr = function addRegs(reg1, reg2) {
				var result = this.reg[reg1] + this.reg[reg2];

				if (result > 0xFF) {
					this.reg.writeUInt8(1, 0xF);
				} else {
					this.reg.writeUInt8(0, 0xF);
				}

				this.reg.writeUInt8(result, reg1, true);

				this.nextInstruction();
			};

			/**
			 * Fx1E - ADD I, Vx
			 *
			 * Set I = I + Vx.
			 * The values of I and Vx are added, and the results are stored in I.
			 *
			 * @param reg
			 */
			CPU.prototype.addi = function addRegToI(reg) {
				var result = this.i.readUInt16BE(0) + this.reg.readUInt8(reg);

				if (result > 0xFFF) {
					this.reg.writeUInt8(1, 0xF);
				} else {
					this.reg.writeUInt8(0, 0xF);
				}

				this.i.writeUInt16BE(result, 0, true);
				this.nextInstruction();
			};

			/**
			 * 8xy1 - OR Vx, Vy
			 *
			 * Set Vx = Vx OR Vy.
			 * Performs a bitwise OR on the values of Vx and Vy, then stores the result in Vx. A bitwise OR compares the
			 * corresponding bits from two values, and if either bit is 1, then the same bit in the result is also 1. Otherwise,
			 * it is 0.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.or = function or(reg1, reg2) {
				this.reg.writeUInt8(this.reg[reg1] | this.reg[reg2], reg1);
				this.nextInstruction();
			};

			/**
			 * 8xy2 - AND Vx, Vy
			 *
			 * Set Vx = Vx AND Vy.
			 * Performs a bitwise AND on the values of Vx and Vy, then stores the result in Vx. A bitwise AND compares the
			 * corresponding bits from two values, and if both bits are 1, then the same bit in the result is also 1. Otherwise,
			 * it is 0.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.and = function and(reg1, reg2) {
				this.reg.writeUInt8(this.reg[reg1] & this.reg[reg2], reg1);
				this.nextInstruction();
			};

			/**
			 * 8xy3 - XOR Vx, Vy
			 *
			 * Set Vx = Vx XOR Vy.
			 * Performs a bitwise exclusive OR on the values of Vx and Vy, then stores the result in Vx. An exclusive OR
			 * compares  the corresponding bits from two values, and if the bits are not both the same, then the corresponding
			 * bit in the result is set to 1. Otherwise, it is 0.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.xor = function xor(reg1, reg2) {
				this.reg.writeUInt8(this.reg[reg1] ^ this.reg[reg2], reg1);
				this.nextInstruction();
			};

			/**
			 * 8xy5 - SUB Vx, Vy
			 *
			 * Set Vx = Vx - Vy, set VF = NOT borrow.
			 * If Vx > Vy, then VF is set to 1, otherwise 0. Then Vy is subtracted from Vx, and the results stored in Vx.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.subr = function subRegs(reg1, reg2) {
				if (this.reg[reg1] > this.reg[reg2]) {
					this.reg.writeUInt8(1, 0xF);
				} else {
					this.reg.writeUInt8(0, 0xF);
				}

				this.reg.writeUInt8(this.reg[reg1] - this.reg[reg2], reg1, true);
				this.nextInstruction();
			};

			/**
			 * 8xy7 - SUBN Vx, Vy
			 *
			 * Set Vx = Vy - Vx, set VF = NOT borrow.
			 * If Vy > Vx, then VF is set to 1, otherwise 0. Then Vx is subtracted from Vy, and the results stored in Vx.
			 *
			 * @param reg1
			 * @param reg2
			 */
			CPU.prototype.subrn = function subRegsN(reg1, reg2) {
				if (this.reg[reg1] < this.reg[reg2]) {
					this.reg.writeUInt8(1, 0xF);
				} else {
					this.reg.writeUInt8(0, 0xF);
				}

				this.reg.writeUInt8(this.reg[reg2] - this.reg[reg1], reg1, true);
				this.nextInstruction();
			};

			/**
			 * 8xy6 - SHR Vx {, Vy}
			 *
			 * Set Vx = Vx SHR 1.
			 * If the least-significant bit of Vx is 1, then VF is set to 1, otherwise 0. Then Vx is divided by 2.
			 *
			 * @param reg
			 */
			CPU.prototype.shr = function shiftRigth(reg) {
				this.reg.writeUInt8(this.reg[reg] & 0x1, 0xF);
				this.reg.writeUInt8(this.reg[reg] >> 1, reg);
				this.nextInstruction();
			};

			/**
			 * 8xyE - SHL Vx {, Vy}
			 *
			 * Set Vx = Vx SHL 1.
			 * If the most-significant bit of Vx is 1, then VF is set to 1, otherwise to 0. Then Vx is multiplied by 2.
			 *
			 * @param reg
			 */
			CPU.prototype.shl = function shiftLeft(reg) {
				this.reg.writeUInt8(this.reg[reg] >> 0xF, 0xF);
				this.reg.writeUInt8(this.reg[reg] << 1, reg);
				this.nextInstruction();
			};

			/**
			 * Cxkk - RND Vx, byte
			 *
			 * Set Vx = random byte AND kk.
			 * The interpreter generates a random number from 0 to 255, which is then ANDed with the value kk. The results are
			 * stored in Vx. See instruction 8xy2 for more information on AND.
			 *
			 * @param reg
			 * @param byte
			 */
			CPU.prototype.rnd = function generateRandom(reg, byte) {
				this.reg.writeUInt8(getRandomInt(0, 256) & byte, reg);
				this.nextInstruction();
			};

			/**
			 * Dxyn - DRW Vx, Vy, nibble
			 *
			 * Display n-byte sprite starting at memory location I at (Vx, Vy), set VF = collision.
			 * The interpreter reads n bytes from memory, starting at the address stored in I. These bytes are then displayed as
			 * sprites on screen at coordinates (Vx, Vy). Sprites are XORed onto the existing screen. If this causes any pixels
			 * to be erased,  VF is set to 1, otherwise it is set to 0. If the sprite is positioned so part of it is outside the
			 * coordinates of the display, it wraps around to the opposite side of the screen.
			 *
			 * @param regX
			 * @param regY
			 * @param nibble
			 */
			CPU.prototype.dwr = function display(regX, regY, nibble) {
				var i = this.i.readUInt16BE(0);

				this.reg.writeUInt8(
					this.motherboard.video.drawSprite(this.reg.readUInt8(regX), this.reg.readUInt8(regY),
						{
							data: this.motherboard.memory.buffer.slice(i, i + nibble),
							width: 8,
							height: nibble
						}
					), 0xF);

				this.nextInstruction();
			};

			/**
			 * Ex9E - SKP Vx
			 *
			 * Skip next instruction if key with the value of Vx is pressed.
			 * Checks the keyboard, and if the key corresponding to the value of Vx is currently in the down position, PC is
			 * increased by 2.
			 *
			 * @param reg
			 */
			CPU.prototype.skp = function skipWhenKeyIsPressed(reg) {
				if (this.motherboard.input.isKeyPressed(this.reg[reg])) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * ExA1 - SKNP Vx
			 *
			 * Skip next instruction if key with the value of Vx is not pressed.
			 * Checks the keyboard, and if the key corresponding to the value of Vx is currently in the up position, PC is
			 * increased by 2.
			 *
			 * @param reg
			 */
			CPU.prototype.sknp = function skipWhenKeyIsNotPressed(reg) {
				if (!this.motherboard.input.isKeyPressed(this.reg[reg])) {
					this.nextInstruction();
				}
				this.nextInstruction();
			};

			/**
			 * Fx0A - LD Vx, K
			 *
			 * Wait for a key press, store the value of the key in Vx.
			 * All execution stops until a key is pressed, then the value of that key is stored in Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.wkp = function waitKeyPress(reg) {
				var self = this;
				this.halt = true;

				this.motherboard.input.once("keypress", function (key) {
					self.reg.writeUInt8(key, reg);
					self.nextInstruction();
					self.halt = false;
				});
			};

			/**
			 * Fx29 - LD F, Vx
			 * Set I = location of sprite for digit Vx.
			 * The value of I is set to the location for the hexadecimal sprite corresponding to the value of Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.moveft = function moveFontPosToReg(reg) {
				this.i.writeUInt16BE(this.reg.readUInt8(reg) * 5);
				this.nextInstruction();
			};

			/**
			 * Fx33 - LD B, Vx
			 * Store BCD representation of Vx in memory locations I, I+1, and I+2.
			 * The interpreter takes the decimal value of Vx, and places the hundreds digit in memory at location in I, the tens
			 * digit at location I+1, and the ones digit at location I+2.
			 *
			 * @param reg
			 */
			CPU.prototype.movebcd = function moveBCDOfRegToMem(reg) {
				var bcd = this.reg.readUInt8(reg);
				var bcd100 = bcd / 100;
				var bcd10 = (bcd / 10) % 10;
				var bcd1 = bcd % 10;
				var i = this.i.readUInt16BE(0);

				this.motherboard.memory.buffer.writeUInt8(bcd100, i);
				this.motherboard.memory.buffer.writeUInt8(bcd10, ++i);
				this.motherboard.memory.buffer.writeUInt8(bcd1, ++i);
				this.nextInstruction();
			};

			/**
			 * Fx55 - LD [I], Vx
			 * Store registers V0 through Vx in memory starting at location I.
			 * The interpreter copies the values of registers V0 through Vx into memory, starting at the address in I.
			 *
			 * @param reg
			 */
			CPU.prototype.store = function storeRegsFromMemory(reg) {
				this.reg.copy(this.motherboard.memory.buffer, this.i.readUInt16BE(0), 0, reg + 1);
				this.i.writeUInt16BE(this.i.readUInt16BE(0) + reg + 1);
				this.nextInstruction();
			};

			/**
			 * Fx65 - LD Vx, [I]
			 * Read registers V0 through Vx from memory starting at location I.
			 * The interpreter reads values from memory starting at location I into registers V0 through Vx.
			 *
			 * @param reg
			 */
			CPU.prototype.read = function readRegsFromMemory(reg) {
				this.motherboard.memory.buffer.copy(this.reg, 0, this.i.readUInt16BE(0), this.i.readUInt16BE(0) + reg + 1);
				this.i.writeUInt16BE(this.i.readUInt16BE(0) + reg + 1);
				this.nextInstruction();
			};
		}).call(this, require("buffer").Buffer)
	}, {"buffer": 7}],
	3: [function (require, module, exports) {
		/**
		 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
		 */

		var Audio = require('./Audio.js').Audio;
		var Memory = require('./Memory.js').Memory;
		var Video = require('./Video.js').Video;
		var Input = require('./Input.js').Input;
		var CPU = require('./CPU.js').CPU;

		/**
		 * Chip 8 Control Class
		 *
		 * @param rom
		 * @param canvas
		 * @constructor
		 */
		function Chip8(rom, canvas) {
			this.cpu = new CPU(this);
			this.memory = new Memory(rom);
			this.video = new Video(canvas);
			this.input = new Input();
			this.audio = new Audio();

			var self = this;

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

		window.Chip8 = Chip8;

		Chip8.prototype.init = function initialize() {
			var self = this;
			var clock = new Worker('clock.js');

			clock.onmessage = function () {
				self.cycle();
			};
		};

		Chip8.prototype.restart = function restart(rom) {
			//TODO: Clear Everything and reset rom
		};

		Chip8.prototype.cycle = function emulateCycle() {
			if (!this.cpu.halt) {
				var opCode = this.memory.buffer.readUInt16BE(this.cpu.pc.readUInt16BE(0));
				console.log('opCode: 0x' + opCode.toString(16).toUpperCase());
				console.log(this.opCode[(opCode & 0xF000) >> 12]);
				this.opCode[(opCode & 0xF000) >> 12](opCode);
				this.cpu.updateTimers();
			}
		};
	}, {"./Audio.js": 1, "./CPU.js": 2, "./Input.js": 4, "./Memory.js": 5, "./Video.js": 6}],
	4: [function (require, module, exports) {
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
	}, {"events": 11, "util": 15}],
	5: [function (require, module, exports) {
		(function (Buffer) {
			/**
			 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
			 */

			/**
			 * The Systems Memory
			 *
			 * Map:
			 * 0x000-0x1FF - Chip 8 interpreter (contains font set in emu)
			 * 0x050-0x0A0 - Used for the built in 4x5 pixel font set (0-F)
			 * 0x200-0xFFF - Program ROM and work RAM
			 *
			 * @returns {Memory}
			 * @constructor
			 */

			function Memory(rom) {
				this.buffer = new Buffer(4096);
				this.buffer.fill(0x0);

				//Copy font data to memory
				(new Buffer([
					0xF0, 0x90, 0x90, 0x90, 0xF0, //0
					0x20, 0x60, 0x20, 0x20, 0x70, //1
					0xF0, 0x10, 0xF0, 0x80, 0xF0, //2
					0xF0, 0x10, 0xF0, 0x10, 0xF0, //3
					0x90, 0x90, 0xF0, 0x10, 0x10, //4
					0xF0, 0x80, 0xF0, 0x10, 0xF0, //5
					0xF0, 0x80, 0xF0, 0x90, 0xF0, //6
					0xF0, 0x10, 0x20, 0x40, 0x40, //7
					0xF0, 0x90, 0xF0, 0x90, 0xF0, //8
					0xF0, 0x90, 0xF0, 0x10, 0xF0, //9
					0xF0, 0x90, 0xF0, 0x90, 0x90, //A
					0xE0, 0x90, 0xE0, 0x90, 0xE0, //B
					0xF0, 0x80, 0x80, 0x80, 0xF0, //C
					0xE0, 0x90, 0x90, 0x90, 0xE0, //D
					0xF0, 0x80, 0xF0, 0x80, 0xF0, //E
					0xF0, 0x80, 0xF0, 0x80, 0x80  //F
				])).copy(this.buffer);

				if (typeof rom !== 'undefined') {
					this.load(rom);
				}
			}

			module.exports.Memory = Memory;

			Memory.prototype.load = function load(rom) {
				//Copy rom data to memory
				(new Buffer(rom, 'binary')).copy(this.buffer, 0x200);
			};

		}).call(this, require("buffer").Buffer)
	}, {"buffer": 7}],
	6: [function (require, module, exports) {
		/**
		 * Created by Vítor Augusto da Silva Vasconcellos on 6/11/15.
		 */

		function Video(canvas) {
			this.width = 64;
			this.height = 32;

			this.canvas = canvas;

			this.ctx = canvas.getContext('2d');

			this.pixel = new Array(this.width * this.height);
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

						console.log('Paint pixel (X: ' + x + xLine + ' Y: ' + y + yLine + ') of ' + (color ? 'black' : 'white'));

						this.drawPixel((x + xLine) % this.width, (y + yLine) % this.height, color ? 'black' : 'white');
					}
				}
			}

			return carry;
		};

		Video.prototype.clear = function clearScreen() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.pixel = new Array(this.width * this.height);
		};

		Video.prototype.drawPixel = function drawPixel(x, y, color) {
			var scale;

			if (this.canvas.height < this.canvas.width) {
				scale = this.canvas.height / this.height;
			} else {
				scale = this.canvas.width / this.width;
			}

			this.ctx.fillStyle = color;
			this.ctx.fillRect(x * scale, y * scale, scale, scale);
		};
	}, {}],
	7: [function (require, module, exports) {
		/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */

		var base64 = require('base64-js');
		var ieee754 = require('ieee754');
		var isArray = require('is-array');

		exports.Buffer = Buffer;
		exports.SlowBuffer = SlowBuffer;
		exports.INSPECT_MAX_BYTES = 50;
		Buffer.poolSize = 8192; // not used by this implementation

		var kMaxLength = 0x3fffffff;
		var rootParent = {};

		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Use Object implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * Note:
		 *
		 * - Implementation must support adding new properties to `Uint8Array` instances.
		 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
		 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
		 *
		 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
		 *
		 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
		 *    incorrect length in some situations.
		 *
		 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
		 * get the Object implementation, which is slower but will work correctly.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = (function () {
			try {
				var buf = new ArrayBuffer(0);
				var arr = new Uint8Array(buf);
				arr.foo = function () {
					return 42
				};
				return arr.foo() === 42 && // typed array instances can be augmented
					typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
					new Uint8Array(1).subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
			} catch (e) {
				return false
			}
		})();

		/**
		 * Class: Buffer
		 * =============
		 *
		 * The Buffer constructor returns instances of `Uint8Array` that are augmented
		 * with function properties for all the node `Buffer` API functions. We use
		 * `Uint8Array` so that square bracket notation works as expected -- it returns
		 * a single octet.
		 *
		 * By augmenting the instances, we can avoid modifying the `Uint8Array`
		 * prototype.
		 */
		function Buffer(arg) {
			if (!(this instanceof Buffer)) {
				// Avoid going through an ArgumentsAdaptorTrampoline in the common case.
				if (arguments.length > 1) return new Buffer(arg, arguments[1]);
				return new Buffer(arg)
			}

			this.length = 0;
			this.parent = undefined;

			// Common case.
			if (typeof arg === 'number') {
				return fromNumber(this, arg)
			}

			// Slightly less common case.
			if (typeof arg === 'string') {
				return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
			}

			// Unusual.
			return fromObject(this, arg)
		}

		function fromNumber(that, length) {
			that = allocate(that, length < 0 ? 0 : checked(length) | 0);
			if (!Buffer.TYPED_ARRAY_SUPPORT) {
				for (var i = 0; i < length; i++) {
					that[i] = 0
				}
			}
			return that
		}

		function fromString(that, string, encoding) {
			if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';

			// Assumption: byteLength() return value is always < kMaxLength.
			var length = byteLength(string, encoding) | 0;
			that = allocate(that, length);

			that.write(string, encoding);
			return that
		}

		function fromObject(that, object) {
			if (Buffer.isBuffer(object)) return fromBuffer(that, object);

			if (isArray(object)) return fromArray(that, object);

			if (object == null) {
				throw new TypeError('must start with number, buffer, array or string')
			}

			if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
				return fromTypedArray(that, object)
			}

			if (object.length) return fromArrayLike(that, object);

			return fromJsonObject(that, object)
		}

		function fromBuffer(that, buffer) {
			var length = checked(buffer.length) | 0;
			that = allocate(that, length);
			buffer.copy(that, 0, 0, length);
			return that
		}

		function fromArray(that, array) {
			var length = checked(array.length) | 0;
			that = allocate(that, length);
			for (var i = 0; i < length; i += 1) {
				that[i] = array[i] & 255
			}
			return that
		}

// Duplicate of fromArray() to keep fromArray() monomorphic.
		function fromTypedArray(that, array) {
			var length = checked(array.length) | 0;
			that = allocate(that, length);
			// Truncating the elements is probably not what people expect from typed
			// arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
			// of the old Buffer constructor.
			for (var i = 0; i < length; i += 1) {
				that[i] = array[i] & 255
			}
			return that
		}

		function fromArrayLike(that, array) {
			var length = checked(array.length) | 0;
			that = allocate(that, length);
			for (var i = 0; i < length; i += 1) {
				that[i] = array[i] & 255
			}
			return that
		}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
		function fromJsonObject(that, object) {
			var array;
			var length = 0;

			if (object.type === 'Buffer' && isArray(object.data)) {
				array = object.data;
				length = checked(array.length) | 0
			}
			that = allocate(that, length);

			for (var i = 0; i < length; i += 1) {
				that[i] = array[i] & 255
			}
			return that
		}

		function allocate(that, length) {
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				// Return an augmented `Uint8Array` instance, for best performance
				that = Buffer._augment(new Uint8Array(length))
			} else {
				// Fallback: Return an object instance of the Buffer class
				that.length = length;
				that._isBuffer = true
			}

			var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
			if (fromPool) that.parent = rootParent;

			return that
		}

		function checked(length) {
			// Note: cannot use `length < kMaxLength` here because that fails when
			// length is NaN (which is otherwise coerced to zero.)
			if (length >= kMaxLength) {
				throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
					'size: 0x' + kMaxLength.toString(16) + ' bytes')
			}
			return length | 0
		}

		function SlowBuffer(subject, encoding) {
			if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding);

			var buf = new Buffer(subject, encoding);
			delete buf.parent;
			return buf
		}

		Buffer.isBuffer = function isBuffer(b) {
			return !!(b != null && b._isBuffer)
		};

		Buffer.compare = function compare(a, b) {
			if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
				throw new TypeError('Arguments must be Buffers')
			}

			if (a === b) return 0;

			var x = a.length;
			var y = b.length;

			var i = 0;
			var len = Math.min(x, y);
			while (i < len) {
				if (a[i] !== b[i]) break;

				++i
			}

			if (i !== len) {
				x = a[i];
				y = b[i]
			}

			if (x < y) return -1;
			if (y < x) return 1;
			return 0
		};

		Buffer.isEncoding = function isEncoding(encoding) {
			switch (String(encoding).toLowerCase()) {
				case 'hex':
				case 'utf8':
				case 'utf-8':
				case 'ascii':
				case 'binary':
				case 'base64':
				case 'raw':
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return true;
				default:
					return false
			}
		};

		Buffer.concat = function concat(list, length) {
			if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.');

			if (list.length === 0) {
				return new Buffer(0)
			} else if (list.length === 1) {
				return list[0]
			}

			var i;
			if (length === undefined) {
				length = 0;
				for (i = 0; i < list.length; i++) {
					length += list[i].length
				}
			}

			var buf = new Buffer(length);
			var pos = 0;
			for (i = 0; i < list.length; i++) {
				var item = list[i];
				item.copy(buf, pos);
				pos += item.length
			}
			return buf
		};

		function byteLength(string, encoding) {
			if (typeof string !== 'string') string = String(string);

			if (string.length === 0) return 0;

			switch (encoding || 'utf8') {
				case 'ascii':
				case 'binary':
				case 'raw':
					return string.length;
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return string.length * 2;
				case 'hex':
					return string.length >>> 1;
				case 'utf8':
				case 'utf-8':
					return utf8ToBytes(string).length;
				case 'base64':
					return base64ToBytes(string).length;
				default:
					return string.length
			}
		}

		Buffer.byteLength = byteLength;

// pre-set for values that may exist in the future
		Buffer.prototype.length = undefined;
		Buffer.prototype.parent = undefined;

// toString(encoding, start=0, end=buffer.length)
		Buffer.prototype.toString = function toString(encoding, start, end) {
			var loweredCase = false;

			start = start | 0;
			end = end === undefined || end === Infinity ? this.length : end | 0;

			if (!encoding) encoding = 'utf8';
			if (start < 0) start = 0;
			if (end > this.length) end = this.length;
			if (end <= start) return '';

			while (true) {
				switch (encoding) {
					case 'hex':
						return hexSlice(this, start, end);

					case 'utf8':
					case 'utf-8':
						return utf8Slice(this, start, end);

					case 'ascii':
						return asciiSlice(this, start, end);

					case 'binary':
						return binarySlice(this, start, end);

					case 'base64':
						return base64Slice(this, start, end);

					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return utf16leSlice(this, start, end);

					default:
						if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
						encoding = (encoding + '').toLowerCase();
						loweredCase = true
				}
			}
		};

		Buffer.prototype.equals = function equals(b) {
			if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
			if (this === b) return true;
			return Buffer.compare(this, b) === 0
		};

		Buffer.prototype.inspect = function inspect() {
			var str = '';
			var max = exports.INSPECT_MAX_BYTES;
			if (this.length > 0) {
				str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
				if (this.length > max) str += ' ... '
			}
			return '<Buffer ' + str + '>'
		};

		Buffer.prototype.compare = function compare(b) {
			if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
			if (this === b) return 0;
			return Buffer.compare(this, b)
		};

		Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
			if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
			else if (byteOffset < -0x80000000) byteOffset = -0x80000000;
			byteOffset >>= 0;

			if (this.length === 0) return -1;
			if (byteOffset >= this.length) return -1;

			// Negative offsets start from the end of the buffer
			if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

			if (typeof val === 'string') {
				if (val.length === 0) return -1; // special case: looking for empty string always fails
				return String.prototype.indexOf.call(this, val, byteOffset)
			}
			if (Buffer.isBuffer(val)) {
				return arrayIndexOf(this, val, byteOffset)
			}
			if (typeof val === 'number') {
				if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
					return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
				}
				return arrayIndexOf(this, [val], byteOffset)
			}

			function arrayIndexOf(arr, val, byteOffset) {
				var foundIndex = -1;
				for (var i = 0; byteOffset + i < arr.length; i++) {
					if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
						if (foundIndex === -1) foundIndex = i;
						if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
					} else {
						foundIndex = -1
					}
				}
				return -1
			}

			throw new TypeError('val must be string, number or Buffer')
		};

// `get` will be removed in Node 0.13+
		Buffer.prototype.get = function get(offset) {
			console.log('.get() is deprecated. Access using array indexes instead.');
			return this.readUInt8(offset)
		};

// `set` will be removed in Node 0.13+
		Buffer.prototype.set = function set(v, offset) {
			console.log('.set() is deprecated. Access using array indexes instead.');
			return this.writeUInt8(v, offset)
		};

		function hexWrite(buf, string, offset, length) {
			offset = Number(offset) || 0;
			var remaining = buf.length - offset;
			if (!length) {
				length = remaining
			} else {
				length = Number(length);
				if (length > remaining) {
					length = remaining
				}
			}

			// must be an even number of digits
			var strLen = string.length;
			if (strLen % 2 !== 0) throw new Error('Invalid hex string');

			if (length > strLen / 2) {
				length = strLen / 2
			}
			for (var i = 0; i < length; i++) {
				var parsed = parseInt(string.substr(i * 2, 2), 16);
				if (isNaN(parsed)) throw new Error('Invalid hex string');
				buf[offset + i] = parsed
			}
			return i
		}

		function utf8Write(buf, string, offset, length) {
			return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}

		function asciiWrite(buf, string, offset, length) {
			return blitBuffer(asciiToBytes(string), buf, offset, length)
		}

		function binaryWrite(buf, string, offset, length) {
			return asciiWrite(buf, string, offset, length)
		}

		function base64Write(buf, string, offset, length) {
			return blitBuffer(base64ToBytes(string), buf, offset, length)
		}

		function ucs2Write(buf, string, offset, length) {
			return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
		}

		Buffer.prototype.write = function write(string, offset, length, encoding) {
			// Buffer#write(string)
			if (offset === undefined) {
				encoding = 'utf8';
				length = this.length;
				offset = 0;
				// Buffer#write(string, encoding)
			} else if (length === undefined && typeof offset === 'string') {
				encoding = offset;
				length = this.length;
				offset = 0;
				// Buffer#write(string, offset[, length][, encoding])
			} else if (isFinite(offset)) {
				offset = offset | 0;
				if (isFinite(length)) {
					length = length | 0;
					if (encoding === undefined) encoding = 'utf8'
				} else {
					encoding = length;
					length = undefined
				}
				// legacy write(string, encoding, offset, length) - remove in v0.13
			} else {
				var swap = encoding;
				encoding = offset;
				offset = length | 0;
				length = swap
			}

			var remaining = this.length - offset;
			if (length === undefined || length > remaining) length = remaining;

			if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
				throw new RangeError('attempt to write outside buffer bounds')
			}

			if (!encoding) encoding = 'utf8';

			var loweredCase = false;
			for (; ;) {
				switch (encoding) {
					case 'hex':
						return hexWrite(this, string, offset, length);

					case 'utf8':
					case 'utf-8':
						return utf8Write(this, string, offset, length);

					case 'ascii':
						return asciiWrite(this, string, offset, length);

					case 'binary':
						return binaryWrite(this, string, offset, length);

					case 'base64':
						// Warning: maxLength not taken into account in base64Write
						return base64Write(this, string, offset, length);

					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return ucs2Write(this, string, offset, length);

					default:
						if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
						encoding = ('' + encoding).toLowerCase();
						loweredCase = true
				}
			}
		};

		Buffer.prototype.toJSON = function toJSON() {
			return {
				type: 'Buffer',
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};

		function base64Slice(buf, start, end) {
			if (start === 0 && end === buf.length) {
				return base64.fromByteArray(buf)
			} else {
				return base64.fromByteArray(buf.slice(start, end))
			}
		}

		function utf8Slice(buf, start, end) {
			var res = '';
			var tmp = '';
			end = Math.min(buf.length, end);

			for (var i = start; i < end; i++) {
				if (buf[i] <= 0x7F) {
					res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
					tmp = ''
				} else {
					tmp += '%' + buf[i].toString(16)
				}
			}

			return res + decodeUtf8Char(tmp)
		}

		function asciiSlice(buf, start, end) {
			var ret = '';
			end = Math.min(buf.length, end);

			for (var i = start; i < end; i++) {
				ret += String.fromCharCode(buf[i] & 0x7F)
			}
			return ret
		}

		function binarySlice(buf, start, end) {
			var ret = '';
			end = Math.min(buf.length, end);

			for (var i = start; i < end; i++) {
				ret += String.fromCharCode(buf[i])
			}
			return ret
		}

		function hexSlice(buf, start, end) {
			var len = buf.length;

			if (!start || start < 0) start = 0;
			if (!end || end < 0 || end > len) end = len;

			var out = '';
			for (var i = start; i < end; i++) {
				out += toHex(buf[i])
			}
			return out
		}

		function utf16leSlice(buf, start, end) {
			var bytes = buf.slice(start, end);
			var res = '';
			for (var i = 0; i < bytes.length; i += 2) {
				res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
			}
			return res
		}

		Buffer.prototype.slice = function slice(start, end) {
			var len = this.length;
			start = ~~start;
			end = end === undefined ? len : ~~end;

			if (start < 0) {
				start += len;
				if (start < 0) start = 0
			} else if (start > len) {
				start = len
			}

			if (end < 0) {
				end += len;
				if (end < 0) end = 0
			} else if (end > len) {
				end = len
			}

			if (end < start) end = start;

			var newBuf;
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				newBuf = Buffer._augment(this.subarray(start, end))
			} else {
				var sliceLen = end - start;
				newBuf = new Buffer(sliceLen, undefined);
				for (var i = 0; i < sliceLen; i++) {
					newBuf[i] = this[i + start]
				}
			}

			if (newBuf.length) newBuf.parent = this.parent || this;

			return newBuf
		};

		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset(offset, ext, length) {
			if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint');
			if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}

		Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);

			var val = this[offset];
			var mul = 1;
			var i = 0;
			while (++i < byteLength && (mul *= 0x100)) {
				val += this[offset + i] * mul
			}

			return val
		};

		Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) {
				checkOffset(offset, byteLength, this.length)
			}

			var val = this[offset + --byteLength];
			var mul = 1;
			while (byteLength > 0 && (mul *= 0x100)) {
				val += this[offset + --byteLength] * mul
			}

			return val
		};

		Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 1, this.length);
			return this[offset]
		};

		Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 2, this.length);
			return this[offset] | (this[offset + 1] << 8)
		};

		Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 2, this.length);
			return (this[offset] << 8) | this[offset + 1]
		};

		Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);

			return ((this[offset]) |
				(this[offset + 1] << 8) |
				(this[offset + 2] << 16)) +
				(this[offset + 3] * 0x1000000)
		};

		Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);

			return (this[offset] * 0x1000000) +
				((this[offset + 1] << 16) |
				(this[offset + 2] << 8) |
				this[offset + 3])
		};

		Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);

			var val = this[offset];
			var mul = 1;
			var i = 0;
			while (++i < byteLength && (mul *= 0x100)) {
				val += this[offset + i] * mul
			}
			mul *= 0x80;

			if (val >= mul) val -= Math.pow(2, 8 * byteLength);

			return val
		};

		Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) checkOffset(offset, byteLength, this.length);

			var i = byteLength;
			var mul = 1;
			var val = this[offset + --i];
			while (i > 0 && (mul *= 0x100)) {
				val += this[offset + --i] * mul
			}
			mul *= 0x80;

			if (val >= mul) val -= Math.pow(2, 8 * byteLength);

			return val
		};

		Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 1, this.length);
			if (!(this[offset] & 0x80)) return (this[offset]);
			return ((0xff - this[offset] + 1) * -1)
		};

		Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 2, this.length);
			var val = this[offset] | (this[offset + 1] << 8);
			return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 2, this.length);
			var val = this[offset + 1] | (this[offset] << 8);
			return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);

			return (this[offset]) |
				(this[offset + 1] << 8) |
				(this[offset + 2] << 16) |
				(this[offset + 3] << 24)
		};

		Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);

			return (this[offset] << 24) |
				(this[offset + 1] << 16) |
				(this[offset + 2] << 8) |
				(this[offset + 3])
		};

		Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754.read(this, offset, true, 23, 4)
		};

		Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 4, this.length);
			return ieee754.read(this, offset, false, 23, 4)
		};

		Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754.read(this, offset, true, 52, 8)
		};

		Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
			if (!noAssert) checkOffset(offset, 8, this.length);
			return ieee754.read(this, offset, false, 52, 8)
		};

		function checkInt(buf, value, offset, ext, max, min) {
			if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance');
			if (value > max || value < min) throw new RangeError('value is out of bounds');
			if (offset + ext > buf.length) throw new RangeError('index out of range')
		}

		Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

			var mul = 1;
			var i = 0;
			this[offset] = value & 0xFF;
			while (++i < byteLength && (mul *= 0x100)) {
				this[offset + i] = (value / mul) & 0xFF
			}

			return offset + byteLength
		};

		Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset | 0;
			byteLength = byteLength | 0;
			if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

			var i = byteLength - 1;
			var mul = 1;
			this[offset + i] = value & 0xFF;
			while (--i >= 0 && (mul *= 0x100)) {
				this[offset + i] = (value / mul) & 0xFF
			}

			return offset + byteLength
		};

		Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
			if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
			this[offset] = value;
			return offset + 1
		};

		function objectWriteUInt16(buf, value, offset, littleEndian) {
			if (value < 0) value = 0xffff + value + 1;
			for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
				buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
					(littleEndian ? i : 1 - i) * 8
			}
		}

		Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = value;
				this[offset + 1] = (value >>> 8)
			} else {
				objectWriteUInt16(this, value, offset, true)
			}
			return offset + 2
		};

		Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = (value >>> 8);
				this[offset + 1] = value
			} else {
				objectWriteUInt16(this, value, offset, false)
			}
			return offset + 2
		};

		function objectWriteUInt32(buf, value, offset, littleEndian) {
			if (value < 0) value = 0xffffffff + value + 1;
			for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
				buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
			}
		}

		Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset + 3] = (value >>> 24);
				this[offset + 2] = (value >>> 16);
				this[offset + 1] = (value >>> 8);
				this[offset] = value
			} else {
				objectWriteUInt32(this, value, offset, true)
			}
			return offset + 4
		};

		Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = (value >>> 24);
				this[offset + 1] = (value >>> 16);
				this[offset + 2] = (value >>> 8);
				this[offset + 3] = value
			} else {
				objectWriteUInt32(this, value, offset, false)
			}
			return offset + 4
		};

		Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) {
				var limit = Math.pow(2, 8 * byteLength - 1);

				checkInt(this, value, offset, byteLength, limit - 1, -limit)
			}

			var i = 0;
			var mul = 1;
			var sub = value < 0 ? 1 : 0;
			this[offset] = value & 0xFF;
			while (++i < byteLength && (mul *= 0x100)) {
				this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
			}

			return offset + byteLength
		};

		Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) {
				var limit = Math.pow(2, 8 * byteLength - 1);

				checkInt(this, value, offset, byteLength, limit - 1, -limit)
			}

			var i = byteLength - 1;
			var mul = 1;
			var sub = value < 0 ? 1 : 0;
			this[offset + i] = value & 0xFF;
			while (--i >= 0 && (mul *= 0x100)) {
				this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
			}

			return offset + byteLength
		};

		Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
			if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
			if (value < 0) value = 0xff + value + 1;
			this[offset] = value;
			return offset + 1
		};

		Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = value;
				this[offset + 1] = (value >>> 8)
			} else {
				objectWriteUInt16(this, value, offset, true)
			}
			return offset + 2
		};

		Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = (value >>> 8);
				this[offset + 1] = value
			} else {
				objectWriteUInt16(this, value, offset, false)
			}
			return offset + 2
		};

		Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = value;
				this[offset + 1] = (value >>> 8);
				this[offset + 2] = (value >>> 16);
				this[offset + 3] = (value >>> 24)
			} else {
				objectWriteUInt32(this, value, offset, true)
			}
			return offset + 4
		};

		Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
			value = +value;
			offset = offset | 0;
			if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
			if (value < 0) value = 0xffffffff + value + 1;
			if (Buffer.TYPED_ARRAY_SUPPORT) {
				this[offset] = (value >>> 24);
				this[offset + 1] = (value >>> 16);
				this[offset + 2] = (value >>> 8);
				this[offset + 3] = value
			} else {
				objectWriteUInt32(this, value, offset, false)
			}
			return offset + 4
		};

		function checkIEEE754(buf, value, offset, ext, max, min) {
			if (value > max || value < min) throw new RangeError('value is out of bounds');
			if (offset + ext > buf.length) throw new RangeError('index out of range');
			if (offset < 0) throw new RangeError('index out of range')
		}

		function writeFloat(buf, value, offset, littleEndian, noAssert) {
			if (!noAssert) {
				checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
			}
			ieee754.write(buf, value, offset, littleEndian, 23, 4);
			return offset + 4
		}

		Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
			return writeFloat(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
			return writeFloat(this, value, offset, false, noAssert)
		};

		function writeDouble(buf, value, offset, littleEndian, noAssert) {
			if (!noAssert) {
				checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
			}
			ieee754.write(buf, value, offset, littleEndian, 52, 8);
			return offset + 8
		}

		Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
			return writeDouble(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
			return writeDouble(this, value, offset, false, noAssert)
		};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy(target, targetStart, start, end) {
			if (!start) start = 0;
			if (!end && end !== 0) end = this.length;
			if (targetStart >= target.length) targetStart = target.length;
			if (!targetStart) targetStart = 0;
			if (end > 0 && end < start) end = start;

			// Copy 0 bytes; we're done
			if (end === start) return 0;
			if (target.length === 0 || this.length === 0) return 0;

			// Fatal error conditions
			if (targetStart < 0) {
				throw new RangeError('targetStart out of bounds')
			}
			if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
			if (end < 0) throw new RangeError('sourceEnd out of bounds');

			// Are we oob?
			if (end > this.length) end = this.length;
			if (target.length - targetStart < end - start) {
				end = target.length - targetStart + start
			}

			var len = end - start;

			if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
				for (var i = 0; i < len; i++) {
					target[i + targetStart] = this[i + start]
				}
			} else {
				target._set(this.subarray(start, start + len), targetStart)
			}

			return len
		};

// fill(value, start=0, end=buffer.length)
		Buffer.prototype.fill = function fill(value, start, end) {
			if (!value) value = 0;
			if (!start) start = 0;
			if (!end) end = this.length;

			if (end < start) throw new RangeError('end < start');

			// Fill 0 bytes; we're done
			if (end === start) return;
			if (this.length === 0) return;

			if (start < 0 || start >= this.length) throw new RangeError('start out of bounds');
			if (end < 0 || end > this.length) throw new RangeError('end out of bounds');

			var i;
			if (typeof value === 'number') {
				for (i = start; i < end; i++) {
					this[i] = value
				}
			} else {
				var bytes = utf8ToBytes(value.toString());
				var len = bytes.length;
				for (i = start; i < end; i++) {
					this[i] = bytes[i % len]
				}
			}

			return this
		};

		/**
		 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
		 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
		 */
		Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
			if (typeof Uint8Array !== 'undefined') {
				if (Buffer.TYPED_ARRAY_SUPPORT) {
					return (new Buffer(this)).buffer
				} else {
					var buf = new Uint8Array(this.length);
					for (var i = 0, len = buf.length; i < len; i += 1) {
						buf[i] = this[i]
					}
					return buf.buffer
				}
			} else {
				throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
			}
		};

// HELPER FUNCTIONS
// ================

		var BP = Buffer.prototype;

		/**
		 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
		 */
		Buffer._augment = function _augment(arr) {
			arr.constructor = Buffer;
			arr._isBuffer = true;

			// save reference to original Uint8Array set method before overwriting
			arr._set = arr.set;

			// deprecated, will be removed in node 0.13+
			arr.get = BP.get;
			arr.set = BP.set;

			arr.write = BP.write;
			arr.toString = BP.toString;
			arr.toLocaleString = BP.toString;
			arr.toJSON = BP.toJSON;
			arr.equals = BP.equals;
			arr.compare = BP.compare;
			arr.indexOf = BP.indexOf;
			arr.copy = BP.copy;
			arr.slice = BP.slice;
			arr.readUIntLE = BP.readUIntLE;
			arr.readUIntBE = BP.readUIntBE;
			arr.readUInt8 = BP.readUInt8;
			arr.readUInt16LE = BP.readUInt16LE;
			arr.readUInt16BE = BP.readUInt16BE;
			arr.readUInt32LE = BP.readUInt32LE;
			arr.readUInt32BE = BP.readUInt32BE;
			arr.readIntLE = BP.readIntLE;
			arr.readIntBE = BP.readIntBE;
			arr.readInt8 = BP.readInt8;
			arr.readInt16LE = BP.readInt16LE;
			arr.readInt16BE = BP.readInt16BE;
			arr.readInt32LE = BP.readInt32LE;
			arr.readInt32BE = BP.readInt32BE;
			arr.readFloatLE = BP.readFloatLE;
			arr.readFloatBE = BP.readFloatBE;
			arr.readDoubleLE = BP.readDoubleLE;
			arr.readDoubleBE = BP.readDoubleBE;
			arr.writeUInt8 = BP.writeUInt8;
			arr.writeUIntLE = BP.writeUIntLE;
			arr.writeUIntBE = BP.writeUIntBE;
			arr.writeUInt16LE = BP.writeUInt16LE;
			arr.writeUInt16BE = BP.writeUInt16BE;
			arr.writeUInt32LE = BP.writeUInt32LE;
			arr.writeUInt32BE = BP.writeUInt32BE;
			arr.writeIntLE = BP.writeIntLE;
			arr.writeIntBE = BP.writeIntBE;
			arr.writeInt8 = BP.writeInt8;
			arr.writeInt16LE = BP.writeInt16LE;
			arr.writeInt16BE = BP.writeInt16BE;
			arr.writeInt32LE = BP.writeInt32LE;
			arr.writeInt32BE = BP.writeInt32BE;
			arr.writeFloatLE = BP.writeFloatLE;
			arr.writeFloatBE = BP.writeFloatBE;
			arr.writeDoubleLE = BP.writeDoubleLE;
			arr.writeDoubleBE = BP.writeDoubleBE;
			arr.fill = BP.fill;
			arr.inspect = BP.inspect;
			arr.toArrayBuffer = BP.toArrayBuffer;

			return arr
		};

		var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g;

		function base64clean(str) {
			// Node strips out invalid characters like \n and \t from the string, base64-js does not
			str = stringtrim(str).replace(INVALID_BASE64_RE, '');
			// Node converts strings with length < 2 to ''
			if (str.length < 2) return '';
			// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
			while (str.length % 4 !== 0) {
				str = str + '='
			}
			return str
		}

		function stringtrim(str) {
			if (str.trim) return str.trim();
			return str.replace(/^\s+|\s+$/g, '')
		}

		function toHex(n) {
			if (n < 16) return '0' + n.toString(16);
			return n.toString(16)
		}

		function utf8ToBytes(string, units) {
			units = units || Infinity;
			var codePoint;
			var length = string.length;
			var leadSurrogate = null;
			var bytes = [];
			var i = 0;

			for (; i < length; i++) {
				codePoint = string.charCodeAt(i);

				// is surrogate component
				if (codePoint > 0xD7FF && codePoint < 0xE000) {
					// last char was a lead
					if (leadSurrogate) {
						// 2 leads in a row
						if (codePoint < 0xDC00) {
							if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
							leadSurrogate = codePoint;
							continue
						} else {
							// valid surrogate pair
							codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
							leadSurrogate = null
						}
					} else {
						// no lead yet

						if (codePoint > 0xDBFF) {
							// unexpected trail
							if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
							continue
						} else if (i + 1 === length) {
							// unpaired lead
							if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
							continue
						} else {
							// valid lead
							leadSurrogate = codePoint;
							continue
						}
					}
				} else if (leadSurrogate) {
					// valid bmp char, but last char was a lead
					if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
					leadSurrogate = null
				}

				// encode utf8
				if (codePoint < 0x80) {
					if ((units -= 1) < 0) break;
					bytes.push(codePoint)
				} else if (codePoint < 0x800) {
					if ((units -= 2) < 0) break;
					bytes.push(
						codePoint >> 0x6 | 0xC0,
						codePoint & 0x3F | 0x80
					)
				} else if (codePoint < 0x10000) {
					if ((units -= 3) < 0) break;
					bytes.push(
						codePoint >> 0xC | 0xE0,
						codePoint >> 0x6 & 0x3F | 0x80,
						codePoint & 0x3F | 0x80
					)
				} else if (codePoint < 0x200000) {
					if ((units -= 4) < 0) break;
					bytes.push(
						codePoint >> 0x12 | 0xF0,
						codePoint >> 0xC & 0x3F | 0x80,
						codePoint >> 0x6 & 0x3F | 0x80,
						codePoint & 0x3F | 0x80
					)
				} else {
					throw new Error('Invalid code point')
				}
			}

			return bytes
		}

		function asciiToBytes(str) {
			var byteArray = [];
			for (var i = 0; i < str.length; i++) {
				// Node's code seems to be doing this and not & 0x7F..
				byteArray.push(str.charCodeAt(i) & 0xFF)
			}
			return byteArray
		}

		function utf16leToBytes(str, units) {
			var c, hi, lo;
			var byteArray = [];
			for (var i = 0; i < str.length; i++) {
				if ((units -= 2) < 0) break;

				c = str.charCodeAt(i);
				hi = c >> 8;
				lo = c % 256;
				byteArray.push(lo);
				byteArray.push(hi)
			}

			return byteArray
		}

		function base64ToBytes(str) {
			return base64.toByteArray(base64clean(str))
		}

		function blitBuffer(src, dst, offset, length) {
			for (var i = 0; i < length; i++) {
				if ((i + offset >= dst.length) || (i >= src.length)) break;
				dst[i + offset] = src[i]
			}
			return i
		}

		function decodeUtf8Char(str) {
			try {
				return decodeURIComponent(str)
			} catch (err) {
				return String.fromCharCode(0xFFFD); // UTF 8 invalid char
			}
		}

	}, {"base64-js": 8, "ieee754": 9, "is-array": 10}],
	8: [function (require, module, exports) {
		var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

		(function (exports) {
			'use strict';

			var Arr = (typeof Uint8Array !== 'undefined')
				? Uint8Array
				: Array;

			var PLUS = '+'.charCodeAt(0);
			var SLASH = '/'.charCodeAt(0);
			var NUMBER = '0'.charCodeAt(0);
			var LOWER = 'a'.charCodeAt(0);
			var UPPER = 'A'.charCodeAt(0);
			var PLUS_URL_SAFE = '-'.charCodeAt(0);
			var SLASH_URL_SAFE = '_'.charCodeAt(0);

			function decode(elt) {
				var code = elt.charCodeAt(0);
				if (code === PLUS ||
					code === PLUS_URL_SAFE)
					return 62; // '+'
				if (code === SLASH ||
					code === SLASH_URL_SAFE)
					return 63; // '/'
				if (code < NUMBER)
					return -1; //no match
				if (code < NUMBER + 10)
					return code - NUMBER + 26 + 26;
				if (code < UPPER + 26)
					return code - UPPER;
				if (code < LOWER + 26)
					return code - LOWER + 26
			}

			function b64ToByteArray(b64) {
				var i, j, l, tmp, placeHolders, arr;

				if (b64.length % 4 > 0) {
					throw new Error('Invalid string. Length must be a multiple of 4')
				}

				// the number of equal signs (place holders)
				// if there are two placeholders, than the two characters before it
				// represent one byte
				// if there is only one, then the three characters before it represent 2 bytes
				// this is just a cheap hack to not do indexOf twice
				var len = b64.length;
				placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

				// base64 is 4/3 + up to two characters of the original data
				arr = new Arr(b64.length * 3 / 4 - placeHolders);

				// if there are placeholders, only get up to the last complete 4 chars
				l = placeHolders > 0 ? b64.length - 4 : b64.length;

				var L = 0;

				function push(v) {
					arr[L++] = v
				}

				for (i = 0, j = 0; i < l; i += 4, j += 3) {
					tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
					push((tmp & 0xFF0000) >> 16);
					push((tmp & 0xFF00) >> 8);
					push(tmp & 0xFF)
				}

				if (placeHolders === 2) {
					tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
					push(tmp & 0xFF)
				} else if (placeHolders === 1) {
					tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
					push((tmp >> 8) & 0xFF);
					push(tmp & 0xFF)
				}

				return arr
			}

			function uint8ToBase64(uint8) {
				var i,
					extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
					output = "",
					temp, length;

				function encode(num) {
					return lookup.charAt(num)
				}

				function tripletToBase64(num) {
					return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
				}

				// go through the array every three bytes, we'll deal with trailing stuff later
				for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
					temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
					output += tripletToBase64(temp)
				}

				// pad the end with zeros, but make sure to not forget the extra bytes
				switch (extraBytes) {
					case 1:
						temp = uint8[uint8.length - 1];
						output += encode(temp >> 2);
						output += encode((temp << 4) & 0x3F);
						output += '==';
						break;
					case 2:
						temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
						output += encode(temp >> 10);
						output += encode((temp >> 4) & 0x3F);
						output += encode((temp << 2) & 0x3F);
						output += '=';
						break
				}

				return output
			}

			exports.toByteArray = b64ToByteArray;
			exports.fromByteArray = uint8ToBase64
		}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

	}, {}],
	9: [function (require, module, exports) {
		exports.read = function (buffer, offset, isLE, mLen, nBytes) {
			var e, m;
			var eLen = nBytes * 8 - mLen - 1;
			var eMax = (1 << eLen) - 1;
			var eBias = eMax >> 1;
			var nBits = -7;
			var i = isLE ? (nBytes - 1) : 0;
			var d = isLE ? -1 : 1;
			var s = buffer[offset + i];

			i += d;

			e = s & ((1 << (-nBits)) - 1);
			s >>= (-nBits);
			nBits += eLen;
			for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
			}

			m = e & ((1 << (-nBits)) - 1);
			e >>= (-nBits);
			nBits += mLen;
			for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
			}

			if (e === 0) {
				e = 1 - eBias
			} else if (e === eMax) {
				return m ? NaN : ((s ? -1 : 1) * Infinity)
			} else {
				m = m + Math.pow(2, mLen);
				e = e - eBias
			}
			return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
		};

		exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
			var e, m, c;
			var eLen = nBytes * 8 - mLen - 1;
			var eMax = (1 << eLen) - 1;
			var eBias = eMax >> 1;
			var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
			var i = isLE ? 0 : (nBytes - 1);
			var d = isLE ? 1 : -1;
			var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

			value = Math.abs(value);

			if (isNaN(value) || value === Infinity) {
				m = isNaN(value) ? 1 : 0;
				e = eMax
			} else {
				e = Math.floor(Math.log(value) / Math.LN2);
				if (value * (c = Math.pow(2, -e)) < 1) {
					e--;
					c *= 2
				}
				if (e + eBias >= 1) {
					value += rt / c
				} else {
					value += rt * Math.pow(2, 1 - eBias)
				}
				if (value * c >= 2) {
					e++;
					c /= 2
				}

				if (e + eBias >= eMax) {
					m = 0;
					e = eMax
				} else if (e + eBias >= 1) {
					m = (value * c - 1) * Math.pow(2, mLen);
					e = e + eBias
				} else {
					m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
					e = 0
				}
			}

			for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {
			}

			e = (e << mLen) | m;
			eLen += mLen;
			for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {
			}

			buffer[offset + i - d] |= s * 128
		}

	}, {}],
	10: [function (require, module, exports) {

		/**
		 * isArray
		 */

		var isArray = Array.isArray;

		/**
		 * toString
		 */

		var str = Object.prototype.toString;

		/**
		 * Whether or not the given `val`
		 * is an array.
		 *
		 * example:
		 *
		 *        isArray([]);
		 *        // > true
		 *        isArray(arguments);
		 *        // > false
		 *        isArray('');
		 *        // > false
		 *
		 * @param {mixed} val
		 * @return {bool}
		 */

		module.exports = isArray || function (val) {
				return !!val && '[object Array]' == str.call(val);
			};

	}, {}],
	11: [function (require, module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

		function EventEmitter() {
			this._events = this._events || {};
			this._maxListeners = this._maxListeners || undefined;
		}

		module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
		EventEmitter.EventEmitter = EventEmitter;

		EventEmitter.prototype._events = undefined;
		EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
		EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
		EventEmitter.prototype.setMaxListeners = function (n) {
			if (!isNumber(n) || n < 0 || isNaN(n))
				throw TypeError('n must be a positive number');
			this._maxListeners = n;
			return this;
		};

		EventEmitter.prototype.emit = function (type) {
			var er, handler, len, args, i, listeners;

			if (!this._events)
				this._events = {};

			// If there is no 'error' event listener then throw.
			if (type === 'error') {
				if (!this._events.error ||
					(isObject(this._events.error) && !this._events.error.length)) {
					er = arguments[1];
					if (er instanceof Error) {
						throw er; // Unhandled 'error' event
					}
					throw TypeError('Uncaught, unspecified "error" event.');
				}
			}

			handler = this._events[type];

			if (isUndefined(handler))
				return false;

			if (isFunction(handler)) {
				switch (arguments.length) {
					// fast cases
					case 1:
						handler.call(this);
						break;
					case 2:
						handler.call(this, arguments[1]);
						break;
					case 3:
						handler.call(this, arguments[1], arguments[2]);
						break;
					// slower
					default:
						len = arguments.length;
						args = new Array(len - 1);
						for (i = 1; i < len; i++)
							args[i - 1] = arguments[i];
						handler.apply(this, args);
				}
			} else if (isObject(handler)) {
				len = arguments.length;
				args = new Array(len - 1);
				for (i = 1; i < len; i++)
					args[i - 1] = arguments[i];

				listeners = handler.slice();
				len = listeners.length;
				for (i = 0; i < len; i++)
					listeners[i].apply(this, args);
			}

			return true;
		};

		EventEmitter.prototype.addListener = function (type, listener) {
			var m;

			if (!isFunction(listener))
				throw TypeError('listener must be a function');

			if (!this._events)
				this._events = {};

			// To avoid recursion in the case that type === "newListener"! Before
			// adding it to the listeners, first emit "newListener".
			if (this._events.newListener)
				this.emit('newListener', type,
					isFunction(listener.listener) ?
						listener.listener : listener);

			if (!this._events[type])
			// Optimize the case of one listener. Don't need the extra array object.
				this._events[type] = listener;
			else if (isObject(this._events[type]))
			// If we've already got an array, just append.
				this._events[type].push(listener);
			else
			// Adding the second element, need to change to array.
				this._events[type] = [this._events[type], listener];

			// Check for listener leak
			if (isObject(this._events[type]) && !this._events[type].warned) {
				var m;
				if (!isUndefined(this._maxListeners)) {
					m = this._maxListeners;
				} else {
					m = EventEmitter.defaultMaxListeners;
				}

				if (m && m > 0 && this._events[type].length > m) {
					this._events[type].warned = true;
					console.error('(node) warning: possible EventEmitter memory ' +
						'leak detected. %d listeners added. ' +
						'Use emitter.setMaxListeners() to increase limit.',
						this._events[type].length);
					if (typeof console.trace === 'function') {
						// not supported in IE 10
						console.trace();
					}
				}
			}

			return this;
		};

		EventEmitter.prototype.on = EventEmitter.prototype.addListener;

		EventEmitter.prototype.once = function (type, listener) {
			if (!isFunction(listener))
				throw TypeError('listener must be a function');

			var fired = false;

			function g() {
				this.removeListener(type, g);

				if (!fired) {
					fired = true;
					listener.apply(this, arguments);
				}
			}

			g.listener = listener;
			this.on(type, g);

			return this;
		};

// emits a 'removeListener' event iff the listener was removed
		EventEmitter.prototype.removeListener = function (type, listener) {
			var list, position, length, i;

			if (!isFunction(listener))
				throw TypeError('listener must be a function');

			if (!this._events || !this._events[type])
				return this;

			list = this._events[type];
			length = list.length;
			position = -1;

			if (list === listener ||
				(isFunction(list.listener) && list.listener === listener)) {
				delete this._events[type];
				if (this._events.removeListener)
					this.emit('removeListener', type, listener);

			} else if (isObject(list)) {
				for (i = length; i-- > 0;) {
					if (list[i] === listener ||
						(list[i].listener && list[i].listener === listener)) {
						position = i;
						break;
					}
				}

				if (position < 0)
					return this;

				if (list.length === 1) {
					list.length = 0;
					delete this._events[type];
				} else {
					list.splice(position, 1);
				}

				if (this._events.removeListener)
					this.emit('removeListener', type, listener);
			}

			return this;
		};

		EventEmitter.prototype.removeAllListeners = function (type) {
			var key, listeners;

			if (!this._events)
				return this;

			// not listening for removeListener, no need to emit
			if (!this._events.removeListener) {
				if (arguments.length === 0)
					this._events = {};
				else if (this._events[type])
					delete this._events[type];
				return this;
			}

			// emit removeListener for all listeners on all events
			if (arguments.length === 0) {
				for (key in this._events) {
					if (key === 'removeListener') continue;
					this.removeAllListeners(key);
				}
				this.removeAllListeners('removeListener');
				this._events = {};
				return this;
			}

			listeners = this._events[type];

			if (isFunction(listeners)) {
				this.removeListener(type, listeners);
			} else {
				// LIFO order
				while (listeners.length)
					this.removeListener(type, listeners[listeners.length - 1]);
			}
			delete this._events[type];

			return this;
		};

		EventEmitter.prototype.listeners = function (type) {
			var ret;
			if (!this._events || !this._events[type])
				ret = [];
			else if (isFunction(this._events[type]))
				ret = [this._events[type]];
			else
				ret = this._events[type].slice();
			return ret;
		};

		EventEmitter.listenerCount = function (emitter, type) {
			var ret;
			if (!emitter._events || !emitter._events[type])
				ret = 0;
			else if (isFunction(emitter._events[type]))
				ret = 1;
			else
				ret = emitter._events[type].length;
			return ret;
		};

		function isFunction(arg) {
			return typeof arg === 'function';
		}

		function isNumber(arg) {
			return typeof arg === 'number';
		}

		function isObject(arg) {
			return typeof arg === 'object' && arg !== null;
		}

		function isUndefined(arg) {
			return arg === void 0;
		}

	}, {}],
	12: [function (require, module, exports) {
		if (typeof Object.create === 'function') {
			// implementation from standard node.js 'util' module
			module.exports = function inherits(ctor, superCtor) {
				ctor.super_ = superCtor;
				ctor.prototype = Object.create(superCtor.prototype, {
					constructor: {
						value: ctor,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
			};
		} else {
			// old school shim for old browsers
			module.exports = function inherits(ctor, superCtor) {
				ctor.super_ = superCtor;
				var TempCtor = function () {
				};
				TempCtor.prototype = superCtor.prototype;
				ctor.prototype = new TempCtor();
				ctor.prototype.constructor = ctor
			}
		}

	}, {}],
	13: [function (require, module, exports) {
// shim for using process in browser

		var process = module.exports = {};
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
			draining = false;
			if (currentQueue.length) {
				queue = currentQueue.concat(queue);
			} else {
				queueIndex = -1;
			}
			if (queue.length) {
				drainQueue();
			}
		}

		function drainQueue() {
			if (draining) {
				return;
			}
			var timeout = setTimeout(cleanUpNextTick);
			draining = true;

			var len = queue.length;
			while (len) {
				currentQueue = queue;
				queue = [];
				while (++queueIndex < len) {
					currentQueue[queueIndex].run();
				}
				queueIndex = -1;
				len = queue.length;
			}
			currentQueue = null;
			draining = false;
			clearTimeout(timeout);
		}

		process.nextTick = function (fun) {
			var args = new Array(arguments.length - 1);
			if (arguments.length > 1) {
				for (var i = 1; i < arguments.length; i++) {
					args[i - 1] = arguments[i];
				}
			}
			queue.push(new Item(fun, args));
			if (queue.length === 1 && !draining) {
				setTimeout(drainQueue, 0);
			}
		};

// v8 likes predictible objects
		function Item(fun, array) {
			this.fun = fun;
			this.array = array;
		}

		Item.prototype.run = function () {
			this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {
		}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
			throw new Error('process.binding is not supported');
		};

// TODO(shtylman)
		process.cwd = function () {
			return '/'
		};
		process.chdir = function (dir) {
			throw new Error('process.chdir is not supported');
		};
		process.umask = function () {
			return 0;
		};

	}, {}],
	14: [function (require, module, exports) {
		module.exports = function isBuffer(arg) {
			return arg && typeof arg === 'object'
				&& typeof arg.copy === 'function'
				&& typeof arg.fill === 'function'
				&& typeof arg.readUInt8 === 'function';
		}
	}, {}],
	15: [function (require, module, exports) {
		(function (process, global) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

			var formatRegExp = /%[sdj%]/g;
			exports.format = function (f) {
				if (!isString(f)) {
					var objects = [];
					for (var i = 0; i < arguments.length; i++) {
						objects.push(inspect(arguments[i]));
					}
					return objects.join(' ');
				}

				var i = 1;
				var args = arguments;
				var len = args.length;
				var str = String(f).replace(formatRegExp, function (x) {
					if (x === '%%') return '%';
					if (i >= len) return x;
					switch (x) {
						case '%s':
							return String(args[i++]);
						case '%d':
							return Number(args[i++]);
						case '%j':
							try {
								return JSON.stringify(args[i++]);
							} catch (_) {
								return '[Circular]';
							}
						default:
							return x;
					}
				});
				for (var x = args[i]; i < len; x = args[++i]) {
					if (isNull(x) || !isObject(x)) {
						str += ' ' + x;
					} else {
						str += ' ' + inspect(x);
					}
				}
				return str;
			};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
			exports.deprecate = function (fn, msg) {
				// Allow for deprecating things in the process of starting up.
				if (isUndefined(global.process)) {
					return function () {
						return exports.deprecate(fn, msg).apply(this, arguments);
					};
				}

				if (process.noDeprecation === true) {
					return fn;
				}

				var warned = false;

				function deprecated() {
					if (!warned) {
						if (process.throwDeprecation) {
							throw new Error(msg);
						} else if (process.traceDeprecation) {
							console.trace(msg);
						} else {
							console.error(msg);
						}
						warned = true;
					}
					return fn.apply(this, arguments);
				}

				return deprecated;
			};


			var debugs = {};
			var debugEnviron;
			exports.debuglog = function (set) {
				if (isUndefined(debugEnviron))
					debugEnviron = process.env.NODE_DEBUG || '';
				set = set.toUpperCase();
				if (!debugs[set]) {
					if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
						var pid = process.pid;
						debugs[set] = function () {
							var msg = exports.format.apply(exports, arguments);
							console.error('%s %d: %s', set, pid, msg);
						};
					} else {
						debugs[set] = function () {
						};
					}
				}
				return debugs[set];
			};


			/**
			 * Echos the value of a value. Trys to print the value out
			 * in the best way possible given the different types.
			 *
			 * @param {Object} obj The object to print out.
			 * @param {Object} opts Optional options object that alters the output.
			 */
			/* legacy: obj, showHidden, depth, colors*/
			function inspect(obj, opts) {
				// default options
				var ctx = {
					seen: [],
					stylize: stylizeNoColor
				};
				// legacy...
				if (arguments.length >= 3) ctx.depth = arguments[2];
				if (arguments.length >= 4) ctx.colors = arguments[3];
				if (isBoolean(opts)) {
					// legacy...
					ctx.showHidden = opts;
				} else if (opts) {
					// got an "options" object
					exports._extend(ctx, opts);
				}
				// set default options
				if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
				if (isUndefined(ctx.depth)) ctx.depth = 2;
				if (isUndefined(ctx.colors)) ctx.colors = false;
				if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
				if (ctx.colors) ctx.stylize = stylizeWithColor;
				return formatValue(ctx, obj, ctx.depth);
			}

			exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
			inspect.colors = {
				'bold': [1, 22],
				'italic': [3, 23],
				'underline': [4, 24],
				'inverse': [7, 27],
				'white': [37, 39],
				'grey': [90, 39],
				'black': [30, 39],
				'blue': [34, 39],
				'cyan': [36, 39],
				'green': [32, 39],
				'magenta': [35, 39],
				'red': [31, 39],
				'yellow': [33, 39]
			};

// Don't use 'blue' not visible on cmd.exe
			inspect.styles = {
				'special': 'cyan',
				'number': 'yellow',
				'boolean': 'yellow',
				'undefined': 'grey',
				'null': 'bold',
				'string': 'green',
				'date': 'magenta',
				// "name": intentionally not styling
				'regexp': 'red'
			};


			function stylizeWithColor(str, styleType) {
				var style = inspect.styles[styleType];

				if (style) {
					return '\u001b[' + inspect.colors[style][0] + 'm' + str +
						'\u001b[' + inspect.colors[style][1] + 'm';
				} else {
					return str;
				}
			}


			function stylizeNoColor(str, styleType) {
				return str;
			}


			function arrayToHash(array) {
				var hash = {};

				array.forEach(function (val, idx) {
					hash[val] = true;
				});

				return hash;
			}


			function formatValue(ctx, value, recurseTimes) {
				// Provide a hook for user-specified inspect functions.
				// Check that value is an object with an inspect function on it
				if (ctx.customInspect &&
					value &&
					isFunction(value.inspect) &&
						// Filter out the util module, it's inspect function is special
					value.inspect !== exports.inspect &&
						// Also filter out any prototype objects using the circular check.
					!(value.constructor && value.constructor.prototype === value)) {
					var ret = value.inspect(recurseTimes, ctx);
					if (!isString(ret)) {
						ret = formatValue(ctx, ret, recurseTimes);
					}
					return ret;
				}

				// Primitive types cannot have properties
				var primitive = formatPrimitive(ctx, value);
				if (primitive) {
					return primitive;
				}

				// Look up the keys of the object.
				var keys = Object.keys(value);
				var visibleKeys = arrayToHash(keys);

				if (ctx.showHidden) {
					keys = Object.getOwnPropertyNames(value);
				}

				// IE doesn't make error fields non-enumerable
				// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
				if (isError(value)
					&& (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
					return formatError(value);
				}

				// Some type of object without properties can be shortcutted.
				if (keys.length === 0) {
					if (isFunction(value)) {
						var name = value.name ? ': ' + value.name : '';
						return ctx.stylize('[Function' + name + ']', 'special');
					}
					if (isRegExp(value)) {
						return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
					}
					if (isDate(value)) {
						return ctx.stylize(Date.prototype.toString.call(value), 'date');
					}
					if (isError(value)) {
						return formatError(value);
					}
				}

				var base = '', array = false, braces = ['{', '}'];

				// Make Array say that they are Array
				if (isArray(value)) {
					array = true;
					braces = ['[', ']'];
				}

				// Make functions say that they are functions
				if (isFunction(value)) {
					var n = value.name ? ': ' + value.name : '';
					base = ' [Function' + n + ']';
				}

				// Make RegExps say that they are RegExps
				if (isRegExp(value)) {
					base = ' ' + RegExp.prototype.toString.call(value);
				}

				// Make dates with properties first say the date
				if (isDate(value)) {
					base = ' ' + Date.prototype.toUTCString.call(value);
				}

				// Make error with message first say the error
				if (isError(value)) {
					base = ' ' + formatError(value);
				}

				if (keys.length === 0 && (!array || value.length == 0)) {
					return braces[0] + base + braces[1];
				}

				if (recurseTimes < 0) {
					if (isRegExp(value)) {
						return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
					} else {
						return ctx.stylize('[Object]', 'special');
					}
				}

				ctx.seen.push(value);

				var output;
				if (array) {
					output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
				} else {
					output = keys.map(function (key) {
						return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
					});
				}

				ctx.seen.pop();

				return reduceToSingleString(output, base, braces);
			}


			function formatPrimitive(ctx, value) {
				if (isUndefined(value))
					return ctx.stylize('undefined', 'undefined');
				if (isString(value)) {
					var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
							.replace(/'/g, "\\'")
							.replace(/\\"/g, '"') + '\'';
					return ctx.stylize(simple, 'string');
				}
				if (isNumber(value))
					return ctx.stylize('' + value, 'number');
				if (isBoolean(value))
					return ctx.stylize('' + value, 'boolean');
				// For some reason typeof null is "object", so special case here.
				if (isNull(value))
					return ctx.stylize('null', 'null');
			}


			function formatError(value) {
				return '[' + Error.prototype.toString.call(value) + ']';
			}


			function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
				var output = [];
				for (var i = 0, l = value.length; i < l; ++i) {
					if (hasOwnProperty(value, String(i))) {
						output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
							String(i), true));
					} else {
						output.push('');
					}
				}
				keys.forEach(function (key) {
					if (!key.match(/^\d+$/)) {
						output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
							key, true));
					}
				});
				return output;
			}


			function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
				var name, str, desc;
				desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
				if (desc.get) {
					if (desc.set) {
						str = ctx.stylize('[Getter/Setter]', 'special');
					} else {
						str = ctx.stylize('[Getter]', 'special');
					}
				} else {
					if (desc.set) {
						str = ctx.stylize('[Setter]', 'special');
					}
				}
				if (!hasOwnProperty(visibleKeys, key)) {
					name = '[' + key + ']';
				}
				if (!str) {
					if (ctx.seen.indexOf(desc.value) < 0) {
						if (isNull(recurseTimes)) {
							str = formatValue(ctx, desc.value, null);
						} else {
							str = formatValue(ctx, desc.value, recurseTimes - 1);
						}
						if (str.indexOf('\n') > -1) {
							if (array) {
								str = str.split('\n').map(function (line) {
									return '  ' + line;
								}).join('\n').substr(2);
							} else {
								str = '\n' + str.split('\n').map(function (line) {
										return '   ' + line;
									}).join('\n');
							}
						}
					} else {
						str = ctx.stylize('[Circular]', 'special');
					}
				}
				if (isUndefined(name)) {
					if (array && key.match(/^\d+$/)) {
						return str;
					}
					name = JSON.stringify('' + key);
					if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
						name = name.substr(1, name.length - 2);
						name = ctx.stylize(name, 'name');
					} else {
						name = name.replace(/'/g, "\\'")
							.replace(/\\"/g, '"')
							.replace(/(^"|"$)/g, "'");
						name = ctx.stylize(name, 'string');
					}
				}

				return name + ': ' + str;
			}


			function reduceToSingleString(output, base, braces) {
				var numLinesEst = 0;
				var length = output.reduce(function (prev, cur) {
					numLinesEst++;
					if (cur.indexOf('\n') >= 0) numLinesEst++;
					return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
				}, 0);

				if (length > 60) {
					return braces[0] +
						(base === '' ? '' : base + '\n ') +
						' ' +
						output.join(',\n  ') +
						' ' +
						braces[1];
				}

				return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
			}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
			function isArray(ar) {
				return Array.isArray(ar);
			}

			exports.isArray = isArray;

			function isBoolean(arg) {
				return typeof arg === 'boolean';
			}

			exports.isBoolean = isBoolean;

			function isNull(arg) {
				return arg === null;
			}

			exports.isNull = isNull;

			function isNullOrUndefined(arg) {
				return arg == null;
			}

			exports.isNullOrUndefined = isNullOrUndefined;

			function isNumber(arg) {
				return typeof arg === 'number';
			}

			exports.isNumber = isNumber;

			function isString(arg) {
				return typeof arg === 'string';
			}

			exports.isString = isString;

			function isSymbol(arg) {
				return typeof arg === 'symbol';
			}

			exports.isSymbol = isSymbol;

			function isUndefined(arg) {
				return arg === void 0;
			}

			exports.isUndefined = isUndefined;

			function isRegExp(re) {
				return isObject(re) && objectToString(re) === '[object RegExp]';
			}

			exports.isRegExp = isRegExp;

			function isObject(arg) {
				return typeof arg === 'object' && arg !== null;
			}

			exports.isObject = isObject;

			function isDate(d) {
				return isObject(d) && objectToString(d) === '[object Date]';
			}

			exports.isDate = isDate;

			function isError(e) {
				return isObject(e) &&
					(objectToString(e) === '[object Error]' || e instanceof Error);
			}

			exports.isError = isError;

			function isFunction(arg) {
				return typeof arg === 'function';
			}

			exports.isFunction = isFunction;

			function isPrimitive(arg) {
				return arg === null ||
					typeof arg === 'boolean' ||
					typeof arg === 'number' ||
					typeof arg === 'string' ||
					typeof arg === 'symbol' ||  // ES6 symbol
					typeof arg === 'undefined';
			}

			exports.isPrimitive = isPrimitive;

			exports.isBuffer = require('./support/isBuffer');

			function objectToString(o) {
				return Object.prototype.toString.call(o);
			}


			function pad(n) {
				return n < 10 ? '0' + n.toString(10) : n.toString(10);
			}


			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
				'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
			function timestamp() {
				var d = new Date();
				var time = [pad(d.getHours()),
					pad(d.getMinutes()),
					pad(d.getSeconds())].join(':');
				return [d.getDate(), months[d.getMonth()], time].join(' ');
			}


// log is just a thin wrapper to console.log that prepends a timestamp
			exports.log = function () {
				console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
			};


			/**
			 * Inherit the prototype methods from one constructor into another.
			 *
			 * The Function.prototype.inherits from lang.js rewritten as a standalone
			 * function (not on Function.prototype). NOTE: If this file is to be loaded
			 * during bootstrapping this function needs to be rewritten using some native
			 * functions as prototype setup using normal JavaScript does not work as
			 * expected during bootstrapping (see mirror.js in r114903).
			 *
			 * @param {function} ctor Constructor function which needs to inherit the
			 *     prototype.
			 * @param {function} superCtor Constructor function to inherit prototype from.
			 */
			exports.inherits = require('inherits');

			exports._extend = function (origin, add) {
				// Don't do anything if add isn't an object
				if (!add || !isObject(add)) return origin;

				var keys = Object.keys(add);
				var i = keys.length;
				while (i--) {
					origin[keys[i]] = add[keys[i]];
				}
				return origin;
			};

			function hasOwnProperty(obj, prop) {
				return Object.prototype.hasOwnProperty.call(obj, prop);
			}

		}).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {"./support/isBuffer": 14, "_process": 13, "inherits": 12}]
}, {}, [3]);
