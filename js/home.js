/**
 * Created by ehsan on 12/23/16.
 */

var div= document.createElement("div");


for(var i=0 ; i<5; i++) {  ////items in the main slider
    var item = document.createElement("div");
    item.className = "item";
    div=document.createElement("div");
    div.className = "itemblur";
    cont= document.createElement('div');
    cont.className="cont";

    var p =document.createElement("p");
    p.className = "itemTitle";
    p.innerHTML="بررسی فلان بازی";

    p1 =document.createElement("p");
    p1.className = "itemRate";
    p1.innerHTML="تعداد نظرات: ۷۳";

    var but = document.createElement("button");
    but.className="btn btn-default";

    var a = document.createElement("a");
    a.href="../html/register.html";
    a.innerHTML="صفحه بازی";

    but.appendChild(a);

    cont.appendChild(p);
    cont.appendChild(p1);
    cont.appendChild(but);
    cont.style.display="none";
    div.appendChild(cont);
    item.appendChild(div);


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
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        items : 5,
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

// ----------------------------ajax get request-------------------------------
    $.ajax({
        url: " http://api.ie.ce-it.ir/F95/home",
        dataType:'json',
        success: function( Object ) {
            var t= (Object)['response']['result']['homepage'];
            var slider=t['slider'];
            var newgame= t['newgame']
            console.log(slider);
        }

    });

// -------------------------------slider_hover----------------------------------
    $('#slider')
        .on('mouseover','.item', function(e) {
            var carousel = $('.owl-carousel').data('owl.carousel');
            e.preventDefault();
            $(this).css('height','110');
            $(this).find('div').addClass("hoverblur");
            $(this).find('.cont').css("display","block");
        })
        .on('mouseout','.item', function(e) {
            var carousel = $('.owl-carousel').data('owl.carousel');
            e.preventDefault();
            $(this).css('height','100');
            $(this).find('div').removeClass("hoverblur");
            $(this).find('.cont').css("display","none");
            console.log(carousel);
        })
        .on('click', '.item', function(e) {
            $('#slider .item div').removeClass('clickblur');
            // $('#slider .item').find('.cont').css("display","none");
            e.preventDefault();
            var bg = $(this).css('background-image');
            $(this).find('div').addClass("clickblur");
            // $(this).find('.cont').css("display","block");
            bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
            $("#firstViewPoint").css("height",$(window).height()-100)
                .css("background-image","url("+bg+")");
            console.log(bg);

        })
    ;


});



function focus (){

}