var section = document.querySelector(".sect1");
var btn1 = document.querySelector("#img1");
var btn2 = document.querySelector("#img2");
var btn3 = document.querySelector("#img3");
var btn4 = document.querySelector("#img4");
var btn5 = document.querySelector("#img5");
var titre = document.querySelector(".titre");
var text = document.querySelector(".text");

function oussama() {
  btn1.addEventListener("click", () => {
    section.style.background = "url(./imag1.jpg)";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";

    titre.textContent = "Meta Connect 2022 Roundup";
    titre.style.color = "black";
    text.textContent =
      "See all the newest development announcements and event highlights.";
    text.style.color = "black";
    document.querySelector(".link").style.color = "black";
    document.querySelector(".circle").style.color = "black";
    document.querySelector(".cont a").style.color = "black";
  });
  btn2.addEventListener("click", () => {
    section.style.background = "url(./imag2.jpg)";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";

    titre.textContent =
      "Introducing an important update to Instagram Sharing to Stories";
    titre.style.color = "white";
    text.textContent =
      "Instagram is now requiring that all developers have access to a registered Facebook App with Basic settings configured in order to continue using Share to Stories.";
    text.style.color = "white";
    document.querySelector(".link").style.color = "white";
    document.querySelector(".circle").style.color = "white";
    document.querySelector(".cont a").style.color = "white";
  });
  btn3.addEventListener("click", () => {
    section.style.background = "url(./imag3.jpg)";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";

    titre.textContent = "Sharing to Family of Apps";
    titre.style.color = "black";
    text.textContent =
      "Let people share your app or site content across social media with Instagram & Facebook.";
    text.style.color = "black";
    document.querySelector(".link").style.color = "black";
    document.querySelector(".circle").style.color = "black";
    document.querySelector(".cont a").style.color = "black";
  });
  btn4.addEventListener("click", () => {
    section.style.background = "url(./imag4.jpg)";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";

    titre.textContent = "Meta Connect 2022 Roundup";
    titre.style.color = "white";
    text.textContent =
      "See all the newest development announcements and event highlights.";
    text.style.color = "white";
    document.querySelector(".link").style.color = "white";
    document.querySelector(".circle").style.color = "white";
    document.querySelector(".cont a").style.color = "white";
  });
  btn5.addEventListener("click", () => {
    section.style.background = "url(./imag5.jpg)";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundSize = "cover";

    titre.textContent =
      "Introducing Facebook Graph API v15.0 and Marketing API v15.0";
    titre.style.color = "white";
    text.textContent =
      "We are releasing Facebook Graph API v15.0 and Marketing API v15.0. As part of this release, we are highlighting changes below that we believe are relevant to parts of our developer community.";
    text.style.color = "white";
    document.querySelector(".link").style.color = "white";
    document.querySelector(".circle").style.color = "white";
    document.querySelector(".cont a").style.color = "white";
  });
   };
  oussama();
/* ....................... start Navbar Section.....................*/
var dev = document.getElementById("dev");
var doc=document.querySelector(".Doc");
var blog=document.querySelector(".Blog");
var more=document.querySelector(".More");
var navbar1=document.querySelector(".navbar");
var navbar2=document.querySelector(".navbar2");
var navbar3=document.querySelector(".navbar3");
var navbar4=document.querySelector("#navbar4");
var nav= document.querySelector('.logo');
var open= true;
var open=true;
function Open() {
       dev.addEventListener("click",()=>{
   document.getElementById("navbar4").style.transform ="translateY(0%)" });
   
   nav.addEventListener("click",()=>{
   document.getElementById("navbar4").style.transform ="scaleY(0%)" });      
    
   section.addEventListener("click",()=>{
        document.getElementById("navbar4").style.transform ="scaleY(0%)"; 
    });  
}
 Open();


// Navbar2.style.display="none";
    // Navbar3.style.display="none";
    // Navbar4.style.display="none";
//     Navbar2.classList.contains("close");
//    Navbar3.classList.contains("close");
//    Navbar4.classList.contains("close"); 


  







/* ....................... End Navbar Section.....................*/























































































  // setInterval(() => {

  //     setTimeout(() => {
  //         section.style.background='url(./imag1.jpg)';
  //         section.style.backgroundRepeat='no-repeat';
  //       section.style.backgroundSize='cover';
  //     },0);
  //     setTimeout(() => {
  //         section.style.background='url(./imag2.jpg)';
  //       section.style.backgroundRepeat='no-repeat';
  //       section.style.backgroundSize='cover';;
  //     }, 9000);
  //     setTimeout(() => {
  //         section.style.background='url(./imag3.jpg)';
  //         section.style.backgroundRepeat='no-repeat';
  //       section.style.backgroundSize='cover';
  //     }, 18000);
  //     setTimeout(() => {
  //         section.style.background='url(./imag4.jpg)';
  //         section.style.backgroundRepeat='no-repeat';
  //       section.style.backgroundSize='cover';
  //     }, 27000);
  //     setTimeout(() => {
  //         section.style.background='url(./imag5.jpg)';
  //         section.style.backgroundRepeat='no-repeat';
  //       section.style.backgroundSize='cover';
  //     }, 36000);
  // }, 20000);



