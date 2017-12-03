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

// search in the index

function mySearchIndex() {
    // Declare variables
    var input, filter, ul, li, a, e;
    input = document.getElementById('indexInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULIndex");
    li = ul.getElementsByTagName('li');

    document.getElementById("myULIndex").style.display = "block";
    document.getElementById("myULCityIndex").style.display = "none";

    $('#indexInput').removeAttr('placeholder');


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

// search in the index - two

function mySearchIndexTwo() {
    // Declare variables
    var input, filter, ul, li, a, e;
    input = document.getElementById('indexInputTwo');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULCityIndex");
    li = ul.getElementsByTagName('li');

    document.getElementById("myULCityIndex").style.display = "block";
    document.getElementById("myULIndex").style.display = "none";

    $('#indexInputTwo').removeAttr('placeholder');


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

function cleanFieldsIndex() {

    document.getElementById("myULCityIndex").style.display = "none";
    document.getElementById("myULIndex").style.display = "none";

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

$(".click-chevronAwards").click(function(){
    document.getElementById("cambiameAwards2").style.display = "none";
    document.getElementById("cambiameAwards").style.display = "block";
});

$(".click-chevronAwards2").click(function(){
    document.getElementById("cambiameAwards2").style.display = "block";
    document.getElementById("cambiameAwards").style.display = "none";
});

// Collapse Expand - arrow behaviour

$(".clickArrow").click(function(){
  $(".clickArrow").css('display', 'none');
  $(".clickArrowZwei").css('display', 'block');
});

$(".clickArrowZwei").click(function(){
  $(".clickArrowZwei").css('display', 'none');
  $(".clickArrow").css('display', 'block');
});

$(".clickArrowDrei").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowVier").css('display', 'block');
});

$(".clickArrowVier").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowDrei").css('display', 'block');
});

$(".clickArrowFuenf").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowSechs").css('display', 'block');
});

$(".clickArrowSechs").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowFuenf").css('display', 'block');
});

//

$(".clickArrowSieben").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowAcht").css('display', 'block');
});

$(".clickArrowAcht").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowSieben").css('display', 'block');
});

$(".clickArrowNeun").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowZehn").css('display', 'block');
});

$(".clickArrowZehn").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowNeun").css('display', 'block');
});

//

$(".clickArrowElf").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowZwolf").css('display', 'block');
});

$(".clickArrowZwolf").click(function(){
  $(this).css('display', 'none');
  $(".clickArrowElf").css('display', 'block');
});

//

$(".clickArrow13").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow14").css('display', 'block');
});

$(".clickArrow14").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow13").css('display', 'block');
});

//

$(".clickArrow15").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow16").css('display', 'block');
});

$(".clickArrow16").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow15").css('display', 'block');
});

//

$(".clickArrow17").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow18").css('display', 'block');
});

$(".clickArrow18").click(function(){
  $(this).css('display', 'none');
  $(".clickArrow17").css('display', 'block');
});





// delete favourites

$(".delete-me").click(function(){
  // $(".favy").empty();
  $(this).prev().empty();
  $(this).empty();
  //
});

// create new VOTE field

/*
$(".votes").click(function(){
    // feedback-social
    $("#f-social").append("Appended text<br>");
});
*/

// ToolTip

$(document).ready(function() {
  $('.tooltip2').tooltipster();
});

// grey button save-continue

$(".save-continue").click(function(){
  $(this).css('background', '#eee');
  // disable the button
  // $(this).attr('disabled', true);

});

// vanish save-continue

$(".save-continue2").click(function(){
  $(this).css('background', '#eee');
  // disable the button
  // $('#myModal').css('display', 'none');
});

// close vendor-signup 1

/*
$(".close-1").click(function(){
  $(".section-1").fadeOut(500);
});

$(".close-2").click(function(){
  $(".section-2").fadeOut(500);
});

$(".close-3").click(function(){
  $(".section-3").fadeOut(500);
});

$(".close-4").click(function(){
  $(".section-4").fadeOut(500);
});

$(".close-5").click(function(){
  $(".section-5").fadeOut(500);
});

$(".close-5").click(function(){
  $('.open-6').css('display', 'block');
  $('#myModal').css('display', 'none');
});
*/

// open VIEW-PROFILE ON SS-VENDOR

