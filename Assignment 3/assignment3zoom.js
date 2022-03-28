
"use strict";

var photoOrderArray = window.opener.photoOrder;
var photoSelected = photoOrderArray[2];
var figFilename = "images/IMG_0" + photoSelected + ".jpg";

function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; 
    createEventListener();
}

function closeWin() {
    window.close();
}

function addFavorites() {
    var position = 5; 
   
    for (var i = 0; i < window.opener.photoFavorites.length; i++) {
        
        if (window.opener.photoFavorites[i] === 0) {
            position = i;
           
            break;
        }
    }
    if (position > 4) {
        alert("Please remove one favorite first. Only five are allowed.")
    }
    else {
        window.opener.photoFavorites[position] = photoSelected;
        window.opener.document.getElementsByName("favorites")[i].src = "images/IMG_0" + photoSelected + "sm.jpg";
        alert("Photo added to favorites.");
    }
}

function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var addFavoritesDiv = document.getElementsByTagName("p")[1];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
        addFavoritesDiv.addEventListener("click", addFavorites, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
        addFavoritesDiv.attachEvent("onclick", addFavorites);
    }
}

window.onload = pageSetup;