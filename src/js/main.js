document.addEventListener("DOMContentLoaded", function(event) {

  var body = document.querySelector("body");
  var main = document.querySelector("main");

  function bodyHidden() {
    body.style.overflow = 'hidden';

  }
  function bodyAuto() {
    body.style.overflow = 'visible';
  }

  // Portfolio modals (START)
  var modal_1 = document.getElementById("modal_1");
  var modal_2 = document.getElementById("modal_2");
  var modal_3 = document.getElementById("modal_3");
  var modal_4 = document.getElementById("modal_4");
  var modal_5 = document.getElementById("modal_5");
  var modal_6 = document.getElementById("modal_6");
   // Portfolio modals (END)

  // btn cards Portfolio modals (START)
  var btnCard_1 = document.getElementById("card_1");
  var btnCard_2 = document.getElementById("card_2");
  var btnCard_3 = document.getElementById("card_3");
  var btnCard_4 = document.getElementById("card_4");
  var btnCard_5 = document.getElementById("card_5");
  var btnCard_6 = document.getElementById("card_6");
  // btn cards Portfolio modals (END)

  // Portfolio Btn Exit (for each modal different variable) same class
  var CaseCloseBtn0 = document.getElementsByClassName('CaseCloseBtn')[0];
  var CaseCloseBtn1 = document.getElementsByClassName('CaseCloseBtn')[1];
  var CaseCloseBtn2 = document.getElementsByClassName('CaseCloseBtn')[2];
  var CaseCloseBtn3 = document.getElementsByClassName('CaseCloseBtn')[3];
  var CaseCloseBtn4 = document.getElementsByClassName('CaseCloseBtn')[4];
  var CaseCloseBtn5 = document.getElementsByClassName('CaseCloseBtn')[5];

// BTN open Portfolio modals (START)
  btnCard_1.onclick = function () {
    modal_1.classList.add("showPortfolioModal");
    bodyHidden();
  } 
  btnCard_2.onclick = function () {
    modal_2.classList.add("showPortfolioModal");
    bodyHidden();
  } 
  btnCard_3.onclick = function () {
    modal_3.classList.add("showPortfolioModal");
    bodyHidden();
  } 
  btnCard_4.onclick = function () {
    modal_4.classList.add("showPortfolioModal");
    bodyHidden();
  } 
  btnCard_5.onclick = function () {
    modal_5.classList.add("showPortfolioModal");
    bodyHidden();
  } 
  btnCard_6.onclick = function () {
    modal_6.classList.add("showPortfolioModal");
    bodyHidden();
  } 
// btn Portfolio modals (END)

// Portfolio main close function (for all modal) same class
function closeModalPort() {
  modal_1.classList.remove("showPortfolioModal"),
  modal_2.classList.remove("showPortfolioModal");
  modal_3.classList.remove("showPortfolioModal");
  modal_4.classList.remove("showPortfolioModal");
  modal_5.classList.remove("showPortfolioModal");
  modal_6.classList.remove("showPortfolioModal");
  bodyAuto();
}

// Portfolio for each modal (BTN Exit)
  CaseCloseBtn0.onclick = function () {
    closeModalPort();
  }
  CaseCloseBtn1.onclick = function () {
    closeModalPort();
  }
  CaseCloseBtn2.onclick = function () {
    closeModalPort();
  }
  CaseCloseBtn3.onclick = function () {
    closeModalPort();
  }
  CaseCloseBtn4.onclick = function () {
    closeModalPort();
  }
  CaseCloseBtn5.onclick = function () {
    closeModalPort();
  }

// Click outside of modal Exit (START)
  modal_1.onclick = function(eModalWork) {
    if (eModalWork.target == modal_1) {
      closeModalPort();
    }
  }
  modal_2.onclick = function(eModalWork) {
    if (eModalWork.target == modal_2) {
      closeModalPort();
    }
  }
  modal_3.onclick = function(eModalWork) {
    if (eModalWork.target == modal_3) {
      closeModalPort();
    }
  }
  modal_4.onclick = function(eModalWork) {
    if (eModalWork.target == modal_4) {
      closeModalPort();
    }
  }
  modal_5.onclick = function(eModalWork) {
    if (eModalWork.target == modal_5) {
      closeModalPort();
    }
  }
  modal_6.onclick = function(eModalWork) {
    if (eModalWork.target == modal_6) {
      closeModalPort();
    }
  }
// Click outside of modal Exit (END)

  document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      // modal_1.classList.remove("portfolio-1");
      closeModalPort();
    }
  });
  // Done Portfolio modal 

  // IOS Disable scroll for Modal (START)
  // body.addEventListener('touchforcechange', body.preventDefault, {passive: false});

  // body.addEventListener('touchmove', function(e) {
  //   e.preventDefault();
  // });

  // modal_1.addEventListener('touchforcechange', body.preventDefault, {passive: false});

  // modal_1.addEventListener('touchmove', function(e) {
  //   e.preventDefault();
  // });

  // IOS Disable scroll for Modal (END)


  var featreSwiper = new Swiper('.feature__swiper', {
    
    direction: 'horizontal',
    wrapperClass: "feature__wrapper",

    // loop: true,
    slideClass: "feature__slide",
    slideActiveClass: "feature__slide-active",
    slidesPerView: 3,
    slidesPerGroup: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.feature__button-next',
      prevEl: '.feature__button-prev',
    },

    pagination: {
      el: '.feature__pagination',
      type: 'bullets',
      bulletClass: "feature__pagination-bullet",
      bulletActiveClass: "feature__pagination-bullet-active",
      clickable: true,
    },

  });

});