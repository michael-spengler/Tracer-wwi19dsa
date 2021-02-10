<template>
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div>
      <img
        src="@/assets/img/check_circle-24px.svg"
        height="140"
        alt="error picture not available"
      />
    </div>
    <h2 class="h2">
      Scan
    </h2>
    <div>
      <v-btn v-on:click="go_home">
        Zurück
      </v-btn>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "scan_success",
  methods: {
    go_home() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.h2 {
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}
</style>
