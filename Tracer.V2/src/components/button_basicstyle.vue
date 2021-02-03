<template>
<button class="buttonbasic" v-on:click="onclick">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "button_basicstyle",
  props: {
    onclick: {
      type: Function,
      required: true //falls genutzt, auf true schalten
    }
  }
}
</script>

<style scoped>
.buttonbasic{
  background: #2c3e50;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  transition: background .2s ease-in-out;
  margin: 25px 100px;
  float: bottom;
}
</style>