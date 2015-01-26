// This is the main javascript file for the Singolo Project

$(document).ready(function(){
	// When a portfolio nav list item is clicked...
	$("nav.portfolio-nav > ul > li").click(function(){
		// Toggle the "active" class for its <a> child
		$(this).children("a").toggleClass("active");
		// Then remove the "active" class from any siblings' <a> child
		$(this).siblings().children("a").removeClass("active");
	});
});


