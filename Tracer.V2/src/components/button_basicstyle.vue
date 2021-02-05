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
  background-color: #99D7F0;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  transition: background .2s ease-in-out;
  margin: 25px 100px;
  float: bottom;
  border-radius: 8px;
  font-family: Roboto;
  font-size: 20px;
}
</style>