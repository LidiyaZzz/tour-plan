$(document).ready(function () {
  //Слайдер 1

  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  //effect: "cube",
  // тащим слайды мышкой
  simulateTouch: true,
  // хватаем слайды 'лапкой'
  grabCursor: true,
  // Управление с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

//Слайдер 2
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  //effect: "cube",  
  simulateTouch: true,
  grabCursor: true,
  // Управление с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

//мобильное меню
var menuButton = $('.menu-button');
menuButton.on('click', function () {  
  $('.navbar-bottom').toggleClass('navbar-bottom--visible');
});

//модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);   

  function openModal() {
    var targetModal = $(this).attr("data-href");    
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("body__no-scroll");
  };
  
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("body__no-scroll");
  }; 

  $(".modal").on("click", function() {    
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("body__no-scroll");
  });

  $(".modal__dialog").on("click", function(event) {    
    event.stopPropagation();
  });

  document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
          isEscape = (evt.key === "Escape" || evt.key === "Esc");
      } else {
          isEscape = (evt.keyCode === 27);
      }
      if (isEscape) {
          $(".modal__overlay").removeClass("modal__overlay--visible");
          $(".modal__dialog").removeClass("modal__dialog--visible");
          $("body").removeClass("body__no-scroll");
      } 
  };

  // Обработка формы отправки
    $(".phone").mask('(000) 000-0000');
    $(".form").each(function() {
      $(this).validate({
      errorClass: "invalid",      
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please write at least 2 characters"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Required email format - name@domain.com"
        },
        phone: {
          required: "Please write your phone number",
          minlength: "Please write at least 10 characters"
        },
      }
    });
    });

    $(".newsletter__subscripen").validate({
      errorClass: "error",
      messages: {        
        email: {
          required: "We need your email address to contact you",
          email: "Required email format - name@domain.com"
        },        
      }    
    });

// анимация
AOS.init({
  disable: function() {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  }
});
    
});
