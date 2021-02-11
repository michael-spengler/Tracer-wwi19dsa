<template>
  <div>
    <span class="span_100"></span>
    <div>
      <img src="@/assets/img/check_circle-24px.svg"  height="140" alt="error picture not available" />
    </div>
    <h2 class="h2">
      Erfolgreich gemeldet
    </h2>
    <br>
    <p class="p_center_30">
      Ihre möglichen Kontakte werden nun anonym informiert.
    </p>
    <div>
      <button_std :onclick="go_home">Zurück</button_std>
    </div>
  </div>
</template>

<script>

import button_std from "@/components/button_std";
export default {
  name: "scan_success",
  components: {button_std},
  methods:{
    go_home(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped src="@/assets/Stylesheet.css">

</style>