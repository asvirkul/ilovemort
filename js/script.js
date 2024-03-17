$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'horizontal',
        easing: 'linear',
        scrollingSpeed: 100
    });
    $('.count').hover(function() {
        $('#target').counto(1000000000, 5000);
    })
    function parallax(event) {
        console.log(event);
        this.querySelectorAll(".layer").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          layer.style.transform = `translate(${(event.clientX * speed) / 1000}px, ${
            (event.clientY * speed) / 1000
          }px)`;
        });
      }
      
      document.addEventListener("mousemove", parallax);


      $('.grid').masonry({
        columnWidth: 200,
        itemSelector: '.grid-item'
      });

      $('.paw-raise').click(function ( e ) {
        e.preventDefault();
        $('.grid').animate({
            bottom: 0
      }, 1000, "swing")
       $('.paw-raise').animate({
        
        marginBottom: '2000px'
       }, 1000, "swing")
      });

      
});