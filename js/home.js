/**
 * Created by ehsan on 12/23/16.
 */

$(document).ready(function() {
    $("#slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        pagination:false

        });



    $("#firstViewPoint").css("height",$(window).height()-100)
                        .css("background-image","url('../images/call-of-duty-background-18.jpg')");
});

