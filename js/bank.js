const Bank = class {
    constructor(startingBalance) {
        this.betPool = 0;
        this.players = new Player("Player 1", startingBalance);
    }

    addBet(amount, playerIndex) {
        this.betPool += amount;
        this.players[playerIndex].raiseBet(amount);
    }

    betWin(winnerIndex) {
        this.players[winnerIndex].addBalance(this.betPool);
        this.betPool = 0;
        for (const player in this.players) {
            player.foldBet();
        }
    }

    betDraw() {
        for (const player in this.players) {
            player.returnBet();
        }
        this.betPool = 0;
    }

    betWinMultiplier(winnerIndex, multiplier) {
        this.players[winnerIndex].addBalance(this.players[winnerIndex].bet * multiplier);
        this.betPool = 0;
        for (const player in this.players) {
            player.foldBet();
        }
    }
}

class Player {
    constructor(name, startingBalance) {
        this.name = name;
        this.cash = startingBalance;
        this.bet = 0;
    }

    addBalance(amount) {
        this.balance += amount;
    }

    subtractBalance(amount) {
        this.balance -= amount;
    }

    raiseBet(amount) {
        this.bet += amount;
        this.cash -= amount;
    }

    foldBet() {
        this.bet = 0;
    }

    returnBet() {
        this.cash += this.bet;
        this.bet = 0;
    }
}