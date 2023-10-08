$(document).ready(function () {
  $(window).scroll(function () {
    const scrollY = $(window).scrollTop();
    if (scrollY > 0) {
      $(".header-inner").addClass("fixed");
    } else {
      $(".header-inner").removeClass("fixed");
    }
  });

  $(window).trigger("scroll");

  $(".gnb .group-nav .btn-all").click(function () {
    $(".gnb .group-nav").toggleClass("on");
    $(".gnb .group-all").slideToggle();
  });

  $("#menuBtn").click(function () {
    $("body").addClass("hidden");
    $(".side-nav, .dimmed").addClass("on");
    $(".fix-top").removeClass("on");
  });
  $(".header .dimmed").click(function () {
    $("body").removeClass("hidden");
    $(".side-nav, .dimmed").removeClass("on");
  });
  $(".side-nav .close").click(function () {
    $("body").removeClass("hidden");
    $(".side-nav, .dimmed").removeClass("on");
  });

  var adSlide = new Swiper(".ad-slide .swiper", {
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
  });

  var swiper = new Swiper(".sc-visual .swiper", {
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  $(".sc_best .best_cate a").click(function (e) {
    e.preventDefault();

    tabName = $(this).data("tab");

    $(".sc_best .best_cate a").removeClass("active");
    $(this).addClass("active");

    $(tabName).addClass("active").siblings().removeClass("active");
  });

  var adSlide = new Swiper(".sc-ai .swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var adSlide = new Swiper(".sc-cate .swiper", {
    slidesPerView: 2.1,
    spaceBetween: 10,
  });

  $(".btn-search").on("click", function () {
    $(".pop-search").toggleClass("on");
    if ($(".pop-search").hasClass("on")) {
      $(".ad-slide").hide();
    } else {
      $(".ad-slide").show();
    }
  });

  $(".backarrow").on("click", function () {
    $(".pop-search").removeClass("on");

    if ($(".pop-search").removeClass("on")) {
      $(".ad-slide").show();
    }
  });

  $(".side-nav .group-nav .nav").click(function (e) {
    // 기본 이벤트(링크 이동)를 막습니다.
    e.preventDefault();

    // 만약 현재 클릭한 요소가 "on" 클래스를 가지고 있다면
    if ($(this).hasClass("on")) {
      // "on" 클래스를 제거하고, 형제 요소인 <ul>을 위로 접습니다.
      $(this).removeClass("on").siblings("ul").stop().slideUp();
    } else {
      // "on" 클래스를 제거하고, 모든 다른 요소의 <ul>도 위로 접습니다.
      $(".nav").removeClass("on").siblings("ul").stop().slideUp();

      // 현재 클릭한 요소에 "on" 클래스를 추가하고, 형제 요소인 <ul>을 아래로 내립니다.
      $(this).addClass("on").siblings("ul").stop().slideDown();
    }
  });

  var prev = 0; // Initialize the previous scroll position

  $(window).scroll(function () {
    var curr = $(this).scrollTop();

    if (curr < prev) {
      $(".fix-top").addClass("on");
    } else {
      $(".fix-top").removeClass("on");
    }
    if (curr === 0) {
      $(".fix-top").removeClass("on");
    }

    prev = curr;
  });

  $(".fix-top").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 새로고침을 하면 다시 원래대로 돌아감
