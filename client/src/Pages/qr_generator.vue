<template>
  <div>
    <span class="span_100"></span>
    <qrcode-vue :value="id" :size="size" level="H" />
    {{ id }}
    <div>
      <span class="span_100"></span>
      <h2 class="h2">Ihr QR-Code wurde erzeugt.</h2>
      <br />
      <p class="p_left">Diesen können Sie jetzt abspeichern und teilen.</p>
    </div>
    <div>
      <button_std :onclick="go_home">Zurück</button_std>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import button_std from "@/components/button_std";

export default {
  name: "qr_generator",
  components: { QrcodeVue, button_std },
  methods: {
    go_home() {
      console.log("start");
      console.log(String(this.id));
      this.$router.push({ path: "/" }); //route to homescreen
    },
  },
  data() {
    return {
      id: 0,     //Value of the QR-Code
      size: 200, //Size of the QR-Code
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style scoped src="@/assets/Stylesheet.css"></style>
