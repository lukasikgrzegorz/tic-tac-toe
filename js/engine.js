function randomGenetator(min,max){
	let a = max-min+1;
	let b=Math.random()*a;
	let c=Math.floor(b)+min;
    randomNumber = c;
}

function playerChoose(a) {
    if(gameActive == 0){
    if (a == 2) {
        playerSign = 2;
        foeSign = 1;
        gameActive = 1;
        document.getElementById("parameters-caption").innerHTML = "you";
        document.getElementById("chooseo").style.display = "none";
    } else {
        gameActive = 1;
        document.getElementById("parameters-caption").innerHTML = "you";
        document.getElementById("choosex").style.display = "none";
        }
    }
}

function checkWin(a) {
    
    for (i = 0; i < 8; i++){
        let checkCounter = 0;
        for (j = 0; j < 3; j++) {
            if (gameArea[whenWin[i][j]] == a) {
                checkCounter++;
            }
            if (checkCounter == 3) {
                winFlag = 1;
                gameActive = 2;

                if (playerSign == a) {
                    document.getElementById("parameters").innerHTML = "<b>you win</b><br>game will be restart";
                } else {
                    document.getElementById("parameters").innerHTML = "<b>you lose</b><br>game will be restart";
                }


                for (k = 0; k < 3; k++){
                    if (playerSign == a) {
                        document.getElementById(whenWin[i][k]).classList.add("win-td");
                    } else { 
                        document.getElementById(whenWin[i][k]).classList.add("lose-td");
                    }
                    
                }

                setTimeout(function(){document. location. reload()},3000);
            }
         } 
    }
    
}

function foeMove() {
    let a = 0;
    
    while (a == 0) { 
        randomGenetator(0, 8);
        if (gameArea[randomNumber] == 0) {a=1}
    } 
    
    
    if (playerSign == 1) {
        document.getElementById(randomNumber).innerHTML = "x";
        gameArea[randomNumber] = 2;
    } else {
        document.getElementById(randomNumber).innerHTML = "o";
        gameArea[randomNumber] = 1;
    }
   
}

function cellChoose(a) {
    if (gameActive == 1 && gameArea[a] == 0) {
        if (playerSign == 1) {
            document.getElementById(a).innerHTML = "o";
            gameArea[a] = 1;
            moveCounter++;
            if (moveCounter > 2) { checkWin(1); }
            if (moveCounter <= 4 && winFlag == 0) { foeMove();checkWin(2); } 
        } else {
            document.getElementById(a).innerHTML = "x";
            gameArea[a] = 2;
            moveCounter++;
            if (moveCounter > 2) { checkWin(2); }
            if (moveCounter <= 4 && winFlag == 0) {foeMove();checkWin(1); } 
        }
    }
    
}

