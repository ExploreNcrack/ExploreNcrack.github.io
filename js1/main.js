/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {


	function init() {
		// The canvas animation for the wave.
		// https://github.com/caffeinalab/siriwavejs
		var siriWave = new SiriWave({
			container: document.getElementById('wavebg'),
			//cover: true,
			speed: 0.01,
			color: '#4d61c5',
			frequency: 3,
			amplitude: 0.5,
			autostart: true
		});

	
	}

	

	init();

})(window);