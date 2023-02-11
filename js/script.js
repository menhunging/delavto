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
    $(".tabs").tabslet();
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

  if ($(".sliderPools").length > 0) {
    const swiper = new Swiper(".sliderPools", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          pagination: {
            el: ".yourPools .dots",
            clickable: true,
            renderBullet: null,
          },
        },
        640: {
          slidesPerView: 1,
          slidesPerGroup: 2,
          spaceBetween: 20,
          pagination: {
            el: ".yourPools .dots",
            clickable: true,
            renderBullet: null,
          },
        },
        750: {
          slidesPerView: 2,
          slidesPerGroup: 3,
          spaceBetween: 20,
          pagination: {
            el: ".yourPools .dots",
            clickable: true,
            renderBullet: null,
          },
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
        },
        1800: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
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
