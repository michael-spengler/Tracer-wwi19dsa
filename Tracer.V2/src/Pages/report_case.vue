<template>
  <div>Fall melden
    <div>
      <button_basicstyle :onclick="caseroute">Formular ausfüllen</button_basicstyle>
    </div>
  </div>
</template>
<script>
import button_basicstyle from "@/components/button_basicstyle";

export default {
  name: "Fall melden",
  components: {button_basicstyle},
  methods: {
    caseroute() {
      this.$router.push({path: '/fill_in_formular'});
    },

  },
}

</script>

<style scoped>

</style>