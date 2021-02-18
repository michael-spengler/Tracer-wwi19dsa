<template>
  <div>
    <div class="top">
      <div>
        <img
          class="logo"
          src="@/assets/img/Tracer_icon_final.png"
          width="70"
          height="70"
          alt="Logo"
        />
      </div>
      <div class="header">Tracer</div>
      <div class="vld-parent">
        <v-btn small top right fixed fab plain color="white" v-on:click="doAjax, refresh ">
          <v-icon dark> mdi-cached </v-icon>
          <loading :active.sync="isLoading"
                   :can-cancel="true"
                   :on-cancel="onCancel"
                   :is-full-page="fullPage"
                   :lock-scroll="true"
          ></loading>
        </v-btn>
      </div>
    </div>
    <span class="span_100"></span>
    <div class="card">
      <img
        src="@/assets/img/undraw_medicine_b1ol_blue.svg"
        style="height: 200px"
        alt="Image Doctor Blue"
      />
      <br /><br />
      <v-card dark height="100%" width="100%" elevation="5" id="riskCard" rounded>
        <v-card-title class="center">
          Risikobewertung
          <br /><br />
        </v-card-title>

        <v-card-subtitle>
          <div>Status: {{ status }}</div>
          <br />
          <hr style="color: white" />
          <br />
          <div>Risiko: {{ risk }} Risikobegegnung(en)</div>
          <br />
          <hr style="color: white" />
          <br />
          <div>Last Check: {{ date }}</div>
          <br /><br />
        </v-card-subtitle>
      </v-card>
    </div>
    <span class="untercard"></span>
    <div class="homescreen_button">
      <button_std :onclick="to_reportcase"
        ><v-icon>mdi-alert-plus-outline</v-icon> Infektion melden</button_std
      >
    </div>
    <br />
    <div class="homescreen_button">
      <button_std :onclick="to_app_information">App Informationen</button_std>
    </div>
    <span class="span_100"></span>
    <tab_bar></tab_bar>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import button_std from "@/components/button_std";
import tab_bar from "@/components/tab_bar";
import {initDB, checkVariables, reportCase, clearBuffer, checkRisk} from "../api/deps.js";

const db = initDB();
db.config.debug = false;

export default {
  name: "homescreen",
  components: { tab_bar, button_std, Loading },
  data() {
    return {
      tab: null,
      risk: 0,
      status: "Gesund",
      date: "refresh to be up to date",
      isLoading: false,
      fullPage: true
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      },5000)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    },
    async to_reportcase() {
      await reportCase(db);
      this.$router.push({ path: "/report_case" }); //Route to report_case page
    },
    startroute() {
      this.$router.push({ path: "/" }); //Route to Homescreen
    },
    scanroute() {
      this.$router.push({ path: "/scanpage" }); //Route to Scanpage
    },
    to_app_information() {
      this.$router.push({ path: "/app_information" }); //Route to Appinformation
    },
    async refresh() {
      //clear Buffer
      await clearBuffer(db);
      
      //check Variables
      await checkVariables(db)

      //check Risk
      try {
        await checkRisk(db)
      } catch(error) {
        alert("Connection error, try again later.")
      }
      
      //set Variables
      await db
        .collection("Variables")
        .doc("1")
        .get()
        .then((localVariables) =>  {
          if (localVariables.status == false) {
            this.status = "Gesund";
          } else if (localVariables.status == true) {
            this.status = "Infiziert";
          }
          this.risk = localVariables.risk
          this.date = localVariables.lastCheck
          this.riskCalculation()
        })
    },
//Colorchange in the Riskcard
    riskCalculation() {
      if (this.status == "Infiziert") {
        document.getElementById("riskCard").style.backgroundColor = "#c94133";
      } else if (this.risk > 0) {
        document.getElementById("riskCard").style.backgroundColor = "#c96932";
      } else {
        document.getElementById("riskCard").style.backgroundColor = "#1A6624";
      }
    },
  },
};
</script>

<style scoped src="@/assets/Stylesheet.css"></style>
