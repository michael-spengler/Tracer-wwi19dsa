<template>
  <div>
    <div><navigation_bar></navigation_bar></div>
    <div><button_basicstyle :onclick="to_scanpage">Fall melden</button_basicstyle></div>
    <div><button_basicstyle :onclick="to_createEvent">Tracer Event erstellen</button_basicstyle></div>
    <div><setting_button :onclick="s_page">Settings</setting_button></div>
  </div>
</template>

<script>

import navigation_bar from "@/components/navigation_bar";
import button_basicstyle from "@/components/button_basicstyle";
import setting_button from "@/components/setting_button";

export default {
name: "homescreen",
  components: {setting_button, button_basicstyle, navigation_bar},
  methods:{
    to_scanpage(){
      this.$router.push({path: "/report_case"})
    },
    to_createEvent(){
      this.$router.push({path: "/create_event"})
    },
    s_page(){
      this.$router.push({path: "/settings"})
    }
  }
}
</script>

<style scoped>

</style>