<template>
  <div>
    <b-button @click="retryGame">Retry</b-button>
  </div>
</template>
<script>
export default {
  name: "GameOverRetry",
  methods: {
    retryGame() {
      this.$store.commit("RESET_GAME");
    }
  }
};
</script>
