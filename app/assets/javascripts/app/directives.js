'use strict';
angular.module('mc.resizer', []).directive('resizer', function($document) {

	return function($scope, $element, $attrs) {

		$element.on('touchstart', function(event) {
//      alert("mouse down");
			event.preventDefault();
			$document.on('touchmove', mousemove);
			$document.on('touchend', mouseup);
		});

		function mousemove(event) {
     if ($attrs.resizer == 'vertical') {
				// Handle vertical resizer
				var x = event.screenX;

				if ($attrs.resizerMax && x > $attrs.resizerMax) {
					x = parseInt($attrs.resizerMax);
				}

				/*$element.css({
					left: x + 'px'
				});*/

				$($attrs.resizerLeft).css({
					width: ($(window).width() - x) + 'px'
				});
			/*	$($attrs.resizerRight).css({
					left: (x + parseInt($attrs.resizerWidth)) + 'px'
				});*/

			} else {
				// Handle horizontal resizer
				var y = window.innerHeight - event.screenY;

				$element.css({
					//bottom: y + 'px'
				});

				$($attrs.resizerTop).css({
					height: ( y) + 'px',
          top: "auto",
          bottom: 0
				});
				$($attrs.resizerBottom).css({
				//	height: y + 'px'
				});
			}
		}

		function mouseup() {
			$document.unbind('touchmove', mousemove);
			$document.unbind('touchend', mouseup);
		}
	};
});

/* Directives */
