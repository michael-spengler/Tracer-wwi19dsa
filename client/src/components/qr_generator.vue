<template>
  <div>
    <span class="span"></span>
    <qrcode-vue :value="id" :size="size" level="H" />
    {{ id }}
    <div>
      <span class="span"></span>
      <h2 class="h2">
        Ihr QR-Code wurde erzeugt.
      </h2>
      <br />
      <p class="p">
        Diesen können Sie jetzt abspeichern und teilen.
      </p>
    </div>
    <div>
      <v-btn v-on:click="go_home" color="#676767" dark>
        Zurück
      </v-btn>
    </div>
  </div>
</template>

<script>

import QrcodeVue from "qrcode.vue";


export default {
  name: "qr_generator",
  components: {QrcodeVue},
  methods: {
    go_home(){
      console.log("start")
      console.log(String(this.id))
      this.$router.push({path: '/'})
              }
    },
  data() {
    return {
      id: 0,
      size: 200,
    };
  },
  created(){
    this.id = this.$route.params.id;
  }
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
