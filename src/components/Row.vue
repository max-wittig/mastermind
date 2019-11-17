<template>
  <div>
    <b-row>
      <b-col cols="1" xl="2">
        <div v-if="isCurrent">
          ►►
        </div>
      </b-col>
      <b-col cols="2" xl="2" v-for="n in totalCells" :key="`cell-${rowNumber}-${n}`">
        <Cell :row-number="rowNumber" :cell-number="n" />
      </b-col>
      <b-col cols="3" xl="2">
        <div v-if="!isCurrent">
          <Indicator
          v-if="result"
          :correct="result.correct"
          :wrong="result.wrongPosition"
          :none="totalCells-result.correct-result.wrongPosition"
          />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Indicator from "./Indicator.vue";
import Cell from "./Cell.vue";

export default {
  name: "Row",
  components: {
    Cell,
    Indicator,
  },
  data: function() {
    return {
      totalCells: 4,
      correct: 0,
      wrongPosition: 0,
    };
  },
  props: {
    rowNumber: {
      type: Number,
      default: -1,
      required: true
    }
  },
  computed: {
    isCurrent: function() {
      return this.$store.state.currentRow === this.rowNumber;
    },
    resultTest: function() {
      return this.$store.state.results[this.rowNumber];
    },
    result: function() {
      const results = this.$store.state.results[this.rowNumber];
      if (results) {
        return results
      }
      return null;
    }
  },
};
</script>
<style scoped>
p {
  font-size: 10px;
}
</style>
