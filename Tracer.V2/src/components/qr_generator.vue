<template>
  <div>
  <qrcode-vue :value="value" :size="size" level="H" />
    <div>

    </div>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
  methods:{

  },
  data() {
    return {
      value: 'https://example.com',
      size: 100,

    }
  },
  components: {
    QrcodeVue,
  },
}
</script>