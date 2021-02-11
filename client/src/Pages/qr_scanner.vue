<template>
  <div class="qr-scanner">
    <h1 v-if="!initialized">Loading the Camera...</h1>
    <qrcode-stream v-if="!payload" @decode="onDecode" @init="onInit"></qrcode-stream>

    <h1 v-if="error">{{ error }}</h1>

    <tab_bar></tab_bar>
  </div>
</template>

<script>
import tab_bar from "@/components/tab_bar";
import { storeScan } from "../api/sendScanData.js";
import { initDB } from "../api/localBase.js";

const db = initDB();

export default {
  name: "QrScanner",
  components: { tab_bar },
  data() {
    return {
      initialized: false,
      error: null,
      payload: null,
    };
  },
  methods: {
    onDecode(payload) {
      this.payload = payload;
      storeScan(db, this.payload);
      this.$router.push({ path: "/scan_done" });
    },
    async onInit(promise) {
      try {
        await promise;
        this.initialized = true;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
  },
};
</script>

<style scoped src="@/assets/Stylesheet.css">

</style>
