let startingCash;
if (localStorage.getItem("cash") != null) {
    startingCash = parseInt(localStorage.getItem("cash"));
} else {
    startingCash = 1000;
    localStorage.setItem("cash", startingCash);
}

bank = new Bank(startingCash);
var playing = false;

numbers = [];
for (var i = 0; i < 37; i++) {
    numbers.push(i);
}

function spin() {
    var spin = Math.floor(Math.random() * 37);
    return spin;
}

function addBet() {
    //check if player has enough cash and game is not in progress
    if (this.bank.player.cash < bet || playing) {
        return;
    }
    this.bank.addBet(bet);
    //visual stuff goes here

}

function startGame() {
    //stop player from betting more
    playing = true;
    //visual stuff goes here

}

function payOut(winNum, betNum) {
    //look up logic for zero
    if (winNum == betNum) {
        this.bank.betWinMultiplier(36);
    } else if (betNum = "Even" && winNum % 2 == 0 && winNum != 0) {
        this.bank.betWinMultiplier(2);
    } else if (betNum = "Odd" && winNum % 2 == 1) {
        this.bank.betWinMultiplier(2);
    } else if (betNum = "1 to 18" && winNum <= 18 && winNum != 0) {
        this.bank.betWinMultiplier(2);
    } else if (betNum = "19 to 36" && winNum >= 19) {
        this.bank.betWinMultiplier(2);
    } else if (betNum = "1st 12" && winNum <= 12 && winNum != 0) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "2nd 12" && winNum >= 13 && winNum <= 24) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "3rd 12" && winNum >= 25) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "1st Column" && winNum % 3 == 1) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "2nd Column" && winNum % 3 == 2) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "3rd Column" && winNum % 3 == 0 && winNum != 0) {
        this.bank.betWinMultiplier(3);
    } else if (betNum = "Red") {
        if (winNum == 1 || winNum == 3 || winNum == 5 || winNum == 7 || winNum == 9 || winNum == 12 || winNum == 14 || winNum == 16 || winNum == 18 || winNum == 19 || winNum == 21 || winNum == 23 || winNum == 25 || winNum == 27 || winNum == 30 || winNum == 32 || winNum == 34 || winNum == 36) {
            this.bank.betWinMultiplier(2);
        }
    } else if (betNum = "Black") {
        if (winNum == 2 || winNum == 4 || winNum == 6 || winNum == 8 || winNum == 10 || winNum == 11 || winNum == 13 || winNum == 15 || winNum == 17 || winNum == 20 || winNum == 22 || winNum == 24 || winNum == 26 || winNum == 28 || winNum == 29 || winNum == 31 || winNum == 33 || winNum == 35) {
            this.bank.betWinMultiplier(2);
        }
    } else {
        this.bank.betLose();
    }

}