var random1=Math.random()*6;
random1= Math.floor(random1)+1;
var random2=Math.random()*6;
random2=Math.floor(random2)+1;

var randomdiceimage1="images/dice"+ random1 +".png";
var randomdiceimage2="images/dice"+ random2 +".png";
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);

if(random1 > random2){
  document.querySelector("h1").innerHTML="Player 1 wins!!!!!";
}
else if (random1<random2) {
  document.querySelector("h1").innerHTML="Player 2 won!!!!!";

}
else if(random1==random2)
{
  document.querySelector("h1").innerHTML="Draw!!";
}
