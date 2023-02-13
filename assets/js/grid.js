$(document).ready(function () {

    function removeAllSidebarToggleClass() {
        $('.toggle-off').removeClass('d-none');
        $(".toggle-off").removeClass('d-md-inline');
        $('.toggle-on').removeClass('d-inline');
        $(".toggle-on").removeClass('d-md-none');
    }

    $(".toggle-off").click(function () {
        setTimeout(function () {
            removeAllSidebarToggleClass()
            $(".toggle-off").addClass('d-none');
            $(".toggle-on").removeClass('d-none');
        }, 300)
        $(".side-bar").toggle(300)
        $('.main-body').animate({width: "100%"}, 300)
    })

    $(".toggle-on").click(function () {
        if (menuIsOpen) {
            $(".side-bar-container").css({top: "6rem"})
        } else {
            $(".side-bar-container").css({top: "3.5rem"})
        }
        setTimeout(function () {
            removeAllSidebarToggleClass()
            $(".toggle-off").removeClass('d-none');
            $(".toggle-on").addClass('d-none');
        }, 300)
        $(".side-bar").toggle(300)

    })

    let menuIsOpen = false;

    $(".toggle-menu").click(function () {
        if (!menuIsOpen) {
            $(".side-bar-container").css({top: "6rem"})
        } else {
            $(".side-bar-container").css({top: "3.5rem"})
        }
        menuIsOpen = !menuIsOpen;
        $(".body-header").fadeToggle(300)
    })

    $(".search-toggle").click(function () {
        $(".search-input").animate({width: "12rem"}, 500)
        $(".search-area").addClass('d-md-inline')
        $(".search-toggle").removeClass('d-md-inline')
    })

    $(".empty-search-input").click(function () {
        if (!$(".search-input").val()) {
            $(".search-input").animate({width: "0"}, 500)
            setTimeout(function () {
                $(".search-area").removeClass('d-md-inline')
                $(".search-toggle").addClass('d-md-inline')
            }, 500)
        }
        $(".search-input").val('')
    })

    let notificationIsOpen = false;
    let commentIsOpen = false;
    let profileIsOpen = false;
    $(".header-notification-toggle").click(function () {
        if (commentIsOpen || profileIsOpen) {
            $(".header-comment").fadeOut()
            $(".header-profile").fadeOut()
        }
        notificationIsOpen = true;
        $(".header-notification").fadeToggle()
    })

    $(".header-comment-toggle").click(function () {
        if (notificationIsOpen || profileIsOpen) {
            $(".header-notification").fadeOut()
            $(".header-profile").fadeOut()
        }
        commentIsOpen = true;
        $(".header-comment").fadeToggle()
    })

    $(".header-profile-toggle").click(function () {
        if (commentIsOpen || notificationIsOpen) {
            $(".header-comment").fadeOut()
            $(".header-notification").fadeOut()
        }
        profileIsOpen = true;
        $(".header-profile").fadeToggle()
    })

    let expand = document.querySelector(".expand");
    let compress = document.querySelector(".compress");
    let screen = document.documentElement;

    expand.addEventListener("click", openFullscreen)
    compress.addEventListener("click", closeFullscreen)

    function openFullscreen() {
        if (screen.requestFullscreen) {
            screen.requestFullscreen();
        } else if (screen.webkitRequestFullscreen) { /* Safari */
            screen.webkitRequestFullscreen();
        } else if (screen.msRequestFullscreen) { /* IE11 */
            screen.msRequestFullscreen();
        }
        $(".expand").addClass('d-none')
        $(".compress").removeClass('d-none')
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        $(".compress").addClass('d-none')
        $(".expand").removeClass('d-none')
    }

    let postsIsOpen = false;
    let usersIsOpen = false;
    let settingsIsOpen = false;

    $(".posts-toggle").click(function () {
        if (usersIsOpen === true || settingsIsOpen === true) {
            usersIsOpen = false;
            settingsIsOpen = false;
            $(".angel-2").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".angel-3").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".users").fadeOut(150).css({height: "0"});
            $(".settings").fadeOut(150).css({height: "0"});
        }
        postsIsOpen = true;
        $(".angel-1").toggleClass("fa-angle-left").toggleClass("fa-angle-down");
        $(".posts").fadeToggle(150).css({height: "auto"});

    })

    $(".users-toggle").click(function () {
        if (postsIsOpen === true || settingsIsOpen === true) {
            postsIsOpen = false;
            settingsIsOpen = false;
            $(".angel-1").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".angel-3").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".posts").fadeOut(150).css({height: "0"});
            $(".settings").fadeOut(150).css({height: "0"});
        }
        usersIsOpen = true;
        $(".angel-2").toggleClass("fa-angle-left").toggleClass("fa-angle-down");
        $(".users").fadeToggle(150).css({height: "auto"});
    })

    $(".settings-toggle").click(function () {
        if (usersIsOpen === true || postsIsOpen === true) {
            usersIsOpen = false;
            postsIsOpen = false;
            $(".angel-1").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".angel-2").addClass("fa-angle-left").removeClass("fa-angle-down");
            $(".posts").fadeOut(150).css({height: "0"});
            $(".users").fadeOut(150).css({height: "0"});
        }
        settingsIsOpen = true;
        $(".angel-3").toggleClass("fa-angle-left").toggleClass("fa-angle-down");
        $(".settings").fadeToggle(150).css({height: "auto"});
    })
})