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

  if ($(".menuArrow").length > 0) {
    let menuArrow = $(".menuArrow");

    menuArrow.click(function (e) {
      e.preventDefault();
      $(this).toggleClass("open");
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
    });
  }

  if ($(".tabsInformation").length > 0) {
    $(".tabsInformation").tabslet({
      mouseevent: "click",
      attribute: "href",
    });
  }

  if ($(".whyBlock").length > 0) {
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
      var et = $(".whyBlock").offset().top;
      var eh = $(".whyBlock").outerHeight();

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
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     slidesPerGroup: 1,
      //     spaceBetween: 20,
      //     pagination: {
      //       el: ".yourPools .dots",
      //       clickable: true,
      //       renderBullet: null,
      //     },
      //   },
      // },
    });
  }

  // --------------------------------------

  if ($(".siteWrapper").length > 0) {
    $(".siteWrapper .menuBurger").on("click", function () {
      $(this).toggleClass("open").siblings(".menu").stop().slideToggle(500);
    });
  }

  if ($("select").length > 0) {
    $("select").selectric({
      onInit: function () {
        // $(".selectric .button").addClass("btnSelectric");
      },
    });
  }

  if ($(".dropBlock").length > 0) {
    $(".dropBlock .dropTitle").click(function () {
      $(".dropBlock .dropTitle").not($(this)).removeClass("open");
      $(".dropBlock .drop").not($(this).next()).stop().slideUp();
      $(this).toggleClass("open").next().stop().slideToggle();
    });
  }

  if ($(".cabinetHead").length > 0) {
    let cabinetContent = $(".cabinetContent");
    let payments = $(".cabinetHead .paymentBalance .title");
    let userControl = $(".cabinetHead .userControls");
    let rightBlock = $(".cabinetRight");

    payments.click(function () {
      $(".listPaymentBalance").stop().slideToggle();
      $(this).stop().toggleClass("open");
    });

    userControl.click(function () {
      cabinetContent.stop().toggleClass("opened");
      rightBlock.stop().toggleClass("open");
      $(this).stop().toggleClass("open");
      $(document).mouseup(function (e) {
        if (
          !userControl.is(e.target) &&
          !rightBlock.is(e.target) &&
          rightBlock.has(e.target).length === 0
        ) {
          cabinetContent.stop().removeClass("opened");
          rightBlock.stop().removeClass("open");
          userControl.stop().removeClass("open");
          $(document).off("mouseup");
        }
      });
    });
  }

  if ($(".copyLink").length > 0) {
    var clipboard = new ClipboardJS(".copyLink");

    let messageShow = function (e) {
      let message = e.siblings(".copyMessage");
      message.stop().fadeIn(200);

      setTimeout(function () {
        message.stop().fadeOut(200);
      }, 2000);
    };

    $(".copyLink").map(function () {
      $(this).on("click", function (e) {
        e.preventDefault();

        if ($(this).attr("data-clipboard-text") !== undefined) {
          messageShow($(this));
        }

        if ($(this).attr("data-clipboard-target") !== undefined) {
          messageShow($(this));
        }
      });
    });
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
});

$(window).resize(function () {});
