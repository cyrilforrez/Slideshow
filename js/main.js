/*-----------------------------------Declaration of variable--------------------------------*/
var img = ['img/pc/DOFUS.png', 'img/pc/dofuspets.jpg', 'img/pc/wakfu.png'];
var monImage = document.getElementById("puzzle");
cont = 0;
var interv = setInterval(nextimg, 2000);


//-----------------------Next picture function---------------------------
function nextimg() { //------------The click passes to the next image
    if (cont >= 2) {
        cont = img.length - 4;
    }
    cont++;
    monImage.src = img[cont];
    clearInterval(interv);  //------------Stop the set interval
    interv = setInterval(nextimg, 2000);
}

//----------------------Previous image function---------------------
function previmg() {  //----------The click returns to the previous image
    if (cont <= 0) {
        cont = img.length;
    }
    cont--;
    monImage.src = img[cont];
    clearInterval(interv);  //-----------Stop the set interval
    interv = setInterval(nextimg, 2000);
}