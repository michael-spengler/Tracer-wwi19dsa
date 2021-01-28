<template>
  <qrcode-vue :value="value" :size="size" level="H" />
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name:'qr-scan',
  data() {
    return {
      value: 'https://example.com',
      size: 300,
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>