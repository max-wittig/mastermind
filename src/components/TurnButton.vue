<template>
  <div>
    <b-button @click="nextTurn">
      Next turn
    </b-button>
    <b-modal hide-footer id="cannot-continue">
      <p>Not all cells are filled out</p>
      <b-button class="mt-3" block @click="$bvModal.hide('cannot-continue')">Continue</b-button>
    </b-modal>
  </div>
</template>
<script>
import { retrieveData, getResult } from "../gamelogic";

export default {
  name: "TurnButton",
  methods: {
    nextTurn() {
      if (this.$store.state.gameOver) {
        return;
      }
      if (!this.$store.getters.rowFinished) {
        this.$bvModal.show("cannot-continue");
        return;
      }

      const data = retrieveData(this.$store);
      const result = getResult(data);
      this.$store.commit("NEXT_TURN", result);
    },
  }
};
</script>
<style scoped>
div {
  margin-bottom: 2vh;
}
</style>
