<template>
  <div>
    <span class="span"></span>
    <qrcode-vue :value="value" :size="size" level="H" />
    <div>
      <span class="span"></span>
      <h2>Ihr QR-Code wurde erzeugt.</h2>
      <br />
      <p>Diesen können Sie jetzt abspeichern und teilen.</p>
    </div>
    <div><button_basicstyle :onclick="go_home">Zurück</button_basicstyle></div>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";
import QrcodeVue from "qrcode.vue";
import cuid from 'cuid'

console.log("start")

this.get_attributes()
export default {
  name: "qr_generator",
  components: {QrcodeVue, button_basicstyle},
  methods: {
    go_home(){
      this.$router.push({path: '/'})
    },
    get_attributes(){
      console.log("get_attributes")
      console.log(cuid())
      console.log(this.$router)
    }
    },
  data() {
    return {
      value: "100:10", //(String(cuid()) + ":" + String(this.$route.avgTime)),//hier daten empfangen
      size: 200,
    };
  },
};
</script>

<style scoped>
.span {
  display: block;
  height: 100px;
  width: 100%;
  background: white;
}
.h2 {
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}
.p {
  font-family: Roboto;
  color: #676767;
  margin: 30px;
  text-align: left;
}
</style>
