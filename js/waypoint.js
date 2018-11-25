

// SCROLL ANIMATIONS

// H2 fade

var fadeItem = document.getElementsByClassName("fade");
var fadeDelayItem = document.getElementsByClassName("fade_delay");
var slideItem = document.getElementsByClassName("slide");
var about = document.getElementById("about");



function fade(i){
	i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	element.addClass('fade_in');
            },{
                triggerOnce: true,
                offset: '50%'
          });
    });
}

function fadeDelay(i){
	i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	element.addClass('fade_in');
            },{
                triggerOnce: true,
                offset: '60%'
          });
    });
}

// bar slide

  function slide(i) {
    i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	if (element.attr('data-dir') == 'right') {
          		element.addClass('slide_right');
          	}else if (element.attr('data-dir') == 'left'){
          		element.addClass('slide_left');
          	};
          	
            
            },{
                triggerOnce: true,
                offset: '60%'
          });
    });
  }



  setTimeout(function() { slide($(slideItem)) }, 1000);
  setTimeout(function() { fade($(fadeItem)) }, 1000);
  setTimeout(function() { fadeDelay($(fadeDelayItem)) }, 3000);

