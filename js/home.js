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

    $(".item").each(function(i, obj) {
        $(obj).css("height",100)
            .css("background-image","url('../images/421645.jpg')");
    });

    $("#newGamesSlider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        pagination:false

    });

    // $(".item").html()

    // $.getJSON( "‫‪api.ie.ce-it.ir/F95/home‬‬", function( data ) {
    //     var items = [];
    //     $.each( data, function( key, val ) {
    //         items.push( "<li id='" + key + "'>" + val + "</li>" );
    //     });
    //
    //     $( "<ul/>", {
    //         "class": "my-new-list",
    //         html: items.join( "" )
    //     }).appendTo( "body" );
    // });

});

// $('.item')
//     .on('mouseover', function(e) {
//         e.preventDefault();
//         $(this).hover(function () {
//             $(this).css("background-color","yellow");
//         });
//         console.log($(this).index());
//     })
//

$('#slider')
    .on('mouseover', function(e) {
        var carousel = $('.owl-carousel').data('owl.carousel');
        e.preventDefault();
        $(this).hover(function () {
            $(this).css("background-color","yellow");
        });
        console.log(carousel);
    })
    // .on('mouseout', '.owl-item', function(e) {
    //     var carousel = $('.owl-carousel').data('owl.carousel');
    //     e.preventDefault();
    //     $(this).hover(function () {
    //         $(this).css("background-color","");
    //     });
    //     console.log($(this).index());
    // })
    .on('click', '.item', function(e) {
        var carousel = $('.owl-carousel').data('owl.carousel');
        e.preventDefault();
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#firstViewPoint").css("height",$(window).height()-100)
            .css("background-image","url("+bg+")");
        console.log(bg);

    })
;


