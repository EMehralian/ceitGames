/**
 * Created by ehsan on 1/14/17.
 */

for(i=0 ; i<9; i++) {  ////items in the newGame slider
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
    document.getElementById("similarsContainer").appendChild(item);
}