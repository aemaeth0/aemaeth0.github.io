function randomImg(id) {
var randomNumber = Math.floor(Math.random() * 11) + 1;
var imgName = "img_" + randomNumber + ".jpg";
document.getElementById(id).src= imgName;
}
window.onload = function() {
randomImg("img1");
}
