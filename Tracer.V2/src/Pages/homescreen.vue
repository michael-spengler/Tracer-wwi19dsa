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
          color="white"
          :onclick="to_settings">
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
    <v-card>
      <v-tabs
          v-model="tab"
          background-color="white"
          icons-and-text
          centered
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab :onclick="startroute">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab :onclick="scanroute">
          Scan
          <v-icon>mdi-camera</v-icon>
        </v-tab>

        <v-tab :onclick="eventroute">
          Event
          <v-icon>mdi-plus</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="i in 3"
            :key="i"
            :value="'tab-' + i"
        >
        </v-tab-item>
      </v-tabs-items>
    </v-card>
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

</style>