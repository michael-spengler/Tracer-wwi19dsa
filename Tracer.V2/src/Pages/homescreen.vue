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

    <div class="card">
      <v-card>
        <v-col cols="12">
          <v-card

              color="#287A42"
              dark
              v-if="risk"
          >
            <v-card-title class="align-content-center">
              Risikobewertung
            </v-card-title>

            <v-card-subtitle>Status: Super Toggo gesund<br>
              last scan: XX.XX.XXXX<br>
              last check: XX.XX.XXXX
            </v-card-subtitle>
          </v-card>

        </v-col>

        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
        >
        </v-col>
      </v-card>
    </div>
    <div class="homescreen_button">
      <button_basicstyle :onclick="to_tracerEvent">Create Tracer Event</button_basicstyle>
    </div>
    <div class="homescreen_button">
      <button_basicstyle :onclick="to_reportcase">Call a case</button_basicstyle>
    </div>
    <tab_bar></tab_bar>
    <div>
      <vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>
    </div>
  </div>
</template>

<script>


import button_basicstyle from "@/components/button_basicstyle";
import tab_bar from "@/components/tab_bar";
import VuePullRefresh from 'vue-pull-refresh';

export default {
  name: "homescreen",
  components: {tab_bar, button_basicstyle, VuePullRefresh,},
  methods: {

    to_tracerEvent() {
      this.$router.push({path: "/create_event"})
    },
    to_reportcase() {
      this.$router.push({path: "/report_case"})
    },
    startroute() {
      this.$router.push({path: '/'});
    },
    scanroute() {
      this.$router.push({path: '/scanpage'});
    },
    eventroute() {
      this.$router.push({path: '/create_event'})
    },
    to_settings() {
      this.$router.push({path: '/settings'});
    },
    onRefresh: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 1000);
      });
    },

    /*risk(){
      var alert;
      alert = 0
      if(alert == 1){
        document.getElementById("risk").style.color = '#bc1200'
      }
      else{
        document.getElementById("risk").style.color = '#287A42'
      }
    },*/


    data() {
      return {
        tab: null,
      }
    },
  }
}

</script>

<style scoped>
.logo {
  position: fixed;
  float: left;
}

.top {
  float: top;
  position: fixed;
}

.homescreen_button {
  float: bottom;
}

.card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}


</style>