<template>
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div>
      <img
        src="@/assets/img/check_circle-24px.svg"
        height="140"
        alt="error picture not available"
      />
    </div>
    <h2 class="h2">Scan Erfolgreich</h2>
    <div>
      <button :onclick="go_home">Zurück</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import button from "@/components/button";
export default {
  name: "scan_success",
  components: { button },
  methods: {
    go_home() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.h2 {
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}
</style>
