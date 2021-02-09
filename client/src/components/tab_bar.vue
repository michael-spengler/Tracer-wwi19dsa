<template>
  <v-bottom-navigation
      class = "tab_bar"
      grow
      fixed
      app
      v-model="value"
  >

    <v-btn to="/" value="home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/scanpage" value="scan">
      <span>Scan</span>

      <v-icon>mdi-camera</v-icon>
    </v-btn>

    <v-btn to="/create_event" value="event">
      <span>Event</span>

      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: "Tab_bar",
  data: () => ({ value: "home" }),
}
</script>

<style scoped>
.tab_bar{
  float: bottom;
  position: fixed;
}
</style>