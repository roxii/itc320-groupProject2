// Mult-Dimensional Arrays DEMO

  //Create game board step1 
  var game = new Array(8);
  for (var i = 0; i < 8; i++) {
    game[i] = new Array(8);
	for (var j = 0; j < 8; j++) {
		game[i][j] = 'R';
	}
  }
  
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
   
   print(game.join('\n') + '\n\n');
   
   print(game1.join('\n') + '\n\n');
   
   // An example move
   //Move queen's bishop's pawn forward one
   game1[5][2] = game1[6][2];
   game1[6][2] = ' ';
   
   print(game1.join('\n'));
   
   