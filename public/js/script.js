$(function() {
    

//Smooth scrolling on link click
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });


    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
  }



  /* modal */
var work = document.getElementsByClassName('work_example');
var modal = [];
var modals = document.getElementsByClassName('modal');

/* for loop to run modal code for each work example modal */
var i;
for (i = 0; i < 6; i++) { 
  
  // Get the modal
  modal[i] = document.getElementById('myModal' + i);
  
  // Get the button that opens the modal
  var btn = document.getElementsByClassName('work_button')[i];
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[i];
  let t_mod = modal[i];
  
  // When the user clicks on the button, open the modal 
  btn.onclick = function() {
    t_mod.style.display = "block";
    
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    t_mod.style.display = "none";
  }

}
// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
    if (event.target == modal[0]) {
      modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
      modal[1].style.display = "none";
    }
    if (event.target == modal[2]) {
      modal[2].style.display = "none";
    }
    if (event.target == modal[3]) {
      modal[3].style.display = "none";
    }
    if (event.target == modal[4]) {
      modal[4].style.display = "none";
    }
    if (event.target == modal[5]) {
      modal[5].style.display = "none";
    }
  }


    /* show navbar at top of page */
   /* 
    $(document).scroll(function() { 
      if($(window).scrollTop() === 0) {
      $("#navbar").hide();
      }
    });
    */


//Viewport fix for moblile
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Viewport fix for mobile safari/ios
window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.



});


