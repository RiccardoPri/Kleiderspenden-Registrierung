/*********************************************************************************
JS for: Studienarbeit Programmierung von Webanwendungsoberflächen
Description: Fiktive Vereinsseite für zur Registrierung von Kleiderspenden

Version: 0.1
Author: Riccardo Princiotto
License: none
Tags: Javascript, jQuery, responsiv, animation

Notices: using jQuery functionality
**********************************************************************************/

/********************************************************************************
                        Functionality on document loaded
*********************************************************************************/

$(document).ready(function(){
/********* navigation mode on smaller screens***********/
	var windowSize = ($(window).width() );
	if(windowSize <=974) {
		$("#navStart, #logoStart").hide();
		$("#header").show();
	} else {
		$("#navStart, #logoStart").show();
		$("#header").hide();
	}
});

/********************************************************************************
                    Embedded navigation hide on scroll function
*********************************************************************************/

//This has to be deactivated on @Media < 974px
//This functions is active on every scroll on the page
    $(window).scroll(function() {
		//define variables for this function
        var yPos = ( $(window).scrollTop() );
		var windowSize = ($(window).width() );
		if(windowSize > 974) { //only works if windowSize is > 974px
			if(yPos < 1) { // starts after scrolling one px
				//on 0px scroll the embedded navigation fadeIn and the navbar fade out
				$("#navStart, #logoStart").fadeIn();
				$("#header").fadeOut();
			} else {
				//it turns after 1px was scrolled
				$("#navStart, #logoStart").fadeOut();
				$("#header").fadeIn();
			}
		}
	});
