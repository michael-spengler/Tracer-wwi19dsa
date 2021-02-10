<template>
  <div>
    <br /><br />
    <img
      class="logo"
      src="@/assets/img/qr_code-24px.svg"
      height="70"
      alt="error picture not available"
    />
    <br />
    <h2 class="h2">QR-Code erstellen</h2>
    <div>
      <br />
      <p class="p">
        Bitte geben Sie die durschnitliche Verweildauer Ihrer Kunden in Minuten an. Diese
        wird benötigt um abschätzen zu können welche Kunden bei einer möglichen Infektion
        kontaktiert werden müssen.
      </p>
      <br>
      <div style="margin: 50px">
        <input type="number" placeholder="Verweildauer in Minuten" v-model="avgTime" />
      </div>
    </div>
    <div>
      <div class="homescreen_button">
        <v-btn color="#676767" dark width="85%" v-on:click="to_generate">
          Qr-Code erzeugen
        </v-btn>

      </div>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>
import tab_bar from "@/components/tab_bar";
import cuid from 'cuid'

export default {
  name: "create_event",
  components: { tab_bar },
  data() {
    return {
      avgTime: null,
    }
  },
methods: {
    to_generate() {
      console.log(this.avgTime);
      console.log(String(cuid()));
      if (this.avgTime == null){
        this.avgTime = 20
      }
      this.$router.push({ path: "/qr_generator/" + String(cuid()) + ":" + String(this.avgTime) }); //hier daten übergeben
    },
  },
};
</script>

<style scoped>
.h2 {
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}

.p {
  font-family: Roboto;
  color: #676767;
  margin: 10px;
  text-align: center;
}
</style>
