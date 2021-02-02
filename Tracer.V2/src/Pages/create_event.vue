<template>
  <div>Tracer Event erstellen
    <div>
      <button_basicstyle :onclick="to_generate">Qr-Code erzeugen</button_basicstyle>
    </div>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";

export default {
  name: "create_event",
  components: {button_basicstyle},
  methods:{
    to_generate(){
      this.$router.push({path:'/qr_generator'})
    },
  },
}
</script>

<style scoped>

</style>
