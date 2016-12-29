/**
 * Created by ehsan on 12/23/16.
 */


for(var i=0 ; i<5; i++) {  ////items in the main slider
    var item = document.createElement("div");
    item.className = "item";
    var div=document.createElement("div");
    div.className = "itemblur";
    item.appendChild(div);
    var p =document.createElement("p");
    p.className = "itemTitle";
    p.innerHTML="بررسی فلان بازی";
    item.appendChild(p);
    document.getElementById("slider").appendChild(item);
}


for(i=0 ; i<8; i++) {  ////items in the newGame slider
    item = document.createElement("div");
    item.className = "newGamesItem";
    sp= document.createElement("span");
    sp.className="image";
    img = document.createElement("img");
    img.src="../images/ogImage.img.jpg";
    sp.appendChild(img);

    var inf= document.createElement("div");
    inf.className="Info";
    var nam=document.createElement("div");
    nam.className="name";
    nam.innerHTML="FIFA 2016";

    var categury=document.createElement("div");
    categury.className="categury";
    categury.innerHTML="ورزشی";
    var Rate = document.createElement("div");
    Rate.className="buttomRate";
    for(var j=0; j<5;j++){
        var star= document.createElement("i");
        star.className="fa fa-star";
        if(j<3)
            star.className +=" blue-star";

        Rate.appendChild(star);
    }
    inf.appendChild(nam);
    inf.appendChild(categury);
    inf.appendChild(Rate);
    item.appendChild(sp);
    item.appendChild(inf);
    document.getElementById("newGamesSlider").appendChild(item);
}



for(i=0 ; i< 5; i++){
    var comment=document.createElement("div");
    comment.className="comment";
    sp= document.createElement("span");
    sp.className="imageSpan";
    img = document.createElement("img");
    img.src="../assets/user.png";
    sp.appendChild(img);
    var commentText= document.createElement("div");
    commentText.className="commentText";
    div = document.createElement("div");
    div.innerHTML="بهترین بازی تمام عمرم";
    var date = document.createElement("div");
    date.className="date";
    date.innerHTML="دوشنبه ۱۱ آبان ۹۵";
    commentText.appendChild(div);
    commentText.appendChild(date);
    comment.appendChild(sp);
    comment.appendChild(commentText);
    document.getElementById("commentsAndChats").appendChild(comment);
}


for(i=0 ; i< 5; i++){
    comment=document.createElement("div");
    comment.className="comment";
    sp= document.createElement("span");
    sp.className="imageSpan";
    img = document.createElement("img");
    img.src="../images/421645.jpg";
    sp.appendChild(img);
    commentText= document.createElement("div");
    commentText.className="commentText";
    div = document.createElement("div");
    div.innerHTML="راهنمای بازی ۱";
    var date = document.createElement("div");
    date.className="date";
    date.innerHTML="دوشنبه ۱۱ آبان ۹۵";
    commentText.appendChild(div);
    commentText.appendChild(date);
    comment.appendChild(sp);
    comment.appendChild(commentText);
    document.getElementById("gameGuids").appendChild(comment);
}


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
        pagination:true

    });
    $(".owl-controls").appendTo($("#pagination"));
});

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


