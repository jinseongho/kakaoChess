/**
 * Created by jinseongho on 16. 8. 16..
 */

window.onload = function () {
    chessInit();
    chessUnit();
}

function chessInit() {
    for (var horizonArea = 0; horizonArea < 8; horizonArea++) {
        var ulNode = document.createElement("ul");
        ulNode.setAttribute("class", "float-left");
        ulNode.setAttribute("id", "chess-vertical-" + horizonArea);
        document.getElementById('chess-ground').appendChild(ulNode);
        for (var verticalArea = 0; verticalArea < 8; verticalArea++) {
            var liNode = document.createElement("li");
            if ((horizonArea + verticalArea) % 2 == 0) {
                liNode.setAttribute("class", "white-area");
            } else {
                liNode.setAttribute("class", "black-area");
            }
            liNode.setAttribute("ondrop", "drop(event)");
            liNode.setAttribute("ondragover", "allowDrop(event)");
            liNode.setAttribute("id", "chess-area-" + horizonArea + "-" + verticalArea);
//            liNode.textContent = horizonArea + "," + verticalArea;
            document.getElementById('chess-vertical-' + horizonArea).appendChild(liNode);
        }
    }

}

function chessUnit() {

//♜ ♞ ♝ ♚ ♛ ♝ ♞ ♜
//♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
//♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
//♖ ♘ ♗ ♔ ♕ ♗ ♘ ♖

    var whiteKing = document.getElementById('chess-area-3-7');
    createDrag(whiteKing, "♔", "3-7");
//    whiteKing.textContent = "♔";

    var blackKing = document.getElementById('chess-area-3-0');
    createDrag(blackKing, "♚", "3-0");
//    blackKing.textContent = "♚";

    var whiteQueen = document.getElementById('chess-area-4-7');
    createDrag(whiteQueen, "♕", "4-7");
//    whiteQueen.textContent = "♕";
    var blackQueen = document.getElementById('chess-area-4-0');
    createDrag(blackQueen, "♛", "4-0");
//    blackQueen.textContent = "♛";
}

function createDrag(node, unit,id) {
    var pNode = document.createElement("p");
    pNode.setAttribute("ondragstart", "dragStart(event)");
    pNode.setAttribute("draggable", "true");
    pNode.setAttribute("id", "dragtarget-" + id);
    pNode.textContent = unit;
    node.appendChild(pNode);
}


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    if(document.getElementById(event.target.id).childNodes.length>1){
        document.getElementById("chess-storage").appendChild(document.getElementById(event.target.id).childNodes.item(0));
    }
    
}