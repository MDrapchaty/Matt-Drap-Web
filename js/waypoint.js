/*
var $about = $('.about_bar');

$about.waypoint(function(){
	$about.addClass('animated');
}, { offset: '50%'});

*/


/*   WORKING UGLY

var $elem = $('.on_scroll');

$elem.waypoint(function () {
	//console.log("test1");
	var elem = document.getElementById('about_bar');   
    var pos = elem.style.left + 25;
    var id = setInterval(frame, 20);

    function frame() {
      if (pos == 50) {
        console.log('how many');
        clearInterval(id);
        
      } else {
        pos++;
        elem.style.left = pos + '%';
        console.log(pos); 
      }
    } 

}, {  
	  triggerOnce: true,
	  offset: $(window).height() / 1.6
	});


*/

//setTimeout(function() { onScroll() }, 10);




// SCROLL ANIMATIONS

// H2 fade

var fadeItem = document.getElementsByClassName("fade");
var about = document.getElementById("about");
var abtContent = document.getElementById("test");
console.log(abtContent);


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



  setTimeout(function() { slide($('.scroll_bar')) }, 1000);
  setTimeout(function() { fade($(fadeItem)) }, 1000);

