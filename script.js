
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;



function handleScroll() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


window.onscroll = function() {
    handleScroll();
};

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const tooltipSections = document.querySelectorAll('.toolhere .tooltiptext');

window.onmousemove = function(e) {
    const x = (e.clientX + 10) + 'px', // Slightly offset from mouse cursor
          y = (e.clientY + 10) + 'px';

    tooltipSections.forEach(tooltip => {
        tooltip.style.top = y; // Set tooltip vertical position
        tooltip.style.left = x; // Set tooltip horizontal position
    });
};
