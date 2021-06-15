// main category sub category

$(document).on("click", ".show-sub-category", function() {
    $(".list-of-sub").hide();
    $(this).find(".list-of-sub").toggle("slow");

});


// carousel script

var slideIndex = 0;


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel-items");

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 5000); // 5 sec
}
// search function

$(document).on("click", ".search", function() {
    $(".search-area").toggle("slow");
});

// category menu dropdown

$(document).on("click", ".menu-line", function() {
    var sw = $(".main-category").css("left");
    if (sw == "-2000px") {
        $(".main-category").css("left", "0%");
    } else {
        $(".main-category").css("left", "-2000px");
    }
});



// function for closing dropdown and search when clicking the another part of the screen

$(document).mouseup(function(e) {
    // search
    var container = $(".search-area");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide("slowly");
    }

    // menu
    var a = document.querySelectorAll(".show-sub-category > a");
    if ($(window).width() < 769) {
        var container = $(".main-category");
        if (!container.is(e.target) && container.has(e.target).length === 0 && container.css("left") != "-2000px") {
            container.css("left", "-2000px");
        }
        for (var i = 0; i < a.length; i++) {
            a[i].style.fontSize = "16px";
        }
    } else {
        for (var i = 0; i < a.length; i++) {
            a[i].style.fontSize = "20px";
        }
    }

    // sub category
    var container = $(".list-of-sub");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide("slowly");


    }
});