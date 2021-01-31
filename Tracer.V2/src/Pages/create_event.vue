<template>
  <div>Tracer Event erstellen
   <div>
     <button_basicstyle class="buttonbasic"  v-on:click="onclick">
      Freunde hinzufügen
     </button_basicstyle>
   </div>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";

export default {
name: "create_event",
  components: {button_basicstyle}
}
</script>

<style scoped>

</style>