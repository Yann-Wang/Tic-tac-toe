
#### tic-tac-toe
> Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

##### Final presentation
- access https://yann-wang.github.io/

##### start project

```shell

cd tic_tac_toe
npm install

# start project in development environment
# for Linux/Mac users
NODE_ENV=development npm start
# for Windows users
SET "NODE_ENV=development" && npm start

# start project in production environment
# for Linux/Mac users
NODE_ENV=production npm start
# for Windows users
SET "NODE_ENV=production" && npm start

```

##### presentation
- access http://localhost:8080/

##### features
- Declaring a Winner
- Storing a History, Showing the Moves, Implementing time Travel
- Display the move locations in the format "(2, 3)" instead of "6".
- Bold the currently-selected item in the move list.
- Rewrite Board to use two loops to make the squares instead of hardcoding them.
- Add a toggle button that lets you sort the moves in either ascending or descending order.
- When someone wins, highlight the three squares that caused the win.

##### tag
- v2.0  game displayed at /index.html
- v1.8  game displayed at /game

##### cite
- [wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html)
