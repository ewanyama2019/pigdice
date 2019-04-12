# _Pig Dice Game_

#### By _Eric Wafula Wanyama
### By _Eric Wafula Wanyama

## Description

_This web application allows two players to play a game of Pig Dice._
## BDD
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Game console loads on page load||
| Player 1 clicks ROLL button | Click ROLL button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner Alert shows | Player 1 total score = 100 | |
### live site link
<https://ewanyama2019.github.io/pigdice/> 
## Known Bugs
there are currently no known bugs experienced on the website but feedback on bugs encountered during viewing of the page will be highly appreciated and will go a long way into making the website better for the users. The only reason that the website may fail to load is if the Internet connection is slow or disconnected which will require you to troubleshoot your Internet connection