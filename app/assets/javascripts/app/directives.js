'use strict';
angular.module('mc.resizer', []).directive('resizer', function($document) {

	return function($scope, $element, $attrs) {

		$element.on('touchstart', function(event) {
//      alert("mouse down");
			event.preventDefault();
			document.addEventListener('touchmove', mousemove, false);
			document.addEventListener('touchend', mouseup, false);
		});

		function mousemove(event) {
     if ($attrs.resizer == 'vertical') {
				// Handle vertical resizer
				var x = event.targetTouches[0].clientX;
				if ($attrs.resizerMax && x > $attrs.resizerMax) {
					x = parseInt($attrs.resizerMax);
				}

				/*$element.css({
					left: x + 'px'
				});*/

				$($attrs.resizerLeft).css({
					width: ($(window).width() - x) + 'px'
				});
				/*$($attrs.resizerRight).css({
					left: (x + parseInt($attrs.resizerWidth)) + 'px'
				});*/

			} 

	if ($attrs.resizer == 'horizontal') {
				// Handle horizontal resizer
				var y = window.innerHeight - event.targetTouches[0].clientY;
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

		function mouseup(event) {
			document.removeEventListener('touchmove', mousemove);
			document.removeEventListener('touchend', mouseup);
		}
	};
});
/* Directives */
