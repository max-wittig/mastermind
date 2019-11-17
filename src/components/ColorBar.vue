<template>
  <div offset="5">
    <b-button-group>
      <div v-for="color in this.colors" :key="`color-${color}`">
        <button
          v-if="isSelected(color)"
          :class="[color, 'selected']"
        ></button>
        <button 
          v-else
          :class="color"
          @click="colorSelected(color)"
        ></button>
      </div>
    </b-button-group>
  </div>
</template>
<script>
import { COLORS } from "../constants";

export default {
  name: "ColorBar",
  data: function() {
    return {
      colors: COLORS,
    };
  },
  methods: {
    colorSelected(color) {
      this.$store.commit("SET_SELECTED_COLOR", color);
    },
    isSelected: function(color) {
      return color === this.$store.state.selectedColor;
    }
  }
};
</script>
<style scoped>
button {
  border: 1px solid black;
  min-height: 2em;
  min-width: 2em;
  height: 4vh;
  margin: 5px;
  outline: none !important;
}
.group {
  border: 1px solid gray;
  justify-content: center;
}
.selected {
  border: 2px dashed black;
}
</style>
