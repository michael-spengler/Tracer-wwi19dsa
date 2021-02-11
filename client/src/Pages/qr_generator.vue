<template>
  <div>
    <span class="span"></span>
    <qrcode-vue :value="id" :size="size" level="H" />
    {{ id }}
    <div>
      <span class="span_100"></span>
      <h2 class="h2">
        Ihr QR-Code wurde erzeugt.
      </h2>
      <br />
      <p class="p_left">
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

<style scoped src="@/assets/Stylesheet.css">

</style>
