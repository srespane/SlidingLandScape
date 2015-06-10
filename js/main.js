$(document).ready(function() {
	$( "#prev-arrow" ).hide();
	$( "#next-arrow" ).hide();
	$( "#prev-arrow" ).click(function() {
		// alertPosition('#slides');
		// alertPosition('#grass');
		// alertPosition('#objects');
		rewind();
	});
	
	$('#slides').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
		$("#prev-arrow").show('slow');
	});
  
	
});

function alertPosition(pElementId){
	myPos = $(pElementId).css("background-position").split(" ");
	// myPos[0] = parseInt(myPos[0].replace("px",""));
	// myPos[1] = parseInt(myPos[1].replace("px",""));
	alert(myPos[0]);
}

function rewind(){
	$("#slides,#grass,#objects ").removeClass('animateSlides animateGrass animateObjects').addClass('rewindBg');
	setTimeout(function() { 
        beginMotion();
	}, 3500); 
	
	// $("").removeClass('animateGrass').addClass('rewindBg');
	
	// $("").removeClass('animateObjects').addClass('rewindBg');
}

function beginMotion(){
	$("#slides,#grass,#objects").removeClass('rewindBg');
	$("#slides").addClass('animateSlides');
	$("#grass").addClass('animateGrass');
	$("#objects").addClass('animateObjects');
	$("#prev-arrow").hide('slow');
}