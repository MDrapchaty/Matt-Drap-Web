

// SCROLL ANIMATIONS

// H2 fade

var fadeItem = document.getElementsByClassName("fade");
var fadeDelayItem = document.getElementsByClassName("fade_delay");
var slideItem = document.getElementsByClassName("slide");

var $nav = $('#about');

// fade function
function fade(i){
	i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	element.addClass('fade_in');
            },{
                triggerOnce: true,
                offset: '70%'
          });
    });
}

//fade with delay function
function fadeDelay(i){
	i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	element.addClass('fade_in');
            },{
                triggerOnce: true,
                offset: '70%'
          });
    });
}

// header bar slide

  function slide(i) {
    i.each( function() {
      var element = $(this);
          element.waypoint(function() {
          	if (element.attr('data-dir') == 'right') {
          		element.addClass('slide_right');
          	}else if (element.attr('data-dir') == 'left'){
          		element.addClass('slide_left');
          	}else if (element.attr('data-dir') == 'up'){
              element.addClass('slide_up');
            };
          	
            
            },{
                triggerOnce: true,
                offset: '70%'
          });
    });
  }


// Set Navbar to hide on landing page and show on other sections
  $nav.waypoint(function(direction) {
  if (direction === 'down') {
    document.getElementById("navbar").style.opacity = '1.0';
  }
}, {
  offset: '5%'
});

$nav.waypoint(function(direction) {
  if (direction === 'up') {
    document.getElementById("navbar").style.opacity = '.0';
  }
}, {
  offset: '5%'
});




  setTimeout(function() { slide($(slideItem)) }, 1000);
  setTimeout(function() { fade($(fadeItem)) }, 1000);
  setTimeout(function() { fadeDelay($(fadeDelayItem)) }, 3000);

