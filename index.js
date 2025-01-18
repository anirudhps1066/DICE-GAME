function click1(){
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "dice" + randomNumber1 +".png";
var randomsrc1 = "./images/" + randomimage1;
var image1=document.querySelectorAll(".img1")[0];
image1.setAttribute("src",randomsrc1);
 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomsrc2 = "./images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll(".img2")[0].setAttribute("src",randomsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🙋‍♂️ Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins ! 🙋‍♀️"
}
else{
    document.querySelector("h1").innerHTML="DRAW !!🙅"
}
}

