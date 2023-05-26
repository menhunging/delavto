$(document).ready(function () {
  if ($(".search").length > 0) {
    let btnSearch = $(".btnSearch");
    let btnText = $(".search .text");

    btnSearch.click((e) => searchClick(e));
    btnText.click((e) => searchClick(e));

    const searchClick = (e) => {
      e.preventDefault();
      $(".search").toggleClass("open");
    };
  }

  if ($(".btnArrowUp").length > 0) {
    $(".btnArrowUp").click(function () {
      $(window).scrollTop(0);
    });
  }

  if ($(".menuDropWrapper").length > 0) {
    let menuArrow = $(".menuArrow");
    let menuDrop = $(".menuDropWrapper");
    let logoBurger = $(".logoBurger");
    let menuClose = $(".menuClose");

    menuArrow.click(function (e) {
      e.preventDefault();
      $(this).toggleClass("open");
      // logoBurger.toggleClass("open");
      menuDrop.toggleClass("open").stop().slideToggle();
    });

    logoBurger.click(function (e) {
      e.preventDefault();
      // $(this).toggleClass("open");
      menuArrow.toggleClass("open");
      menuDrop.toggleClass("open").stop().slideToggle();
      if ($(window).width() < 992) {
        $("body").addClass("hidden");
      }
    });

    menuClose.click(function (e) {
      e.preventDefault();
      menuArrow.toggleClass("open");
      menuDrop.toggleClass("open").stop().slideToggle();
      $("body").removeClass("hidden");
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
      // deeplinking: true, // для hash надо попробовать
    });
  }

  if ($(".tabsWithLeft").length > 0) {
    $(".tabsWithLeft").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".checkBoxContent ").length > 0) {
    $(".checkBoxContent ").tabslet({
      mouseevent: "click",
      animation: true,
    });

    $(".checkBoxContent").on("_before", function (e) {
      $(e.target).find("input").prop("checked", true);
    });
  }

  if ($(".tabsInformation").length > 0) {
    let tabsInformation = $(".tabsInformation");

    tabsInformation.tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
      delay: 100,
      controls: {
        prev: " .prev",
        next: " .next",
      },
    });

    tabsInformation.on("_before", function () {
      $(this).addClass("change");
      if ($(window).width() < 640) {
        $(window).scrollTop($(this).offset().top - $(".header").height() - 70);
      }
    });

    tabsInformation.on("_after", function () {});
  }

  if ($(".youPartnerSlider").length > 0) {
    const swiper = new Swiper(".youPartnerSlider", {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".youPartners .swiper-button-next",
        prevEl: ".youPartners .swiper-button-prev",
      },
      pagination: {
        el: ".youPartners .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
      },
    });
  }

  if ($(".sliderGrettings").length > 0) {
    const swiper = new Swiper(".sliderGrettings", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 1000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

      navigation: {
        nextEl: ".greetingSection .swiper-button-next",
        prevEl: ".greetingSection .swiper-button-prev",
      },
      on: {
        // beforeSlideChangeStart: function () {
        //
        // },
        slideChange: function () {},
      },

      pagination: {
        el: ".greetingSection .swiper-pagination",
        clickable: true,
      },
    });
  }

  if ($(".offersSlider").length > 0) {
    $(".offersSlider").map(function () {
      let carousel = $(this);
      new Swiper(carousel[0], {
        slidesPerView: 4,
        slidesPerGroup: 4,
        navigation: {
          nextEl: carousel
            .parents(".offersSliderWrapper")
            .find(".swiper-button-next")[0],
          prevEl: carousel
            .parents(".offersSliderWrapper")
            .find(".swiper-button-prev")[0],
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            pagination: {
              el: ".offersSliderWrapper .swiper-pagination",
              clickable: true,
            },
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        },
      });
    });
  }

  if ($(".sliderReviews").length > 0) {
    const swiper = new Swiper(".sliderReviews", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      navigation: {
        nextEl: ".sliderReviewsWrapper .swiper-button-next",
        prevEl: ".sliderReviewsWrapper .swiper-button-prev",
      },
      pagination: {
        el: ".sliderReviewsWrapper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    });
  }

  if ($(".sliderDocuments").length > 0) {
    const swiper = new Swiper(".sliderDocuments", {
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: ".sliderDocumentsWrapper .swiper-button-next",
        prevEl: ".sliderDocumentsWrapper .swiper-button-prev",
      },
      pagination: {
        el: ".sliderDocumentsWrapper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  }

  if ($(".sliderTeam").length > 0) {
    const swiper = new Swiper(".sliderTeam", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".sliderTeamWrapper .swiper-button-next",
        prevEl: ".sliderTeamWrapper .swiper-button-prev",
      },
      pagination: {
        el: ".sliderTeamWrapper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1500: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      },
    });
  }

  if ($(".sliderMedia").length > 0) {
    $(".sliderMedia").map(function () {
      let carousel = $(this);
      new Swiper(carousel[0], {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: carousel
            .parents(".sliderMediaWrapper")
            .find(".swiper-button-next")[0],
          prevEl: carousel
            .parents(".sliderMediaWrapper")
            .find(".swiper-button-prev")[0],
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      });
    });
  }

  if ($(".otherSolutions").length > 0) {
    const swiper = new Swiper(".otherSolutions", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
      pagination: {
        el: ".otherSolutions .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      },
    });
  }

  if ($("select").length > 0) {
    $("select").selectric();
  }

  if ($(".calendar").length > 0) {
    $(".linkCalendar .link").click(function () {
      let pos;
      $(".tabsWithLeft .tabsLeftSide a").map(function () {
        $(this).attr("href") == "#calendarTab" &&
          (pos = $(this).parents("li").index());
      });
      $(".tabsWithLeft .tabsLeftSide li").eq(pos).find("a").trigger("click");
    });

    function Calendar(id, year, month) {
      var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = "<div class='tr'>",
        month = [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ];

      if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += "<div class='td'></div>";
      } else {
        for (var i = 0; i < 6; i++) calendar += "<div class='td'></div>";
      }

      for (var i = 1; i <= Dlast; i++) {
        if (
          i == new Date().getDate() &&
          D.getFullYear() == new Date().getFullYear() &&
          D.getMonth() == new Date().getMonth()
        ) {
          calendar += "<div class='td today'>" + i + "</div>";
        } else {
          calendar += "<div class='td'>" + i + "</div>";
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
          calendar += "</div><div class='tr'>";
        }
      }

      for (var i = DNlast; i < 7; i++) calendar += "<div class='td'>&nbsp;";

      document.querySelector("#" + id + " .tbody").innerHTML =
        calendar + "</div>";

      document.querySelector(".calendarTitle .month").innerHTML =
        month[D.getMonth()];

      document.querySelector(".calendarTitle .year").innerHTML =
        D.getFullYear() + " г";

      document.querySelector(".calendarTitle .month").dataset.month =
        D.getMonth();

      document.querySelector(".calendarTitle .year").dataset.year =
        D.getFullYear();

      // переключение месяцев
      if ($(".listMount").length > 0) {
        $(".listMount li").eq(D.getMonth()).addClass("active");
        $(".listMount li").click(function () {
          $(".listMount li").removeClass("active");
          $(this).addClass("active");
          let current = $(this).index();
          Calendar(
            "calendar",
            document.querySelector(".calendarTitle .year").dataset.year,
            current
          );
        });
      }
    }

    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());

    // переключатель минус месяц
    document.querySelector(".calendarPrev").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".calendarTitle .month").dataset.month
        ) - 1
      );
    };

    // переключатель плюс месяц
    document.querySelector(".calendarNext").onclick = function () {
      $(".listMount li").removeClass("active");
      Calendar(
        "calendar",
        document.querySelector(".calendarTitle .year").dataset.year,
        parseFloat(
          document.querySelector(".calendarTitle .month").dataset.month
        ) + 1
      );
    };
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,
      awaitCloseAnimation: true,
      onShow: (e,target) => {
        $('html').addClass('modalOpen')
        $(".modal__container").scrollTop(0);
        $(".modalWrap .scroll").scrollTop(-500);
      },
      onClose: (e,target) => {
        $('html').removeClass('modalOpen')  
      },
    });

    $("[data-custom-open]").click(function (e) {
      e.preventDefault();
    });
  }

  if (location.hash != "" && $(".tabs").length) {

    let scroll = 0;
    let hash = window.location.hash;

    window.location.hash = "";
    history.pushState("", document.title, window.location.pathname);

    scroll = $(hash).parents(".tabs").offset().top - 300;
    $(hash).parents(".tabs").trigger("show", hash);

    if ($(".tabsHead ").length) {
      let pos = $(".tabsHead li.active").offset().left;
      $(".tabsHead").scrollLeft(pos + 80);
    }

    $("html, body").animate(
      {
        scrollTop: scroll,
      },
      300
    );
  }

  if (location.hash != "" && !$(".tabs").length) {

    let scroll = 0;
    let hash = window.location.hash;

    window.location.hash = "";
    history.pushState("", document.title, window.location.pathname);

    let minus = $(window).width() > 767 ? 200 : 0
    scroll = $(hash).offset().top - $('.header').height() - minus;

    $("html, body").animate(
      {
        scrollTop: scroll,
      },
      300
    );
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".waitingLoad").length) {
    $(window).scrollTop(0);

    let preloader = $(".preloader");
    let preloaderCheck = $(".preloaderCheck");
    let preloaderText = $(".preloader .text");
    let preloaderLogo = $(".preloaderLogo");

    preloaderCheck.mouseover(function () {
      preloaderText.addClass("hover");
    });

    preloaderCheck.mouseout(function () {
      preloaderText.removeClass("hover");
    });

    preloaderCheck.click(function () {
      $(this).addClass("active");
      preloaderCheck.off("mouseover");
      preloaderCheck.off("mouseout");
      preloader.addClass("animation");
      preloaderText.removeClass("hover");
      preloader.addClass("invisText");
      setTimeout(function () {
        // через 1.5 сек
        preloaderText.removeClass("hover");
        preloader.addClass("invisText");

        let logoPosLeft = $(".header .logoWrapper").offset().left;
        let logoPosTop = $(".header .logoWrapper").offset().top;

        function getBrowserId() {
          // определяем браузер: 1 - FireFox, 3- Chrome
          var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
            sUsrAg = navigator.userAgent,
            nIdx = aKeys.length - 1;

          for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

          return nIdx;
        }

        if ($(window).width() > 1200 && getBrowserId() == 1) {
          // если firefox
          logoPosLeft = logoPosLeft + logoPosLeft * 0.112;
          logoPosTop = logoPosTop + logoPosTop * 0.1;
        }

        preloaderLogo.addClass("position").css("left", logoPosLeft);
        preloaderLogo.addClass("position").css("top", logoPosTop);
      }, 2000);
      setTimeout(function () {
        // через 2 сек
        preloaderCheck.addClass("animation");
        preloader.addClass("finish");
      }, 3500);
      setTimeout(function () {
        // через 3 сек
        $(".siteWrapper")
          .addClass("preloaderLoad")
          .stop()
          .removeClass("loader");
        $("body").removeClass("waitingLoad");
        $("html").addClass("fixScroll");
        setInitAOS();
      }, 4500);
      setTimeout(function () {
        // через 4 сек
        preloader.remove();
      }, 6500);
    });
  } else {
    $("html").addClass("fixScroll");
    setInitAOS();
  }

  if ($(".phoneInput").length > 0) {
    $(".phoneInput").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {

      $(".header").addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }
  });

  if ($(".mapMobile").length) {
    let name = $(".mapMobile__head");

    name.click(function () {
      if ($(this).parents(".mapMobile__line").hasClass("active")) {
        $(".mapMobile__line").stop().removeClass("active");
        $(".mapMobile__body").stop().slideUp();
        return false;
      }

      $(".mapMobile__line").stop().removeClass("active");
      $(".mapMobile__body").stop().slideUp();

      $(this)
        .parents(".mapMobile__line")
        .stop()
        .toggleClass("active")
        .find(".mapMobile__body")
        .stop()
        .slideDown();
    });
  }
});

const setInitAOS = () => {
  if ($("[data-aos]").length) {
    if ($(window).width() <= 1200) {
      $("[data-aos]").each((i, el) => {
        $(el).attr("data-aos-offset", 0);
        AOS.init({
          duration: 1200,
          once: true,
        });
      });
    } else {
      $("[data-aos]").each((i, el) => {
        AOS.init({
          offset: -200,
          duration: 1200,
          once: true,
        });
      });
    }
  }
};
