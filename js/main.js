// main category sub category

$(document).on("click", ".show-sub-category", function() {
    $(".list-of-sub").hide();
    $(this).find(".list-of-sub").toggle("slow");

});


// carousel script

var slideIndex = 0;
showSlides();

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