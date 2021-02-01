<template>
  <button class="buttonconfirm" v-on:click="onclick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button_confirm",
  props: {
    onclick: {
      type: Function,
      required: true //falls genutzt, auf true schalten
    }
  }
}
</script>

<style scoped>
.buttonconfirm{
  background: #65e79d;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  transition: background .2s ease-in-out;
  margin: 25px 100px;
}
</style>