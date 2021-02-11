<template>
  <v-btn v-on:click="onclick" color="#676767" dark width="85%">
      <slot></slot>
    </v-btn>
</template>

<script>
export default {
  name: "button_std",
  props: {
    onclick: {
      type: Function,
      required: true //falls genutzt, auf true schalten
    }
  }
}
</script>

<style scoped>

</style>