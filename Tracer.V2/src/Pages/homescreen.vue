<template>
  <div>
    <div class="top">
      <div><img class="logo" src="@/assets/Tracer_icon_vertical_grey.svg"
           height="120" alt="error picture not available"/>
        </div>
      <div class="header">
        Tracer
      </div>
      <div>
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
    </div>
  <!-- <span class="span"></span> -->
    <br><br><br><br><br>
    <div class="card">
      <img src=".\Sustainable Lifestyle.svg" style="height:200px"/>
          <v-card
              color="#287A42"
              dark
              height="100%"
              width="100%"
              elevation="5"
              outlined=False
              rounded
          >
            <v-card-title class="align-content-center">
              <br><br><br>
              Risikobewertung
            </v-card-title>

            <v-card-subtitle>Status: Super Toggo gesund<br><br><br>
              last scan: XX.XX.XXXX<br><br><br>
              last check: XX.XX.XXXX
              <br><br>
            </v-card-subtitle>
          </v-card>
    </div>
    <span class="untercard"></span>
    <div class="homescreen_button">
      <v-btn
             color= "#676767"
             dark
             width="85%"
             v-on:click="to_reportcase">
      <v-icon>mdi-alert-plus-outline</v-icon>
        Report a Case
      </v-btn>
      </div>
      <br>
      <div class="homescreen_button">
      <v-btn
          color= "#676767"
          dark
          width="85%"
          v-on:click="to_app_information">
        App Information
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
    to_app_information() {
      this.$router.push({path: "/app_information"})

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
  text-align: left;
  float: top;
  position: fixed;
  width: 100%;
}

.homescreen_button {
  float: bottom;
}

.card {
  display: block;
  margin-left: 30px;
  margin-right: 30px;
  align-items: center;
}
.header{
  padding: 23px;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  color: #676767;

}
.span{
  display:block;
  height:200px;
  width:100%;
  background:white;
}
.untercard{
  display:block;
  height:50px;
  width:100%;
  background:white;
}
</style>