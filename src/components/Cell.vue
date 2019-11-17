<template>
  <div>
    <b-container>
      <div @click="cellClicked(rowNumber)">
        <p :class="color"></p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    cellNumber: {
      type: Number,
      default: -1,
      required: true
    },
    rowNumber: {
      type: Number,
      default: -1,
      required: true
    }
  },
  data: function() {
    return {
      color: "",
      game: this.$store.state.game,
    };
  },
  methods: {
    cellClicked(row) {
      if (row !== this.$store.state.currentRow) {
        return;
      }
      this.$store.commit("SET_CURRENT_COMBINATION", {
        cell: this.cellNumber,
        selectedColor: this.$store.state.selectedColor
      });
      this.color = this.$store.getters.currentCombination(this.cellNumber);
    }
  },
  created() {
    this.$store.watch(
      (state) => state.game,
      (newValue) => {
        this.color = "";
        this.game = newValue;
      }
    )},
};
</script>

<style scoped>
div {
  user-select: none;
}
p {
  border: 1px solid black;
  min-height: 2em;
  min-width: 2em;
}
</style>
