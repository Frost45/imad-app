console.log('Loaded!');

//Move the image to the right
var img = document.getElementById('madi');

var maginLeft=0;

function moveRight() {
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft +'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};