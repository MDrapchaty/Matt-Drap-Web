

// SCROLL ANIMATIONS

// H2 fade

var fadeItem = document.getElementsByClassName("fade");
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
                offset: '50%'
          });
    });
  }



  setTimeout(function() { slide($(slideItem)) }, 1000);
  setTimeout(function() { fade($(fadeItem)) }, 1000);

