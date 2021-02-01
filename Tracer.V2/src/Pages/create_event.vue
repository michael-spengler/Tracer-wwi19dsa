<template lang="html">
  <div>
    <div>Tracer Event erstellen</div>
      <div>
       <button_basicstyle class="buttonbasic"  v-on:click="onclick">
        Location auswählen
      </button_basicstyle>
        <button_confirm class="buttonconfirm"  v-on:click="onclick">
        Event erstellen
        </button_confirm>
    </div>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";
import button_confirm from "@/components/confirm_buttonstyle";

export default {
name: "create_event",
  components: {button_confirm, button_basicstyle},
}
</script>

<style scoped>

</style>