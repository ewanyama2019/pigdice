$(document).ready(function () {
    // console.log("Page is Ready");
    var scores_1 = [];
    var cumulative_score_1 = 0;
    var player1Score;

    $("button#rollDice1").click(function () {

        var min = 1;
        var max = 7;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;

        if (random !== 1) {
            $("h2#player1_roll").prepend(random + ", ");
            scores_1.push(random);

            var sum1 = _.reduce(scores_1, function (memo, num) {
                return memo + num;
            }, 0);
            // alert(sum1);

            $("button#hold1").click(function () {
                cumulative_score_1 = sum1;
                // alert(cumulative_score_1);
                $("h2#player1_cum_score").text(cumulative_score_1);
                if (cumulative_score_1 === 100) {
                    alert("Player 1 Wins")
                }

            });
        };
        



    });

});






/*  Constructor for Player*/
function player(name, score) {
    this.cummScore = 0;
    this.diceRoll = [];
    this.turn = turn;
};

/*  Declared object player*/ 
var player1 = new player ();
var player2 = new player ()


function randomizer(){
    var min = 1;
    var max = 7;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    alert(random);
};