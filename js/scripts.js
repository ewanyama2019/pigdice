
////---------start of BUSINESS LOGIC--------------------////

//  Constructor for Player
function Player() {
    this.cummScore = 0;
    this.diceRoll = [];
    this.turn =0;
};

//  Declared object player
var player1 = new Player ();
var player2 = new Player ();

//Finction to generate random numbers
function randomizer(){
    var min = 1;
    var max = 7;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    alert(random);
};


//declare roll prototype
Player.prototype.Roll =function(){
    this.diceRoll.push(randomizer());
};

//declare hold prototype
Player.prototype.Hold = function(){
    this.cummScore += _.reduce(this.diceRoll, function (memo, num) {
            return memo + num;
        }, 0);
};

//------------------end of BUSINESS LOGIG------------------------//


//------------------start of USER LOGIG--------------------------//
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
