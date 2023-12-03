(function($){
	
	/** ========================================== */
	/** Hover Card JS START */
	/** ========================================== */
	// Hover Cards content height
	$('.tg-hover_card .jltma-effect-lily').hover(function(){
		var titleHeight = $(this).find('.jltma-image-hover-title').outerHeight(true);
		var descHeight 	= $(this).find('.jltma-image-hover-desc').outerHeight(true);
		var contentHeight = titleHeight + descHeight;
		
		$(this).find('.jltma-image-hover-content').css('height', contentHeight);
	}, function(){
		$(this).find('.jltma-image-hover-content').css('height', '');
	});

})(jQuery);