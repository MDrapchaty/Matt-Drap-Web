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
  function scroll(i) {
    i.each( function() {
      var element = $(this);
          element.waypoint(function() {
            element.addClass('slide');
            },{
                triggerOnce: true,
                offset: '50%'
          });
    });
  }

  setTimeout(function() { scroll($('.scroll')) }, 10);
