////---------start of BUSINESS LOGIC--------------------////

//  Constructor for Player
 function Player() {
    this.cummScore = 0;
    this.roundScore = 0;
    this.diceRoll = [];
    this.turn = 0;
};

//  Declared object player
const player1 = new Player();
const player2 = new Player();

//Finction to generate random numbers
function randomizer() {
    var min = 1;
    var max = 7;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    alert(random);
    return (random);
};


//declare roll prototype
Player.prototype.Roll = function () {
    this.diceRoll.push(randomizer());
};


//declare hold prototype
Player.prototype.Hold = function () {
    this.roundScore = _.reduce(this.diceRoll, function (memo, num) {
        return memo + num;
    }, 0);
    this.cummScore = +this.roundScore;
    return this.cummScore;
};



//------------------end of BUSINESS LOGIG------------------------//



//------------------start of USER LOGIG--------------------------//

$(document).ready(function () {

//Initialize Final Score boards to Zero
    $("button#initialize").click(function () {
        location.reload();
    });
//Update player Visuals
    document.getElementById('player1').innerText = 'Player1';
    document.getElementById('player2').innerText = 'Player2';
    document.getElementById('player1_cum_score').innerText = '0';
    document.getElementById('player2_cum_score').innerText = '0';
    document.getElementById('player1_roll').innerText = '0';
    document.getElementById('player2_roll').innerText = '0';
    document.querySelector('.dice').style.display = 'none';

    $("button#rollDice1").click(function () {
        player1.Roll();

        if (_.contains(player1.diceRoll, 1)) {
            alert("You're out");
            player1.diceRoll = [];
            // $("h2#player1_roll").text(player1.diceRoll);
        } else if ($("button#hold1").click(function () {}) && (_.contains(player1.diceRoll, 1))) {} else {

            $("h2#player1_roll").text(player1.diceRoll + ", ");
            $("button#hold1").click(function () {
                player1.Hold();
                $("h2#player1_cum_score").text(player1.roundScore);
                if (player1.cummScore === 100) {
                    alert("Player 1 Wins")
                }

            });
        };





    });


    $("button#rollDice2").click(function () {
        player2.Roll();

        if (_.contains(player2.diceRoll, 1)) {
            alert("You're out");
            player2.diceRoll = [];
            // $("h2#player2_roll").text(player2.diceRoll);
        } else if ($("button#hold2").click(function () {}) && (_.contains(player2.diceRoll, 1))) {} else {

            $("h2#player2_roll").text(player2.diceRoll + ", ");
            $("button#hold2").click(function () {
                player2.Hold();
                $("h2#player2_cum_score").text(player2.roundScore);
                if (player2.cummScore === 100) {
                    alert("Player 2 Wins")
                }

            });
        };





    });





});

document.getElementById('player1').innerText = 'Player1';
document.getElementById('player2').innerText = 'Player2';
