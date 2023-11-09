var desktop1 = document.getElementById('desktop1');
var desktop2 = document.getElementById('desktop2');
var nav = document.getElementById('nav');

nav.addEventListener("mouseover", function(){
  desktop2.style.display = "flex";
  desktop1.style.display = "none";
})
nav.addEventListener("mouseout", function(){
  desktop2.style.display = "none";
  desktop1.style.display = "block";
})
document.addEventListener("DOMContentLoaded", function(event) {
  desktop2.style.display = "none";
});


// .style.transition = "all 2s"
