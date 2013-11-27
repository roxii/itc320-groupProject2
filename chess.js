var white = 0
var black = 1
var playerTurn = white

var no = 0
var yes = 1
var playerCheck = no


var imageUrlPrefix = "ChessPieces/";
var imageUrlSuffix = ".png";


// 2-D Array Chess game starting state
var game1 =
[['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r']];

window.onload = function() {
	for(i = 0; i < game1.length; i++){
		for(j = 0; j < game1[i].length; j++){
			if(game1[i][j] != ' '){
				$(translate(i, j)).firstChild.src = imageUrlPrefix + game1[i][j] + imageUrlSuffix;
			}
		}
	}
}

function makeMove(){
	var from = $("from").value;
	var to = $("to").value;
}



//Translates array index to game board position.
var translate = function(index1, index2){
	var combinedIndex = String(index1) + String(index2);
	
	switch(combinedIndex){
		case "00":
			return "a8";
		case "01":
			return "b8";
		case "02":
			return "c8";
		case "03":
			return "d8";
		case "04":
			return "e8";
		case "05":
			return "f8";
		case "06":
			return "g8";
		case "07":
			return "h8";
		case "10":
			return "a7";
		case "11":
			return "b7";
		case "12":
			return "c7";
		case "13":
			return "d7";
		case "14":
			return "e7";
		case "15":
			return "f7";
		case "16":
			return "g7";
		case "17":
			return "h7";
		case "20":
			return "a6";
		case "21":
			return "b6";
		case "22":
			return "c6";
		case "23":
			return "d6";
		case "24":
			return "e6";
		case "25":
			return "f6";
		case "26":
			return "g6";
		case "27":
			return "h6";
		case "30":
			return "a5";
		case "31":
			return "b5";
		case "32":
			return "c5";
		case "33":
			return "d5";
		case "34":
			return "e5";
		case "35":
			return "f5";
		case "36":
			return "g5";
		case "37":
			return "h5";
		case "40":
			return "a4";
		case "41":
			return "b4";
		case "42":
			return "c4";
		case "43":
			return "d4";
		case "44":
			return "e4";
		case "45":
			return "f4";
		case "46":
			return "g4";
		case "47":
			return "h4";
		case "50":
			return "a3";
		case "51":
			return "b3";
		case "52":
			return "c3";
		case "53":
			return "d3";
		case "54":
			return "e3";
		case "55":
			return "f3";
		case "56":
			return "g3";
		case "57":
			return "h3";
		case "60":
			return "a2";
		case "61":
			return "b2";
		case "62":
			return "c2";
		case "63":
			return "d2";
		case "64":
			return "e2";
		case "65":
			return "f2";
		case "66":
			return "g2";
		case "67":
			return "h2";
		case "70":
			return "a1";
		case "71":
			return "b1";
		case "72":
			return "c1";
		case "73":
			return "d1";
		case "74":
			return "e1";
		case "75":
			return "f1";
		case "76":
			return "g1";
		case "77":
			return "h1";
	}
}


var $ = function(id){
	return document.getElementById(id);
}



//function isValidMove(x1, y1, x2, y2) {
	//var movingFrom = game1[x1][y1];
	//var movingTo = game1[x2][y2];
	
	//if(movingFrom == ' '){ //trying to move an empty square
		//return false;
	//}
	//if(movingTo != ' ') { //square already occupied
		//return false;
	//}
	//if((movingFrom == 'R' || movingFrom == 'r') && (x1 != x2 && y1 != y2)) {
	////rook can move up, down, left, and right
		//return false;
	//}
	//else if((movingFrom == 'N' || movingFrom == 'n') && ((x1 != x2 && (Math.abs(y2-y1)!= 1)) && ((Math.abs(x2-x1)!= 1) && y1 != y2))) {
	////knight moves in L shape
		//return false;
	//}
	//else if((movingFrom == 'B' || movingFrom == 'b') && ((x2-x1) != (y2-y1))) {
	////bishop moves in diagonal
		//return false;
	//}
	//else if((movingFrom == 'Q' || movingFrom == 'q') && (x1 != x2 && y1 != y2) && ((x2-x1) != (y2-y1))) {
	////queen moves up, down, left, right, and diagonal
		//return false;
	//}
	//else if((movingFrom == 'K' || movingFrom == 'k') && (x1 != x2 && y1 != y2) && ((x2-x1) != (y2-y1)) && ((Math.abs(x2-x1) != 1) && (Math.abs(y2-y1) != 1))) {
	////king moves 1 square in any direction
		//return false;
	//}
	//else if((movingFrom == 'P') && (((x2-x1) != 0) && ((y2-y1) != 1))) {
	////black pawn can only move down 1 square
		//return false;
	//}
	//else if((movingFrom == 'p') && (((x2-x1) != 0) && ((y1-y2) != 1))) {
	////white pawn can only move up 1 square 
		//return false;
	//}
	//else {
		//return true;
	//}
//}

//function makeMove(x1, y1, x2, y2) {
	//if (isValidMove(x1, y1, x2, y2)) {
		//game1[x2][y2] = game1[x1][y1];
		//game1[x1][y1] = ' ';
		//if (playerTurn == white) {
			//playerTurn = black;
		//}
		//else {
			//playerTurn = white;
		//}
	//else {
		//// return error message in a span?
	//}
//}

   
   
