/**
 * Created by ehsan on 12/28/16.
 */

// ----------------------------------------header--------------------------------
var Info=document.createElement("div");
Info.className="Info";
var nam=document.createElement("div");
nam.className="name";
nam.innerHTML="Batterfiled 4: Dragon's Theeth";
var categury=document.createElement("div");
for(i=0;i<3;i++){
    var sp = document.createElement("span");
    sp.innerHTML="اکشن،";
    categury.appendChild(sp);
}
var gamerate= document.createElement("div");
gamerate.className="gamerate";
var rate=document.createElement("div");
rate.className="buttomRate";
for(var j=0; j<5;j++){
    var star= document.createElement("i");
    star.className="fa fa-star";
    if(j<3)
        star.className +=" blue-star";
    rate.appendChild(star);
}
var score= document.createElement("div");
score.className="score";
score.innerHTML=" ۴.۳(۸۴رای)";
gamerate.appendChild(rate);
gamerate.appendChild(score);
sp= document.createElement("span");
sp.className="imageSpan";
img = document.createElement("img");
img.src="../images/call-of-duty-background-17.jpg";
sp.appendChild(img);
Info.appendChild(nam);
Info.appendChild(categury);
Info.appendChild(gamerate);
document.getElementById("container").appendChild(Info);
document.getElementById("container").appendChild(sp);

// -----------------------------اطلاعات بازی---------------------------------------------

var p = document.createElement("p");
p.innerHTML="این اطلاعات اطلاعات خوبی است";
var im = document.createElement("div");
im.className="image";
var img= document.createElement("img");
img.src="../images/assassins-creed-3-wallpaper-3.jpg";
im.appendChild(img);
var p2 = document.createElement("p");
p2.innerHTML="این اطلاعات اطلاعات خوبی است";
document.getElementById("gameInfo").appendChild(p);
document.getElementById("gameInfo").appendChild(im);
document.getElementById("gameInfo").appendChild(p2);

// ------------------------------------------رتبه بندی------------------------------------------


for (i = 0 ;i <5 ;i++){


    person=document.createElement("div");
    person.className="person";
    a= document.createElement("a");
    s1=document.createElement("span");
    s1.className="s1";
    s1.innerHTML=i;
    s2=document.createElement("span");
    s2.className="s2";
    if(i<3){
        medal = document.createElement("i");
        medal.className="fa fa-star";
        if(i==0) medal.className+=" golden_circle-icon";
        else if(i==1) medal.className+=" silver_circle-icon";
        else if(i==2) medal.className+=" bronze_circle-icon";
        s2.appendChild(medal);

    }
    s3=document.createElement("span");
    s3.className="s3";

    sp= document.createElement("span");
    sp.className="imageSpan";
    img = document.createElement("img");
    img.src="../assets/user.png";
    sp.appendChild(img);
    s3.appendChild(sp)

    s4=document.createElement("span");
    s4.className="s4";
    s4.innerHTML="کاظم اسماعیلی"
    s5=document.createElement("span");
    s5.className="s5";
    s5.innerHTML="32";
    s6=document.createElement("span");
    s6.className="s6";
    s6.innerHTML="(+107)"
    arr = document.createElement("i");
    arr.className="fa fa-caret-up";
    s6.prepend(arr);
    s7=document.createElement("span");
    s7.className="s7";
    s7.innerHTML="150000000";
    a.appendChild(s1);
    a.appendChild(s2);
    a.appendChild(s3);
    a.appendChild(s4);
    a.appendChild(s5);
    a.appendChild(s6);
    a.appendChild(s7);
    person.appendChild(a);
    document.getElementsByClassName("people")[0].appendChild(person);
}


// -------------------------------------------نظرات کاربران----------------------------------

for(i=0 ; i< 5; i++){
    comment=document.createElement("div");
    comment.className="comment";
    sp= document.createElement("span");
    sp.className="imageSpan";
    img = document.createElement("img");
    img.src="../assets/user.png";
    sp.appendChild(img);
    var info= document.createElement("div");
    info.className="info";
    var date = document.createElement("div");
    date.className="date";
    date.innerHTML="۲۲ آذر ۹۵";
    nam= document.createElement("div");
    nam.className="name";
    nam.innerHTML="ali:";
    var message = document.createElement("div");
    message.className="message";
    message.innerHTML="راهنمای بازی ۱";
    info.appendChild(date);
    info.appendChild(nam);
    info.appendChild(message);
    if(i % 2 == 0){
        rate=document.createElement("div");
        rate.className="rate";
        for(var j=0; j<5;j++){
            star= document.createElement("i");
            star.className="fa fa-star";
            if(j<3)
                star.className +=" gray-star";
            rate.appendChild(star);
        }
        info.appendChild(rate);
    }
    comment.appendChild(sp);
    comment.appendChild(info);
    document.getElementById("comments").appendChild(comment);
}

// ---------------------------------------بازی های مشابه-----------------------------------------------

for(i=0 ; i<8; i++) {  ////items in the newGame slider
    item = document.createElement("div");
    item.className = "newGamesItem";
    img= document.createElement("img");
    img.style.height="100px";
    img.src=("../images/ogImage.img.jpg");
    var inf= document.createElement("div");
    inf.className="Info";
    nam=document.createElement("div");
    nam.className="name";
    nam.innerHTML="FIFA 2016";

    categury=document.createElement("div");
    categury.className="categury";
    categury.innerHTML="ورزشی";
    var Rate = document.createElement("div");
    Rate.className="buttomRate";
    for(j=0; j<5;j++){
        star= document.createElement("i");
        star.className="fa fa-star";
        if(j<3)
            star.className +=" blue-star";
        Rate.appendChild(star);
    }
    inf.appendChild(nam);
    inf.appendChild(categury);
    inf.appendChild(Rate);
    item.appendChild(img);
    item.appendChild(inf);
    document.getElementById("similarContainer").appendChild(item);
}

// ----------------------------عکس ها و ویدیو ها---------------------------






$(document).ready(function() {
    $("#Slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        pagination: true,
        navigation:true,
        navigationText: [
            "<",">"

        ],

    });

    document.getElementById('gameInfo').style.display = "block";

});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



