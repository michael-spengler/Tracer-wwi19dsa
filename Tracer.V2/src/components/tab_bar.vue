<template>
  <v-bottom-navigation v-model="value">
    <v-btn v-on:click="startroute" value="home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn v-on:click="scanroute" value="scan">
      <span>Scan</span>

      <v-icon>mdi-camera</v-icon>
    </v-btn>

    <v-btn v-on:click="eventroute" value="event">
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

</style>