$(".view-profile-ss").click(function(){
  $(".opacity-view-profile").fadeIn(500);
  $(".opacity-view-profile").css('display', 'block');
  $(".view-profile-ss2").css('display', 'block');
});

$(".view-profile-ss2").click(function(){
  $(".opacity-view-profile").css('display', 'none');
  $(".view-profile-ss2").css('display', 'none');
  $(".view-profile-ss").css('display', 'block');
});

$(".view-profile-ss3").click(function(){
  $(".opacity-view-profile1").fadeIn(500);
  $(".opacity-view-profile1").css('display', 'block');
  $(".view-profile-ss4").css('display', 'block');
});

$(".view-profile-ss4").click(function(){
  $(".opacity-view-profile1").css('display', 'none');
  $(".view-profile-ss4").css('display', 'none');
  $(".view-profile-ss3").css('display', 'block');
});

// ADD TO FAVOURITES

$(".fav-ss").click(function(){
  $(".fav-ss2").css('display', 'block');
  $(".fav-ss").css('display', 'none');
  $("button.add-favourites2").fadeIn(500);
  $("button.add-favourites2").css('display', 'block');
  $("button.add-favourites1").css('display', 'none');
});

$(".fav-ss2").click(function(){
  $(".fav-ss").css('display', 'block');
  $(".fav-ss2").css('display', 'none');
  $("button.add-favourites1").fadeIn(500);
  $("button.add-favourites1").css('display', 'block');
  $("button.add-favourites2").css('display', 'none');
});

// add-favourites

$("button.add-favourites1").click(function(){
  $(".fav-ss2").fadeIn(500);
  $(".fav-ss2").css('display', 'block');
  $(".fav-ss").css('display', 'none');
  $("button.add-favourites2").fadeIn(500);
  $("button.add-favourites2").css('display', 'block');
  $("button.add-favourites1").css('display', 'none');
});

$("button.add-favourites2").click(function(){
  $(".fav-ss").fadeIn(500);
  $(".fav-ss").css('display', 'block');
  $(".fav-ss2").css('display', 'none');
  $("button.add-favourites1").fadeIn(500);
  $("button.add-favourites1").css('display', 'block');
  $("button.add-favourites2").css('display', 'none');
});

// add compare

$("#add-compare1").click(function(){
  $(".added-compared1").fadeIn(500);
  $('.added-compared1').css('visibility', 'visible');
  $('#added-compared-circle1.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-check');
});

$("#add-compare2").click(function(){
  $(".added-compared2").fadeIn(500);
  $('.added-compared2').css('visibility', 'visible');
  $('#added-compared-circle2.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-check');
});

$("#add-compare3").click(function(){
  $(".added-compared3").fadeIn(500);
  $('.added-compared3').css('visibility', 'visible');
  $('#added-compared-circle3.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-check');
});

$("#add-compare4").click(function(){
  $(".added-compared4").fadeIn(500);
  $('.added-compared4').css('visibility', 'visible');
  $('#added-compared-circle4.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-check');
});

$("#add-compare5").click(function(){
  $(".added-compared5").fadeIn(500);
  $('.added-compared5').css('visibility', 'visible');
  $('#added-compared-circle5.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-check');
});

// remove add-compare

$(".remove-add-compare1").click(function(){
  $(".added-compared1").css('visibility', 'hidden');
  $('#added-compared-circle1.fa-check').removeClass('fa-check').addClass('fa-plus-circle');
});

$(".remove-add-compare2").click(function(){
  $(".added-compared2").css('visibility', 'hidden');
  $('#added-compared-circle2.fa-check').removeClass('fa-check').addClass('fa-plus-circle');
});

$(".remove-add-compare3").click(function(){
  $(".added-compared3").css('visibility', 'hidden');
  $('#added-compared-circle3.fa-check').removeClass('fa-check').addClass('fa-plus-circle');
});

$(".remove-add-compare4").click(function(){
  $(".added-compared4").css('visibility', 'hidden');
  $('#added-compared-circle4.fa-check').removeClass('fa-check').addClass('fa-plus-circle');
});

$(".remove-add-compare5").click(function(){
  $(".added-compared5").css('visibility', 'hidden');
  $('#added-compared-circle5.fa-check').removeClass('fa-check').addClass('fa-plus-circle');
});
