/*
 * magitip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-magitip-and-image-preview-using-jquery
 *
 */
 


this.magitip = function(){	
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$(".magitip").hover(function(e){											  
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='magitip'>"+ this.t +"</p>");
		$("#magitip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#magitip").remove();
    });	
	$(".magitip").mousemove(function(e){
		$("#magitip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



// starting the script on page load
$(document).ready(function(){
	magitip();
});
