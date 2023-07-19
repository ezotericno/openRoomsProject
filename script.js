var result = document.getElementById("open");
var upper = document.getElementById("closed");

function changeImage() {
   var image = document.getElementById("image");
   if (image.src =="/images/closed.jpg") {
      image.src = "/images/closed.jpg";
   }
   else {
      image.src = "/images/open.jpg";
   }
   upper.innerHTML = "  ";
}

