<template>
  <div>
    <div class="logo">
      <img src="@/assets/Tracer_icon_vertical.svg" width="200" height="200" alt="error picture not available"/>
    </div>
    <div><navigation_bar></navigation_bar></div>
    <div><setting_button :onclick="to_settings">Settings</setting_button></div>
    <div><button_basicstyle :onclick="to_tracerEvent">Tracer Event erstellen</button_basicstyle></div>
    <div><button_basicstyle :onclick="to_reportcase">Fall melden</button_basicstyle></div>
  </div>
</template>

<script>

import navigation_bar from "@/components/navigation_bar";
import setting_button from "@/components/setting_button";
import button_basicstyle from "@/components/button_basicstyle";

export default {
  name: "homescreen",
  components: {button_basicstyle, setting_button, navigation_bar},
  methods: {
    to_settings() {
      this.$router.push({path: "/settings"})
    },
    to_tracerEvent() {
      this.$router.push({path: "/create_event"})
    },
    to_reportcase() {
      this.$router.push({path: "/report_case"})
    },
  },
}




</script>

<style scoped lang="css">

.logo{
  float: left;
}
</style>