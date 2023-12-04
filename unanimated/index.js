"use strict";
(function() {
  const SCROLL_OFFSET = 100;
  window.addEventListener("load", init);

  function init() {
    let clickButton = document.getElementById("click-reveal");
    clickButton.addEventListener("click", () => {
      document.getElementById("dropdown").classList.toggle("hidden");
    });

    let scrollShows = document.querySelectorAll("section article");
    handleScrollAnimation(scrollShows)

    window.addEventListener('scroll', () => {
      handleScrollAnimation(scrollShows);
    })
    
  }

  function elementInView(el, offset = 0) {
    let elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  }
  
  function handleScrollAnimation(el) {
    for (let i = 0; i < el.length; i++) {
      if (elementInView(el[i], SCROLL_OFFSET)) {
        el[i].classList.add('scrolled');
      } else {
        el[i].classList.remove('scrolled');
      }
    }
  }

})();