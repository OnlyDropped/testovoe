jQuery(($) => {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 780) $('.content__to-up').fadeIn();
        else $('.content__to-up').fadeOut();
    });
  $('.content__to-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 566);
        return false;
    });
});
//document.addEventListener('DOMContentLoaded', () => {
//
//  let toTopBtn = document.querySelector('.content__to-up');
//
//  window.onscroll = function () {
//    if (window.pageYOffset > 580) {
//      toTopBtn.style.display = 'block'
//    } else {
//      toTopBtn.style.display = 'none'
//    }
//  }
//
//  // плавный скролл наверх 
//  toTopBtn.addEventListener('click', function () {
//    window.scrollBy({
//      top: -document.documentElement.scrollHeight,
//      behavior: 'smooth'
//    });
//  });
//});
//$('.header__btn').on('click', function () {
//  $('.header__nav').toggleClass('header__nav--active');
//});

$(function () {
  $('.header__btn').on('click', function () {
    $('.nav__list').toggleClass('nav__list--active');
  });
});

$(function() {
  $(".all__form-btn").on("click", validate);
 
  // Validate email
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
   
  // send form
  function sendForm() {
    $(".all__error").text("Форма отправлена успешно").fadeIn();
  }
 
  // validate email and send form after success validation
  function validate() {
    var email = $(".all__form-email").val();
    var $error = $(".all__error");
    $error.text("");
 
    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(email + " Введите правильный email");
    }
    return false;
  }
});