/**
 * Main JS file for Writr behaviours
 */

// When DOM is fully loaded
jQuery(document).ready(function ($) {

	/* Enable zebra-striping on posts index
	--------------------------------------------------*/
	
	$('.post:odd').addClass('stripe');
	
	
	/* Element Fade on Scroll
	--------------------------------------------------*/
	
	/*
    $(window).scroll(function () { 
	    var $headFade = $('#site-head-content');
	    //Get scroll position of window 
	    var windowScroll = $(this).scrollTop();
	    //Slow scroll of uber statement and fade it out 
	    $headFade.css({
	        'margin-top': -(windowScroll / 0) + "px",
	        'opacity': 1 - (windowScroll / 600)
	    });
	});
    */

});
