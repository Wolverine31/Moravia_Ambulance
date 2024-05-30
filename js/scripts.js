$(document).ready(function(){
    $('.owl-carousel-1').owlCarousel({ 
        autoplay:true,
        autoplayTimeout: 5500,
        autoplaySpeed: 1000,
        loop: true,
        // margin: 50,
        nav: false,
        dots: false,
        
        responsive:{
                    0:{
                        items:1
                    },
                    500: {
                        items:2
                    },
                    1100:{
                        items:4
                    }
                }
            });
  });

  $(document).ready(function(){
    $('.owl-carousel-2').owlCarousel({ 
        autoplay:true,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        loop: true,
        // margin: 50,
        nav: false,
        dots: true,
        responsive:{
                    0:{
                        items:1
                    },
                    500: {
                        items:1
                    },
                    1100:{
                        items:1
                    }
                }
            });
  });

// Accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
