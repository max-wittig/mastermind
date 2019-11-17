<template>
  <div>
    <font-awesome-icon :icon="['fas', 'circle']"
    v-for="c in correct"
    :key="`correct-${c}`"
    />
    <font-awesome-icon :icon="['fas', 'circle']"
    v-for="c in wrong"
    :key="`wrong-${c}`"
    :style="{ color: 'white' }"
    />
    <font-awesome-icon :icon="['fas', 'ban']"
    v-for="c in none"
    :key="`none-${c}`"
    :style="{ color: 'white' }"
    />
  </div>
</template>
<script>
export default {
  name: "Indicator",
  props: {
    correct: {
      type: Number,
      default: 0,
      required: true,
    },
    wrong: {
      type: Number,
      default: 0,
      required: true,
    },
    none: {
      type: Number,
      default: 0,
      required: true,
    }
  }
};
</script>
<style scoped>
div {
  border: 1px solid black;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 2em;
  min-width: 2em;
}
font-awesome-icon {
  align-content: center;
}
</style>
