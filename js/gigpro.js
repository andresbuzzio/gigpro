// we initialise the owlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


// collapsable items

$(".expand-booked-text").click(function () {

    $content = $(".accordion-booked");

    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        /* $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        }); */
    });

});

$(".expand-booked-text2").click(function () {

    $content2 = $(".accordion-booked2");

    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content2.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        /* $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        }); */
    });

});

$(".expand-booked-text3").click(function () {

    $content2 = $(".accordion-booked3");

    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content2.slideToggle(500, function () {
    });

});

$(".expand-booked-text4").click(function () {

    $content2 = $(".accordion-booked4");

    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content2.slideToggle(500, function () {
    });

});

$(".header2").click(function () {

    $header2 = $(this);
    //getting the next element
    $content2 = $("#accordion2");
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content2.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        /* $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        }); */
    });

});

$(".expand-add-event").click(function () {

    $header = $(this);
    //getting the next element
    $content = $(".expand-me");
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        /* $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        }); */
    });

});

// search dropdown

function mySearch() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    document.getElementById("myUL").style.display = "block";

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// search dropdown by City

function mySearchCity() {
    // Declare variables
    var input, filter, ul, li, a, e;
    input = document.getElementById('myCityInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULCity");
    li = ul.getElementsByTagName('li');

    document.getElementById("myULCity").style.display = "block";

    // Loop through all list items, and hide those who don't match the search query
    for (e = 0; e < li.length; e++) {
        a = li[e].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[e].style.display = "";
        } else {
            li[e].style.display = "none";
        }
    }
}

function cleanFields() {

    document.getElementById("myULCity").style.display = "none";
    document.getElementById("myUL").style.display = "none";

}

// change the arrow in event-services

$(".click-chevron").click(function(){
    document.getElementById("cambiameUno").style.display = "none";
    document.getElementById("cambiameDos").style.display = "block";
});

$(".click-chevron-two").click(function(){
    document.getElementById("cambiameUno").style.display = "block";
    document.getElementById("cambiameDos").style.display = "none";
});

$(".click-chevron-three").click(function(){
    document.getElementById("cambiameUno-Tres").style.display = "none";
    document.getElementById("cambiameTres").style.display = "block";
});

$(".click-chevron-four").click(function(){
    document.getElementById("cambiameUno-Tres").style.display = "block";
    document.getElementById("cambiameTres").style.display = "none";
});

$(".click-chevron-cuatro").click(function(){
    document.getElementById("cambiameCuatro").style.display = "none";
    document.getElementById("cambiameCinco").style.display = "block";
});

$(".click-chevron-cinco").click(function(){
    document.getElementById("cambiameCuatro").style.display = "block";
    document.getElementById("cambiameCinco").style.display = "none";
});
