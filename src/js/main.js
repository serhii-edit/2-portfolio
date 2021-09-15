document.addEventListener("DOMContentLoaded", function(event) {

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

  // X Exit
  var modalCloseWork = document.getElementsByClassName("modalClosePortfolio");

// btn Portfolio modals (START)
  btnCard_1.onclick = function () {
    modal_1.classList.add("showPortfolioModal");
  } 
  btnCard_2.onclick = function () {
    modal_2.classList.add("showPortfolioModal");
  } 
  btnCard_3.onclick = function () {
    modal_3.classList.add("showPortfolioModal");
  } 
  btnCard_4.onclick = function () {
    modal_4.classList.add("showPortfolioModal");
  } 
  btnCard_5.onclick = function () {
    modal_5.classList.add("showPortfolioModal");
  } 
  btnCard_6.onclick = function () {
    modal_6.classList.add("showPortfolioModal");
  } 
// btn Portfolio modals (END)

function closeModalPort() {
  modal_1.classList.remove("showPortfolioModal"),
  modal_2.classList.remove("showPortfolioModal");
  modal_3.classList.remove("showPortfolioModal");
  modal_4.classList.remove("showPortfolioModal");
  modal_5.classList.remove("showPortfolioModal");
  modal_6.classList.remove("showPortfolioModal");
}

  modalCloseWork.onclick = function () {
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
  

});