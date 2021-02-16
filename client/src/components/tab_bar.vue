//vuetify bottom navigation bar
<template>
  <v-bottom-navigation
      class = "tab_bar"
      grow
      fixed
      app
  >
    <!-- class = Applies style from stylesheet -->
    <!-- grow = elements of the bottom navigation bar grow, to fill the max width -->
    <!-- fixed = the position of the bottom navigation is static and is not changed by navigating -->
    <!-- app = Designates the component as part of the application layout -->

  <!-- Homebutton -->
    <v-btn to="/" value="home">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

  <!-- Scanbutton -->
    <v-btn to="/scanpage" value="scan">
      <span>Scan</span>
      <v-icon>mdi-camera</v-icon>
    </v-btn>

  <!-- Create Event Button -->
    <v-btn to="/create_event" value="event">
      <span>Event</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: "Tab_bar",
  data: () => ({ value: 1 }),                  //defines value for switching the active button
}
</script>

<style scoped src="@/assets/Stylesheet.css">   /*  refers to external stylesheet  */

</style>