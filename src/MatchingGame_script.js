var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces() {

    while(numberOfFaces--) {
        var smiley_face = document.createElement("img");
        smiley_face.src = "smile.png";
        smiley_face.style.top = Math.floor(Math.random() * 400);
        smiley_face.style.left = Math.floor(Math.random() * 400);
        theLeftSide.appendChild(smiley_face);
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
}