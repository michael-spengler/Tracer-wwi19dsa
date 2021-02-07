<template>
  <div>
    <br><br><br><br><br><br><br><br><br><br><br>
    <div><img src="@/assets/img/check_circle-24px.svg"  height="140" alt="error picture not available" /></div>
    <h2> Scann Erfolgreich </h2>
    <div><button_basicstyle :onclick="go_home">Zurück</button_basicstyle>
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
.h2{
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}
.span{
  display:block;
  height:200px;
  width:100%;
  background:white;
}
</style>