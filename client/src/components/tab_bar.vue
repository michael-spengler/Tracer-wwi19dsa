<template>
  <v-bottom-navigation
      class = "tab_bar"
      grow
      fixed
      app
      v-model="value"
      :value="value"
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
}
</script>

<style scoped>
.tab_bar{
  float: bottom;
  position: fixed;
}
</style>