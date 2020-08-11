var listPict = document.querySelectorAll(".slider")[0].children;

//This is the latest img, it will serve to know wich img to hide
var old = listPict.length - 1;
//This will represent the current img to show
var current = 0;

//The timeout will recall this function every 3 sec
function loop() {
    //We set the class of the current img to show
    listPict[current].setAttribute('class', 'show');
    //We hide the last img
    listPict[old].setAttribute('class', 'hide');
    
    //Update the variables !
    old = current;
    current++;
    
    //If the current is bigger then the list of images, return to 0
    if (current === listPict.length)
        current = 0;
    
    //Recall every 3 sec
    setTimeout(loop, 3000);
}

loop();
function scroll()
{
    nav = document.querySelector('.nav-bar');
    search = document.querySelector('.search-bar');
    nav.style.backgroundColor = 'black';
    search.style.backgroundColor = 'black';
    
}

