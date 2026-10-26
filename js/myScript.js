const myHeading = document.getElementById("myHeading");
myHeading.innerText = "ITS A TITLE";

document.querySelector('nav ul li').setAttribute('class', 'currentPage');
let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'





document.querySelector(".red").addEventListener('click', function(ev){
     document.body.setAttribute('class', "redBack");
})

   
document.querySelector(".green").addEventListener('click', function(ev){
     document.body.setAttribute('class', "greenBack");
})

document.querySelector(".blue").addEventListener('click', function(ev){
     document.body.setAttribute('class', "blueBack");
})

document.querySelector(".reset").addEventListener('click', function(ev){
     document.body.setAttribute('class', "reset");
})

let imageAr = [
  'images/view1.jpg',
  'images/view2.jpg',
  'images/view3.jpg',
  'images/view4.jpg',
  'images/view5.jpg',
  'images/view6.jpg'
];

let currentIndex = 0;

function chgImage() {
  // Increment the index to get the next image
  currentIndex++;
  // If the index exceeds the array length, reset it to 0
  if (currentIndex >= imageAr.length) {
    currentIndex = 0;
  }
  // Change the image source to the next image in the array
  document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
}

setInterval(chgImage, 2000);