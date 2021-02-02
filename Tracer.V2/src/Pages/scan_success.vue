<template>
  <div>
    <div><img src="@/assets/scan_erfolgreich.png.png" width="1000" height="1000" alt="error"/></div>
    <div><button_basicstyle :onclick="go_home">Back to home</button_basicstyle>
    <slot></slot>
    </div>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";
export default {
  name: "scan_success",
  components: {button_basicstyle},
  methods:{
    go_home(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>