<template>
  <v-bottom-navigation
       v-model="value"
       grow
       class="tab_bar"
  >

    <v-btn value="home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="scan">
      <span>Scan</span>

      <v-icon>mdi-camera</v-icon>
    </v-btn>

    <v-btn value="event">
      <span>Event</span>

      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: "Tab_bar",
  methods:{
    startroute(){
      this.$router.push({path: '/'});
    },
    scanroute(){
      this.$router.push({path: '/scanpage'});
    },
    eventroute(){
      this.$router.push({path: '/create_event'})
    }
  },
  data: () => ({ value: 'recent' }),
}
</script>

<style scoped>
.tab_bar{
  position: fixed;
  bottom: 0;
  float: bottom;
}
</style>