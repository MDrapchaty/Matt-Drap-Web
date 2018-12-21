

// SCROLL ANIMATIONS

// H2 fade

var fadeItem = document.getElementsByClassName("fade");
var fadeDelayItem = document.getElementsByClassName("fade_delay");
var slideItem = document.getElementsByClassName("slide");

var $nav = $('#about');


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
                offset: '70%'
          });
    });
  }


// Set Navbar to hide on landing page and show on other sections
  $nav.waypoint(function(direction) {
  if (direction === 'down') {
    console.log('working!');
    document.getElementsByTagName("NAV")[0].style.opacity = '1.0';
  }
}, {
  offset: '5%'
});

$nav.waypoint(function(direction) {
  if (direction === 'up') {
    console.log('working! up');
    document.getElementsByTagName("NAV")[0].style.opacity = '.1';
  }
}, {
  offset: '5%'
});




  setTimeout(function() { slide($(slideItem)) }, 1000);
  setTimeout(function() { fade($(fadeItem)) }, 1000);
  setTimeout(function() { fadeDelay($(fadeDelayItem)) }, 3000);

