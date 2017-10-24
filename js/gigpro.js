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
