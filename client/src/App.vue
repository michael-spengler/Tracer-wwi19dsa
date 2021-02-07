<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
