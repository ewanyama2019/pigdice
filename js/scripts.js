$(document).ready(function(){
    console.log("Page is Ready");
});

function player(name, score) {
    this.nameOfPlayer = name;
    this.cummScore = score;
    this.diceRoll = [];
};

var player1 = new player (Player1)