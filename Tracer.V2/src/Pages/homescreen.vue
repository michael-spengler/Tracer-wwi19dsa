<template>
  <div>
    <div class="logo">
      <img src="@/assets/Tracer_icon_final.png"
           width="80" height="80" alt="error picture not available"/>
    </div>
      <v-btn
          top
          right
          fixed
          fab
          small
          color="white"
          :onclick="to_settings"
          class="settings">
        <v-icon dark>
          mdi-settings
        </v-icon>
      </v-btn>
    <div>
      <navigation_bar></navigation_bar>
    </div>
    <div>
      <setting_button :onclick="to_settings">Settings</setting_button>
    </div>
    <div class="text-center">
      <button_basicstyle :onclick="to_tracerEvent">Tracer Event erstellen</button_basicstyle>
    </div>
    <div class="text-center">
      <button_basicstyle :onclick="to_reportcase">Fall melden</button_basicstyle>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>

import navigation_bar from "@/components/navigation_bar";
import setting_button from "@/components/setting_button";
import button_basicstyle from "@/components/button_basicstyle";
import tab_bar from "@/components/tab_bar";

export default {
  name: "homescreen",
  components: {tab_bar, button_basicstyle, setting_button, navigation_bar},
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
  data () {
    return {
      tab: null,
    }
  },
}

</script>

<style scoped>
.settings{
  padding: 20px 20px;
}
</style>