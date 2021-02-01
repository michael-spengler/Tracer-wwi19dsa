<template>
  <div>
  <button class="navbar" v-on:click="onclick">
    <slot></slot>
  </button>
  </div>
</template>

<script>
export default {
name: "navbar_button",
  props: {
    onclick: {
      type: Function,
      required: true //falls genutzt, auf true schalten
    }
  }
}
</script>

<style scoped>
.navbar{
  background: #99d7f0;
  border: none;
  color: #676767;
  padding:15px;
  transition: background .2s ease-in-out;
  margin: 10px 100px;
  font-family: Roboto;
  float: bottom;

}
</style>