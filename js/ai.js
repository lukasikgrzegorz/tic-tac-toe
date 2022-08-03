function foeMove() {

    let foeAttack = 0;
    let foeBlock = 0;

    for (i = 0; i < 8; i++) {

        let checkCounter = 0;

        for (j = 0; j < 3; j++) {
            if (gameArea[whenWin[i][j]] == foeSign) { checkCounter++; }
        }

        if (checkCounter == 2) {
            for (k = 0; k < 3; k++) {
                if (gameArea[whenWin[i][k]] == 0) {
                    randomNumber = whenWin[i][k];
                    foeAttack++;
                }
            }
        }
    }


    if (foeAttack == 0) {
        for (i = 0; i < 8; i++) {

            let checkCounter = 0;

            for (j = 0; j < 3; j++) {
                if (gameArea[whenWin[i][j]] == playerSign) { checkCounter++; }
            }

            if (checkCounter == 2) {
                for (k = 0; k < 3; k++) {
                    if (gameArea[whenWin[i][k]] == 0) {
                        randomNumber = whenWin[i][k];
                        foeBlock++;
                    }
                }
            }
        }

    }

    if (moveCounter == 1) {
        let a = 0;

        while (a == 0) {
            randomGenetator(0, 8);
            if (randomNumber % 2 == 1) { randomNumber--; }
            if (gameArea[randomNumber] == 0) { a = 1 }
        }
    }

    if (moveCounter > 1 && foeAttack == 0 && foeBlock == 0) {

        let a = 0;

        while (a == 0) {
            randomGenetator(0, 8);
            if (gameArea[randomNumber] == 0) { a = 1 }
        }

    }


    if (playerSign == 1) {
        document.getElementById(randomNumber).innerHTML = "x";
        gameArea[randomNumber] = 2;
    } else {
        document.getElementById(randomNumber).innerHTML = "o";
        gameArea[randomNumber] = 1;
    }

}