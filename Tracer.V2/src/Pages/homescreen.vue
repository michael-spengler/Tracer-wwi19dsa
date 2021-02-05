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
          plain
          color="white"
          v-on:click="to_settings">
        <v-icon dark>
          mdi-settings
        </v-icon>
      </v-btn>
    </div>

    <div class="card">
      <v-card>
        <v-col align-self="center">
          <v-card

              color="#287A42"
              dark


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
      <v-btn
             color= "#99D7F0"
             dark
             v-on:click="to_reportcase"
        >
        Report a Case
      <v-icon>mdi-alert-plus-outline</v-icon>
      </v-btn>
    </div>
    <tab_bar></tab_bar>
    <div>
      <vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>
    </div>
  </div>
</template>

<script>



import tab_bar from "@/components/tab_bar";
//import VuePullRefresh from 'vue-pull-refresh';

export default {
  name: "homescreen",
  components: {tab_bar, /*VuePullRefresh,*/},
  methods: {

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
      //this.$router.push({path: '/create_event'})
    },
    to_settings() {
      this.$router.push({path: '/settings'});
      //Experimental: data can be sent to backend via fetch
      /*fetch('http://localhost:3000/Tracer/{"locID":"SentFromVueJS","currentTime":"2021-02-04 18:42:36","status":false,"risk":0}').then((response) => {
        if (response.ok) {
          console.log("Data was successfully added to server.")
          db.collection("Buffer").doc(key).delete()
          return response.json();
        } else {
          throw new Error('Something went wrong, try again later.');
        }
      })
      //this.$router.push({path: 'http://localhost:3000/Tracer/{"locID":"SentFromVueJS","currentTime":"2021-02-04 18:42:36","status":false,"risk":0}'}) */
    },
    /*onRefresh: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 1000);
      });
    },*/

    /*risk_calculation(){
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