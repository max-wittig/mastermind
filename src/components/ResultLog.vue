<template>
  <div>
    {{ logString }}
    <br />
    {{ correctResult }}
  </div>
</template>
<script>
export default {
  name: "ResultLog",
  computed: {
    logString: function() {
      const currentRow = Number(this.$store.state.currentRow);
      if (!this.$store.state.results[currentRow+1]) {
        return "";
      }
      let log = "";
      log += `Correct: ${this.$store.state.results[currentRow+1].correct}`
      log += " | "
      log += `On wrong position: ${this.$store.state.results[currentRow+1].wrongPosition}`
      return log;
    },
    correctResult: function() {
      return this.$store.state.correctCombination;
    }
  },
};
</script>
