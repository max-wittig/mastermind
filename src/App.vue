<template>
  <div id="app">
    <h1>Mastermind</h1>
    <Grid />
    <color-bar />
    <turn-button />
    <game-over :playerWon="isGameWon()" v-show="isGameOver()" />
    <!--<result-log />-->
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import ColorBar from "./components/ColorBar.vue";
import TurnButton from "./components/TurnButton.vue";
import GameOver from "./components/GameOver.vue";
//import ResultLog from "./components/ResultLog.vue";
import { NUMBER_OF_CELLS } from "./constants";

export default {
  name: "app",
  components: {
    Grid,
    ColorBar,
    TurnButton,
    GameOver
    //ResultLog,
  },
  data() {
    return {
      winRow: -10
    };
  },
  methods: {
    isGameWon() {
      const previousRow = this.$store.state.currentRow + 1;
      const results = this.$store.state.results;
      if (results && results[previousRow]) {
        if (results[previousRow].correct === NUMBER_OF_CELLS) {
          return true;
        }
      }
      return false;
    },
    isGameLost() {
      return this.$store.state.currentRow === 0;
    },
    isGameOver() {
      if (this.isGameLost() || this.isGameWon()) {
        this.$store.state.gameOver = true;
        return true;
      }
      return false;
    }
  },
  beforeMount() {
    this.$store.commit("RESET_GAME");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
