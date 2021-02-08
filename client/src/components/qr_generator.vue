<template>
  <div>
  <qrcode-vue :value="value" :size="size" level="H" />
    <div>

    </div>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
//import cuid from 'cuid'

export default {
  methods:{

  },
  data() {
    return {
      value: "test",//(String(cuid()) + ":" + String(this.$route.avgTime)),//hier daten empfangen
      size: 100,
    }
  },
  components: {
    QrcodeVue,
  },
}
</script>