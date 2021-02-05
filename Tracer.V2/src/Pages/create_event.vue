<template>
  <div>Tracer Event erstellen
    <div>
      <button_basicstyle :onclick="to_generate">Qr-Code erzeugen</button_basicstyle>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";
import tab_bar from "@/components/tab_bar";

export default {
  name: "create_event",
  components: {tab_bar,button_basicstyle},
  methods:{
    to_generate(){
      this.$router.push({path:'/qr_generator'})
    },
  },
}
</script>

<style scoped>

</style>
