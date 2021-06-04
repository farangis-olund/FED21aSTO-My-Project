// main category sub category

$(document).on("click", ".show-sub-category", function() {
    var sub = $(this).find(".list-of-sub").clone();
    sub.removeClass("dn");
    $(".sub-category").html(sub[0].outerHTML);
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

    setTimeout(showSlides, 3000); // 5 sec
}