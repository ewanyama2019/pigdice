////---------start of BUSINESS LOGIC--------------------////

//  Constructor for Player
 function Player() {
    this.cummScore = 0;
    this.roundScore = 0;
    this.diceRoll = [];
    this.turn = 0;
};

//  Declared object player
player1 = new Player();
player2 = new Player();

//Finction to generate random numbers
function randomizer() {
    var min = 1;
    var max = 7;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return (random);
    alert (random);
};


//declare roll prototype
Player.prototype.Roll = function () {
    this.diceRoll.push(randomizer());
    return this.diceRoll;
};

Player.prototype.roundoff = function () {
    this.roundScore = _.reduce(this.diceRoll, function (memo, num) {
        return memo + num;
    }, 0);
};

Player.prototype.lastIn =function () {
    return this.diceRoll[this.diceRoll.length -1]
};
//declare hold prototype
Player.prototype.Hold = function () {
    this.cummScore =+ this.roundScore;
    return this.cummScore;
};



//------------------end of BUSINESS LOGIG------------------------//



//------------------start of USER LOGIG--------------------------//

$(document).ready(function () {

//Initialize Final Score boards to Zero
    $("button#initialize").click(function () {
        location.reload();
    });

function init() {    
    //Update player Visuals
    document.getElementById('player1').innerText = 'Player1';
    document.getElementById('player2').innerText = 'Player2';
    document.getElementById('player1_cum_score').innerText = '0';
    document.getElementById('player2_cum_score').innerText = '0';
    document.getElementById('player1_roll').innerText = '0';
    document.getElementById('player2_roll').innerText = '0';
    document.querySelector('.dice').style.display = 'none';

//classes reset 
    document.querySelector('.player1-banner').classList.remove('active');
    document.querySelector('.player1-banner').classList.remove('winner');
    document.querySelector('.player2-banner').classList.remove('active');
    document.querySelector('.player2-banner').classList.remove('winner');
    document.querySelector('.player1-banner').classList.add('active');
    document.querySelector('.player1-turn').classList.add('active');

};
    init();
//Dice roll
document.querySelector('#rollDice1').addEventListener('click', function()  {
    player1.Roll();
    if (!((_.contains(player1.diceRoll, 1)))) {
        this.cummScore =+ this.roundScore;
        document.getElementById('player1_roll').innerText = player1.diceRoll;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'images/dice-results/dice-' + player1.lastIn() + '.png';
    }
    else {
        //loose turn point
        this.cummScore = 0;
        alert("You're out");
        this.turn == 0 ? this.turn = 1: this.turn=0;

        //switch turns
        document.querySelector('.player1-banner').classList.remove('active');
        document.querySelector('.player1-turn').classList.remove('active');
        document.querySelector('.player1-banner').classList.remove('winner');
        ducument.querySelector('.player2-banner').classList.add("active");
        document.querySelector('.player2-turn').classList.add("active");
        document.getElementById('rollDice1').disabled = true;
        // document.getElementById('rollDice2').disabled = false;
        // document.getElementById('hold1').disabled = true;

    }
});

//Hold 
document.querySelector('#hold1').addEventListener('click', function (){});
document.querySelector('#hold2').addEventListener('click', function (){});



//     $("button#rollDice1").click(function () {
//         player1.Roll();

//         if (_.contains(player1.diceRoll, 1)) {
//             alert("You're out");
//             player1.diceRoll = [];
//             // $("h2#player1_roll").text(player1.diceRoll);
//         } else if ($("button#hold1").click(function () {}) && (_.contains(player1.diceRoll, 1))) {} else {

//             $("h2#player1_roll").text(player1.diceRoll + ", ");
//             $("button#hold1").click(function () {
//                 player1.Hold();
//                 $("h2#player1_cum_score").text(player1.roundScore);
//                 if (player1.cummScore === 100) {
//                     alert("Player 1 Wins")
//                 }

//             });
//         };





//     });


//     $("button#rollDice2").click(function () {
//         player2.Roll();

//         if (_.contains(player2.diceRoll, 1)) {
//             alert("You're out");
//             player2.diceRoll = [];
//             // $("h2#player2_roll").text(player2.diceRoll);
//         } else if ($("button#hold2").click(function () {}) && (_.contains(player2.diceRoll, 1))) {} else {

//             $("h2#player2_roll").text(player2.diceRoll + ", ");
//             $("button#hold2").click(function () {
//                 player2.Hold();
//                 $("h2#player2_cum_score").text(player2.roundScore);
//                 if (player2.cummScore === 100) {
//                     alert("Player 2 Wins")
//                 }

//             });
//         };





//     });





});
