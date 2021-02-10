<template>
<v-btn v-on:click="onclick">
  <slot></slot>
</v-btn>
</template>

<script>
export default {
  name: "tracerButton",
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