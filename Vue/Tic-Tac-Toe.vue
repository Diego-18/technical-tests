/*Vue Tic Tac Toe
We provided some simple Vue.js template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

You should also implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board. You should also not be able to override the other players move during the game.

You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.*/

<template>
  <div id="app">
    <div class="status">{{ status }}</div>
    <div class="status">Moves: {{ moves }}</div>
    <button id="reset" @click="resetGame" >Reset</button>
    <template >
      <div class="row">
        <button v-for="(square, index) in squares" @click="updateStatus($event, index)" class="square">{{square.value}}</button>
      </div>
    </template>
  </div>
</template>

<script>
  class Square {
    constructor() {
      this.value = null
    }
  }
  export default {
    name: "App",
    data() {
      return {
        status: 'Next player: X',
        currentTurn: 'X',
        squares: Array(9).fill().map(s => new Square()),
        moves: 0,
        inProgress: true
      };
    },
    computed: {
      winner: function() {
        return calculateWinner(this.squares);
      }
    },
    methods: {
      updateStatus(event, i) {
        if(!this.squares[i].value && this.inProgress) {
          this.squares[i].value = this.currentTurn;
          if(this.winner) {
            this.status = "Player " + this.winner + " is the win!";
            this.inProgress = false;
          } else {
            this.currentTurn == 'X'? this.currentTurn = 'O': this.currentTurn = 'X';
            this.status = "Next player: " + this.currentTurn;
            this.moves++;
            if(this.moves == 9) {
              console.log("It's a draw!");
            }
          }
        }
      },
      resetGame() {
        this.status = 'Next player: X';
        this.currentTurn = 'X';
        this.squares = Array(9).fill().map(s => new Square());
        this.moves = 0;
        this.inProgress = true;
      }
    }
  };
  function calculateWinner(squares) {
    const winnerCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0; i<winnerCombinations.length; i++) {
      const [a,b,c] = winnerCombinations[i];
      let squareA = squares[a];
      let squareB = squares[b];
      let squareC = squares[c];

      if(squareA.value && squareA.value == squareB.value && squareA.value == squareC.value) {
        return squareA.value;
      }
    };
    return null;
  }
</script>

<style>
  .status {
    font-size: 20px;
  }
  #reset {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    width: 400px;
  }
  .square {
    height: 33.3%;
    width: 33.3%;
  }
</style>