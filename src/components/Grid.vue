<template>
  <div>
    <b-container v-for="n in rows" :key="`row-${n}`">
      <Row :row-number=n />
    </b-container>
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  name: 'Grid',
  components: {
    Row
  },
  data: function() {
    return {
      "rows": 12,
    }
  }
}
</script>
