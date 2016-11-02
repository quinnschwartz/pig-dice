Spec List

0) let's play button which requires a number of players from 1-4
in: enter number 2 in number box and click start game
out: player 1 score and player 2 score appear, game starts

1) *DONE* if the player hits the "roll" button a random number from 1-6 is returned.
in: click roll button
out: 6, 6, 4, 2, 3, etc.

2) *DONE* that number is added to the turn score.
in: clicking roll button
out: (subtotal 24: 6, 6, 4, 3, 5)

3) *DONE* If it's 1, the turn score resets and the turn is over.
in: clicking roll button
out: 5, 2, 3, 1-TOO GREEDY YOURE out

4) *DONE* if the user hits the "hold" button then their turn score is added to their total score and the turn is over.
in: (subtotal 24: 6, 6, 4, 3, 5), click hold button
out: (subtotal 0: ), player Total Score: 24

5) if there are multiple players, the next player in order starts their turn and the process is repeated.
in: click hold button OR click roll button and roll 1
out: Player 2 Current Turn Score: (subtotal 0: )

6) when a player's total reaches 100 or more the game is over and a happy pig image is displayed.
in: player X total score >= 100
out: PLAYER X WINS OINK OINK

7) *DONE* instructions sidebar

Optional Specs:
Form at the beginning where Players enter their names,

image of a die with the number rolled

any of the player slots can be a computer
