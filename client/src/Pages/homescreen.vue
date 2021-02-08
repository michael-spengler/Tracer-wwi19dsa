<template>
  <div>
    <div class="top">
      <div>
        <img
          class="logo"
          src="@/assets/img/Tracer_icon_final.png"
          width="70"
          height="70"
          alt="error picture not available"
        />
      </div>
      <div class="header">Tracer</div>
      <div>
        <v-btn small top right fixed fab plain color="white" v-on:click="refresh">
          <v-icon dark>
            <!-- mdi-settings -->
            mdi-cached
          </v-icon>
        </v-btn>
      </div>
    </div>
    <!-- <span class="span"></span> -->
    <!-- color="#c94133 287A42 99d7f0" -->

    <br /><br /><br /><br />
    <div class="card static"
         v-bind:style="[greenCard, dangerCard]"
    >
      <img src="@/assets/img/undraw_medicine_b1ol_blue.svg" style="height: 200px" />
      <v-card
        color="#287A42"
        dark
        height="100%"
        width="100%"
        elevation="5"
        rounded
      >
        <v-card-title class="align-content-center">
          Risikobewertung
          <br /><br />
        </v-card-title>

        <v-card-subtitle>
          <div>Status: {{ status }}</div>
          <hr style="color: white">
          <br>
          <div>Risiko: {{ risk }} Risikobegegnung(en)</div>
          <hr style="color: white" />
          <br />
          <div>Last Check: {{ date }}</div>
          <br /><br /><br />
        </v-card-subtitle>
      </v-card>
    </div>
    <span class="untercard"></span>
    <div class="homescreen_button">
      <v-btn color="#676767" dark width="85%" v-on:click="to_reportcase">
        <v-icon>mdi-alert-plus-outline</v-icon>
        Infektion melden
      </v-btn>
    </div>
    <br />
    <div class="homescreen_button">
      <v-btn color="#676767" dark width="85%" v-on:click="to_app_information">
        App Informationen
      </v-btn>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>
import tab_bar from "@/components/tab_bar";
// import VuePullRefresh from 'vue-pull-refresh';
import { initDB } from "../api/localBase.js";
import { checkVariables } from "../api/checkVariables.js";
//import {checkRisk} from "../api/checkRisk.js"
import { reportCase } from "../api/reportCase.js";
import { clearBuffer } from "../api/sendScanData.js";


const db = initDB()
db.config.debug = false

export default {

  name: "homescreen",
  components: { tab_bar },
  data() {
    return {
        tab: null,
        risk : 0,
        status: "gesund",
        date: "refresh to be up to date",
      };
    },
  methods: {
    async checkRisk(db){
    console.log("Checking risk... ")
    var idList = [];

    //reporting cases to db
      db.collection('TracerID').get().then(TracerID => {
        TracerID.forEach(element => {
          idList.push(element.id)
        });  
          return idList
        }).then(idList => 
          fetch(`http://localhost:3000/RiskCheck/${JSON.stringify({"id":idList})}`).then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong, try again later.');
            }
          }
        ).then(riskVal =>{
        this.risk = riskVal.risk
      })
      )
    },
    to_reportcase() {
      reportCase(db)
      //this.$router.push({ path: "/report_case" });
    },
    startroute() {
      this.$router.push({ path: "/" });
    },
    scanroute() {
      this.$router.push({ path: "/scanpage" });
    },
    eventroute() {
      //this.$router.push({path: '/create_event'})
    },
    to_app_information() {
      this.$router.push({ path: "/app_information" });
    },
    async refresh() {
      await clearBuffer(db)
      await checkVariables(db)
      this.date = new Date().toISOString().slice(0, 19).replace('T', ' '),
      //checkStatus
      await db.collection('Variables').doc("1").get().then(document => {return document.status}).then(
        statusVal => {
            if (statusVal == false){
                this.status = "Gesund"
            } else if (statusVal == true) {
            this.status = "Infiziert"
          }
        }
      )
      //checkRisk
      await this.checkRisk(db)
    },
    

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
    
      data: {
        greenCard: {
          color: "green"
        },
        dangerCard: {
          color: "red"
        }
      }
    },
};

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
  padding: 5px;
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
.header {
  padding: 23px;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  color: #676767;
}
.span {
  display: block;
  height: 200px;
  width: 100%;
  background: white;
}
.untercard {
  display: block;
  height: 30px;
  width: 100%;
  background: white;
}
</style>
