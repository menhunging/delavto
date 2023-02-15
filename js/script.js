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
    });

    menuClose.click(function (e) {
      e.preventDefault();
      menuArrow.toggleClass("open");
      menuDrop.toggleClass("open").stop().slideToggle();
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

  if ($(".tabsInformation").length > 0) {
    $(".tabsInformation").tabslet({
      mouseevent: "click",
      attribute: "href",
    });
  }

  if ($(".whyList").length > 0) {
    let scrollOff = false;
    var block_show = null;
    let animationAll = $(".animation");
    let lastDeferr = 0;
    if ($(window).width() > 768) {
      scrollTracking();
    }

    function scrollTracking() {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(".whyList").offset().top;
      var eh = $(".whyList").outerHeight();

      if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
        if (block_show == null || (block_show == false && !scrollOff)) {
          let promise = new $.Deferred(),
            fn = () => {
              animationAll.map(function (index, item) {
                setTimeout(() => {
                  $(this).addClass("active");
                }, 700 * index);
              });
              return promise;
            };
          lastDeferr ? lastDeferr.then(fn) : fn();
          //запоминаем последнее звено цепочки обещаний
          lastDeferr = promise;
        }
        block_show = true;
      } else {
        block_show = false;
      }
    }

    $(window).scroll(function () {
      if ($(window).width() > 768) {
        scrollTracking();
      }
    });
  }

  if ($(".youPartnerSlider").length > 0) {
    const swiper = new Swiper(".youPartnerSlider", {
      slidesPerView: 4,
      slidesPerGroup: 4,
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
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
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
      slidesPerGroup: 3,
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
          slidesPerGroup: 2,
        },
        1500: {
          slidesPerView: 3,
          slidesPerGroup: 3,
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

  if ($("select").length > 0) {
    $("select").selectric();
  }

  if ($(".calendar").length > 0) {
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

      // if (document.querySelectorAll("#" + id + " .tbody .tr").length < 6) {
      //   // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      //   document.querySelector(
      //     "#" + id + " .tbody"
      //   ).innerHTML += `<div class='tr'>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     <div class='td'>&nbsp;</div>
      //     </div>`;
      // }

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
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if (location.hash != "" && $(".tabs").length) {
    let scroll = 0;
    let hash = window.location.hash;

    window.location.hash = "";
    history.pushState("", document.title, window.location.pathname);

    scroll = $(hash).parents(".tabs").offset().top - 100;
    $(hash).parents(".tabs").trigger("show", hash);

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
        // через 1 сек
        preloaderText.removeClass("hover");
        preloader.addClass("invisText");

        let logoPosLeft = $(".header .logoWrapper").offset().left;
        let logoPosTop = $(".header .logoWrapper").offset().top;

        preloaderLogo.addClass("position").css("left", logoPosLeft);
        preloaderLogo.addClass("position").css("top", logoPosTop);
      }, 500);
      setTimeout(function () {
        // через 2 сек
        preloaderCheck.addClass("animation");
      }, 1500);
      setTimeout(function () {
        // через 3 сек
        $(".siteWrapper")
          .addClass("preloaderLoad")
          .stop()
          .removeClass("loader");
        $("body").removeClass("waitingLoad");
        setInitAOS();
      }, 3000);
      setTimeout(function () {
        // через 4 сек
        preloader.remove();
      }, 4000);
    });
  } else {
    setInitAOS();
  }
});

const setInitAOS = () => {
  if ($("[data-aos]").length) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 0,
        duration: 2000,
      });
    });
  }
};

// $(window).resize(function () {});
