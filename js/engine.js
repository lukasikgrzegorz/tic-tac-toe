function hiscoreCheck(){
    
    winCounter = localStorage.getItem("win");
    loseCounter = localStorage.getItem("lose");
    
    if (winCounter == null) {
        localStorage.setItem("win", 0);
        winCounter = localStorage.getItem("win");
    }       
    if ( loseCounter == null) {
        localStorage.setItem("lose", 0);
         loseCounter = localStorage.getItem("lose");
    }  
    
    document.getElementById("winCounter-container").innerHTML = "<b>WIN:</b>"+winCounter;
    document.getElementById("loseCounter-container").innerHTML = "<b>LOSE:</b>"+loseCounter ;  

}

hiscoreCheck();


function randomGenetator(min, max) {
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
        document.getElementById("chooseo").style.display = "none";
    } else {
        document.getElementById("choosex").style.display = "none";
        }
    }
    gameActive = 1;
    document.getElementById("parameters-caption").innerHTML = "you";
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
                    document.getElementById("parameters").innerHTML = "<b>you win</b><br>game will be restarted";
                    winCounter++;
                    localStorage.setItem("win", winCounter);
                } else {
                    document.getElementById("parameters").innerHTML = "<b>you lose</b><br>game will be restarted";
                    loseCounter++;
                    localStorage.setItem("lose", loseCounter);
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

function checkDraw() {
    let drawCounter = 0;
    for (i = 0; i < 9; i++){
         if(gameArea[i]!=0){drawCounter++}
    }
    
    if (drawCounter == 9) {
        document.getElementById("parameters").innerHTML = "<b>draw</b><br>game will be restarted";
        setTimeout(function(){document. location. reload()},3000);
    }
}

function cellChoose(a) {
    if (gameActive == 1 && gameArea[a] == 0) {
        if (playerSign == 1) {
            document.getElementById(a).innerHTML = "o";
            gameArea[a] = 1;
        } else {
            document.getElementById(a).innerHTML = "x";
            gameArea[a] = 2;
        }
        moveCounter++;
        if (moveCounter > 2) { checkWin(playerSign); }
        if (moveCounter <= 4 && winFlag == 0) { foeMove(); checkWin(foeSign); } 
        checkDraw();
    }
    
}



