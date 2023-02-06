
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

    raiseBet = (amount) => {
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

const Bank = class {
    constructor(startingBalance) {
        this.betPool = 0;
        this.player = new Player("Player 1", startingBalance);
    }

    addBet(amount) {
        this.betPool += amount;
        this.player.raiseBet(amount);
    }

    betWin() {
        this.player.addBalance(this.betPool);
        this.betPool = 0;
    }

    betDraw() {
        player.returnBet();
        this.betPool = 0;
    }

    betWinMultiplier( multiplier) {
        this.player.addBalance(this.player.bet * multiplier);
        this.betPool = 0;
    }
}
