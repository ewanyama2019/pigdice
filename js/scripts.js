$(document).ready(function(){
    // console.log("Page is Ready");
    var scores_1= [];
    var cumulative_score_1 =0;

    $("button#rollDice").click(function () {

        var min = 1;
        var max = 7;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        
        $("h2#player1_roll").prepend(random +", ");
        scores_1.push(random);

        var sum1 = _.reduce(scores_1, function (memo, num) { return memo + num; }, 0);
        alert(sum1);

    });

});






// /*  Constructor for Player*/
// function player(name, score) {
//     this.nameOfPlayer = name;
//     this.cummScore = score;
//     this.diceRoll = [];
// };

// /*  Declared object player*/ 
// var player1 = new player ("Player1" );

