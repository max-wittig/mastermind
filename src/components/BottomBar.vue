<template>
  <div>
    <p>{{ gitInfo }}</p>
  </div>
</template>
<script>
export default {
  name: "BottomBar",
  computed: {
    gitInfo: function() {
      const commit = process.env.VUE_APP_GIT_COMMIT;
      const buildDate = process.env.VUE_APP_BUILD_DATE;
      return commit + buildDate;
    }
  }
};
</script>
