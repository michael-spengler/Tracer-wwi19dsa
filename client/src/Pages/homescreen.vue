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
      <div>
        <v-btn small top right fixed fab plain color="white" v-on:click="refresh">
          <v-icon dark> mdi-cached </v-icon>
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
import button_std from "@/components/button_std";
import tab_bar from "@/components/tab_bar";
import { initDB } from "../api/localBase.js";
import { checkVariables } from "../api/checkVariables.js";
import { reportCase } from "../api/reportCase.js";
import { clearBuffer } from "../api/sendScanData.js";
import { backendURL } from "../api/variables.js"

const db = initDB();
db.config.debug = false;

export default {
  name: "homescreen",
  components: { tab_bar, button_std },
  data() {
    return {
      tab: null,
      risk: 0,
      status: "Gesund",
      date: "refresh to be up to date",
    };
  },
  async created() {
    await this.refresh();
  },
  methods: {
    async to_reportcase() {
      await reportCase(db);
      this.$router.push({ path: "/report_case" });
    },
    startroute() {
      this.$router.push({ path: "/" });
    },
    scanroute() {
      this.$router.push({ path: "/scanpage" });
    },
    to_app_information() {
      this.$router.push({ path: "/app_information" });
    },
    async refresh() {
      //clearBuffer
      await clearBuffer(db);
      //checkVariables
      await checkVariables(db);
      //checkStatus
      await db
        .collection("Variables")
        .doc("1")
        .get()
        .then((document) => {
          return document.status;
        })
        .then((statusVal) => {
          if (statusVal == false) {
            this.status = "Gesund";
          } else if (statusVal == true) {
            this.status = "Infiziert";
          }
        });
      //checkRisk
      await this.checkRisk(db);
      this.riskCalculation()
    },
    async checkRisk(db) {
      var idList = [];
      //reporting cases to db
      db.collection("TracerID")
        .get()
        .then((TracerID) => {
          TracerID.forEach((element) => {
            idList.push(element.id);
          });
          return idList;
        })
        .then((idList) =>
          fetch(`${backendURL}/RiskCheck/${JSON.stringify({ id: idList })}`)
            .then((response) => {
              if (response.ok) {
                this.date = new Date().toString().slice(4, 24);
                return response.json();
              } else {
                throw new Error("Something went wrong, try again later.");
              }
            })
            .then((riskVal) => {
              this.risk = riskVal.risk;
              this.riskCalculation();// in case of no internet, Card will still update
            })
        );
    },
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
