/*********************************************************************************
JS for: Studienarbeit Programmierung von Webanwendungsoberflächen
Description: Fiktive Vereinsseite für zur Registrierung von Kleiderspenden

Version: 0.2
Author: Riccardo Princiotto
License: none
Tags: Javascript, jQuery, responsiv, animation

Notices: using jQuery functionality
**********************************************************************************/
/********************************************************************************
                            Defining global variables
*********************************************************************************/

var imgActive;

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

/********************************************************************************
				Funcionaltity for index.html
*********************************************************************************/
/********* image carousel ***********/
/********* function next image and discription text***********/
function nextImage () {
if (imgActive === "imgCarousel1") {
	$("#imgCarousel1, #imgDiscription1").fadeOut(function(){
		$("#imgCarousel2, #imgDiscription2").fadeIn();
		imgActive = "imgCarousel2";
	});
} else if (imgActive === "imgCarousel2") {
	$("#imgCarousel2, #imgDiscription2").fadeOut(function(){
		$("#imgCarousel3, #imgDiscription3").fadeIn();
		imgActive = "imgCarousel3";
	});
} else if (imgActive === "imgCarousel3") {
	$("#imgCarousel3, #imgDiscription3").fadeOut(function(){
		$("#imgCarousel1, #imgDiscription1").fadeIn();
		imgActive = "imgCarousel1";
	});
};
};

/********* function last image and discription text***********/
function prevImage () {
if (imgActive === "imgCarousel1") {
	$("#imgCarousel1, #imgDiscription1").fadeOut(function(){
		$("#imgCarousel3, #imgDiscription3").fadeIn();
		imgActive = "imgCarousel3";
	});
} else if (imgActive === "imgCarousel2") {
	$("#imgCarousel2, #imgDiscription2").fadeOut(function(){
		$("#imgCarousel1, #imgDiscription1").fadeIn();
		imgActive = "imgCarousel1";
	});
} else if (imgActive === "imgCarousel3") {
	$("#imgCarousel3, #imgDiscription3").fadeOut(function(){
		$("#imgCarousel2, #imgDiscription2").fadeIn();
		imgActive = "imgCarousel2";
	});
};
};

/********* call on button click functions ***********/
/********* last image ***********/
$("#prev").click(function () { 
prevImage();
});
/********* next image ***********/
$("#next").click(function () { 
nextImage();
});
/********* Click on image calls next image ***********/
$(".imgCarousel").click(function(){
nextImage();
});
