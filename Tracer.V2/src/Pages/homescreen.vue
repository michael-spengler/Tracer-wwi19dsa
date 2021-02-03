<template>
  <div>
    <div class="top">
        <img class="logo" src="@/assets/Tracer_icon_final.png"
             width="70" height="70" alt="error picture not available"/>
        <v-btn
          small
          top
          right
          fixed
          fab
          color="white"
          v-on:click="to_settings">
        <v-icon dark>
          mdi-settings
       </v-icon>
    </v-btn>
    </div>
    <div class="text-center">
      <button_basicstyle :onclick="to_tracerEvent">Create Tracer Event</button_basicstyle>
    </div>
    <div class="text-center">
      <button_basicstyle :onclick="to_reportcase">Call a case</button_basicstyle>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>



import button_basicstyle from "@/components/button_basicstyle";
import tab_bar from "@/components/tab_bar";

export default {
  name: "homescreen",
  components: {tab_bar, button_basicstyle,},
  methods: {

    to_tracerEvent() {
      this.$router.push({path: "/create_event"})
    },
    to_reportcase() {
      this.$router.push({path: "/report_case"})
    },
    startroute(){
      this.$router.push({path: '/'});
    },
    scanroute(){
      this.$router.push({path: '/scanpage'});
    },
    eventroute(){
      this.$router.push({path: '/create_event'})
    },
    to_settings(){
      this.$router.push({path: '/settings'});
    },
  },
  data () {
    return {
      tab: null,
    }
  },
}

</script>

<style scoped>
.logo{
  position: fixed;
  float: left;
}
.top{
  float: top;
  position: fixed;
}
.text-center{
  float: bottom;
  position: fixed;
}
</style>