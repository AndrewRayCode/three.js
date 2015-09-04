/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Clock = function ( autoStart ) {

	this.autoStart = ( autoStart !== undefined ) ? autoStart : true;

	this.startTime = 0;
	this._oldTime = 0;
	this.running = false;

};

THREE.Clock.prototype = {

	constructor: THREE.Clock,

	start: function () {

		this.startTime = this.getCurrentTime();
		this._oldTime = this.startTime;
		this.running = true;

	},

	stop: function () {

		this.running = false;

	},

	getElapsedTime: function () {

		return this.getCurrentTime() - this.startTime;

	},

	getCurrentTime: function() {

		var currentTime = self.performance !== undefined && self.performance.now !== undefined
				? self.performance.now()
				: Date.now();

		// Convert to nanoseconds, which is accuracy of performance.now
		return currentTime * 0.001;

	},

	getDelta: function () {

		var diff = 0;

		if ( this.autoStart && ! this.running ) {

			this.start();

		}

		if ( this.running ) {

			var newTime = this.getCurrentTime();
			diff = newTime - this._oldTime;
			this._oldTime = newTime;

		}

		return diff;

	}

};
