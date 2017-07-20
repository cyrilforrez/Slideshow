var img = ['img/pc/DOFUS.png', 'img/pc/dofuspets.jpg', 'img/pc/wakfu.png'];
var monImage = document.getElementById("puzzle");
cont = 0;


function nextimg() {
    if (cont >= 2) {
        cont = img.length - 4;
    }
    cont++;
    monImage.src = img[cont];
}

function previmg() {
    if (cont <= 0) {
        cont = img.length;
    }
    cont--;
    monImage.src = img[cont];
}