var img = ['img/pc/DOFUS.png', 'img/pc/dofuspets.jpg', 'img/pc/wakfu.png'];
var monImage = document.getElementById("puzzle");
cont = 0;


function nextimg() {
    if (cont >= 2) {
        cont = -1;
    }
    cont++;
    monImage.src = img[cont];
}

function previmg() {
    if (cont <= 0) {
        cont = +3;
    }
    cont--;
    monImage.src = img[cont];
}