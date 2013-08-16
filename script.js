// put boxes behind content to help with the illusion of equal height boxes.
// see eqHeight & eqBox in grid.scss
// eqBox is for equal height columns with the fancy drop shadow outline
// called on load & on resize (throttled)

namespace.equalBox = function(){
	log("eqBox init");
	var eqHeight;
	if ($(window).width() > b3.smallBP){
		$(".eqBox").each(function(){
			eqHeight = $(this).height();
			$(this).children(".col").each(function(index){
				log("col" + index);
				if ($(this).find(".boxDisplay").length < 1) {
					$(this).prepend('<div class="boxDisplay"></div>');
				}
				// subtract 6px to leave room for the drop shadow bottom
				$(this).find(".boxDisplay").height(eqHeight-6);
			});
		});
	}
}