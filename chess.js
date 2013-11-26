// Mult-Dimensional Arrays DEMO
var white = 0
var black = 1
var playerTurn = white

var no = 0
var yes = 1
var playerCheck = no

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


function isValidMove(x1, y1, x2, y2) {
	var movingFrom = game1[x1][y1];
	var movingTo = game1[x2][y2];
	
	if(movingFrom == ' '){ //trying to move an empty square
		return false;
	}
	if(movingTo != ' ') { //square already occupied
		return false;
	}
	if((movingFrom == 'R' || movingFrom == 'r') && (x1 != x2 && y1 != y2)) {
	//rook can move up, down, left, and right
		return false;
	}
	else if((movingFrom == 'N' || movingFrom == 'n') && ((x1 != x2 && (Math.abs(y2-y1)!= 1)) && ((Math.abs(x2-x1)!= 1) && y1 != y2))) {
	//knight moves in L shape
		return false;
	}
	else if((movingFrom == 'B' || movingFrom == 'b') && ((x2-x1) != (y2-y1))) {
	//bishop moves in diagonal
		return false;
	}
	else if((movingFrom == 'Q' || movingFrom == 'q') && (x1 != x2 && y1 != y2) && ((x2-x1) != (y2-y1))) {
	//queen moves up, down, left, right, and diagonal
		return false;
	}
	else if((movingFrom == 'K' || movingFrom == 'k') && (x1 != x2 && y1 != y2) && ((x2-x1) != (y2-y1)) && ((Math.abs(x2-x1) != 1) && (Math.abs(y2-y1) != 1))) {
	//king moves 1 square in any direction
		return false;
	}
	else if((movingFrom == 'P') && (((x2-x1) != 0) && ((y2-y1) != 1))) {
	//black pawn can only move down 1 square
		return false;
	}
	else if((movingFrom == 'p') && (((x2-x1) != 0) && ((y1-y2) != 1))) {
	//white pawn can only move up 1 square 
		return false;
	}
	else {
		return true;
	}
}

function makeMove(x1, y1, x2, y2) {
	if (isValidMove(x1, y1, x2, y2)) {
		game1[x2][y2] = game1[x1][y1];
		game1[x1][y1] = ' ';
		if (playerTurn == white) {
			playerTurn = black;
		}
		else {
			playerTurn = white;
		}
	else {
		// return error message in a span?
	}
}

   
   
