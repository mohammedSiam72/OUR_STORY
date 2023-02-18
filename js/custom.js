$(function () {
    // ======================login===============================
    // ------------- hide pass or show in jquery-js

    let isChanged = false;
    $(".login-sec form .inputs .Password .pe i").click(function () {
        if (isChanged) {
            $(".login-sec form .inputs .Password .pe input").attr({
                type: "password",
                placeholder: "••••••••"
            }), $(".login-sec form .inputs .Password .pe i").attr({
                class: "fa fa-eye-slash"
            })
        }
        else {
            $(".login-sec form .inputs .Password .pe input").attr({
                type: "text",
                placeholder: "12345678"
            }), $(".login-sec form .inputs .Password .pe i").attr({
                class: "fa fa-eye"
            })
        }

        isChanged = !isChanged;

    })

    // ------------ clear email

    $(".login-sec form .inputs .Email .pe i").bind("click", function () {
        $(".login-sec form .inputs .Email .pe input[type=Email], textarea").val("");
    });


    // scroll navbar
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 190) {
            $("nav").addClass("fixedNav");
        } else {
            $("nav").removeClass("fixedNav");
        }
    })

    // plgin slider
    $(".mostWatched-NewArrival  .owl-carousel").owlCarousel({
        items: 4,
        margin: 40,
        loop: true,
        center: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1400,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1100: {

            }
        }
    });




    $(".ExclusiveVideos_sec .all .owl-carousel").owlCarousel({
        items: 3,
        margin: 80,
        loop: true,
        center: true,
        nav: true,

        responsive: {
            0: {
                items: 1,
                center: false,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1100: {

            }
        }
    });


    // ===============================
    // loding
    $(window).on("load", function () {
        $(".sk-folding-cube").fadeOut(1500, function () {
            $(".loding").fadeOut(1508)
        })
    })





    // siblings
    // $(".main-header nav ul li").click(function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    // })

})



// market view---------------------------------------
$("#r2").on("click", function () {
    $("#cont2").fadeIn(100)
    $("#cont1").fadeOut()
    $("#cont3").fadeOut()
    $(".border .sp1").animate({
        width: "13%"
    }, 500)

    $(".border .sp2").animate({
        width: "87%"
    }, 500)
})

$("#r1").on("click", function () {
    $("#cont2").fadeOut()
    $("#cont1").fadeIn(100)
    $("#cont3").fadeOut()
    $(".border .sp1").animate({
        width: "50%"
    }, 500)

    $(".border .sp2").animate({
        width: "50%"
    }, 500)
})

$("#r3").on("click", function () {
    $("#cont2").fadeOut()
    $("#cont1").fadeOut()
    $("#cont3").fadeIn(100)
    $(".border .sp1").animate({
        width: "87%"
    }, 500)

    $(".border .sp2").animate({
        width: "13%"
    }, 500)
})

$(".packages_sec .title h2").click(function () {
    $(this).addClass("act").siblings().removeClass("act");
})


// navbarlist------------------------------------------
const toggleButton = document.getElementsByClassName('barsList')[0]
const navList = document.getElementsByClassName('navList')[0]
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active')
})

const toggleButtonListInside = document.getElementsByClassName('insideList')[0]
const navListInside = document.getElementsByClassName('list_inside')[0]
toggleButtonListInside.addEventListener('click', () => {
    navListInside.classList.toggle('active2')
})

// ------------------------dark-mode js jquery
// .............cod dark simple

$("#dark-mode-toggle").click(function () {
    $("body").toggleClass("dark-Mod")
})





let isChanged = false;
$("#dark-mode-toggle").click(function () {
    if (isChanged) {
        $("#dark-mode-toggle #s").css('color', '')
        $("#dark-mode-toggle").css('background', '')
        $("#dark-mode-toggle #s").css('left', '')

        $("#dark-mode-toggle i").attr({
            class: "fa fa-moon-o"
        })
    }
    else {
        $("#dark-mode-toggle #s").css('color', '#ffff24')
        $("#dark-mode-toggle").css('background', '#000')
        $("#dark-mode-toggle #s").css('left', '19px')

        $("#dark-mode-toggle i").attr({
            class: "fa fa-sun-o"
        })
    }

    isChanged = !isChanged;

})









// screen  small Bars and close
// if ('screen and (max-width:1000px)') {
//     $(".barsList").click(function () {
//         $(".main-header nav ul").animate({
//             width: "65%",
//             left: "0"
//         }, 100)

//         $(".barsClose").fadeIn()
//     })

//     $(".barsClose").click(function () {
//         $(".main-header nav ul").animate({
//             width: "0",
//             left: "-100%"
//         }, 100)
//     })

//     $(".li #sl").click(function () {
//         $(".li .ulHide").slideDown()
//     })

//     $(".li ul i").click(function () {
//         $(".li .ulHide").slideUp()
//     })
// }
// else {

// }






// show form Search
$(".btnSearch").click(function () {
    $(".boxSearch").fadeIn()
})

$(".close").click(function () {
    $(".boxSearch").fadeOut()
})

$(".btnClose").click(function () {
    $(".boxSearch").fadeOut()
})

// ----------------------------- open log Out and porfile personal 
$(".login_search img").on("click", function () {
    $(".Account-Information").slideToggle()
})

$(".login_search h3").on("click", function () {
    $(".Account-Information").slideToggle()
})

$("#closeAccountDiv").on("click", function () {
    $(".Account-Information").slideUp()
})

// ---------------------Arrival--------------------------------------------------------
// button_a1
const button_a1 = document.getElementById('btn1-A');
const bs_a1 = document.getElementById('bt1');

let isChanged_a1 = false;
button_a1.addEventListener('click', () => {
    if (isChanged_a1) {
        bs_a1.style.color = '';
        bs_a1.style.fontSize = '';

    } else {
        bs_a1.style.color = '#ff2b44';
        bs_a1.style.fontSize = '18px';

    }
    isChanged_a1 = !isChanged_a1;
});


// --------------cod js change button Favorite
// -----------mostWatched

// button1
const button_m1 = document.getElementById('btn1-m');
const bs_m1 = document.getElementById('b1');

let isChanged_m1 = false;
button_m1.addEventListener('click', () => {
    if (isChanged_m1) {
        bs_m1.style.color = '';
        bs_m1.style.fontSize = '';

    } else {
        bs_m1.style.color = '#ff2b44';
        bs_m1.style.fontSize = '18px';

    }
    isChanged_m1 = !isChanged_m1;
});













