<template>
  <div class="outer">
    <h1 v-if="playerWon">WIN</h1>
    <div class="solution" v-else>
      <p>You've lost</p>
      <p>The right combination was</p>
      <b-container class="combination">
        <b-col offset="2" offset-xl="4">
          <b-row>
            <div
              v-for="(color, index) in correctCombination"
              :key="`lost-${color}-${index}`"
            >
              <p class="color-block" :class="color"></p>
            </div>
          </b-row>
        </b-col>
      </b-container>
    </div>
    <game-over-retry />
  </div>
</template>
<script>
import GameOverRetry from "./GameOverRetry.vue";

export default {
  name: "GameOver",
  props: {
    playerWon: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  components: {
    GameOverRetry
  },
  computed: {
    correctCombination: function() {
      return this.$store.state.correctCombination;
    }
  }
};
</script>
<style scoped>
div.outer {
  position: fixed;
  left: 35%;
  top: 35%;
  right: 50%;
  z-index: 10;
  background-color: rgb(212, 212, 212) !important;
  min-width: 30vw;
  min-height: 30vh;
  border: 2px solid black;
}
p {
  color: black;
  margin-top: 2vh;
  user-select: none;
}
p.color-block {
  min-height: 2em;
  min-width: 2em;
  margin: 2px;
  border: 1px solid black;
}
</style>
