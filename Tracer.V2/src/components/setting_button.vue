<template>
   <div >
     <button class="s_button" v-on:click="onclick">
     <slot></slot>
     </button>
   </div>
</template>

<script>
export default {
name: "setting_button",
  props:{
    onclick:{
      type: Function,
      required: true // umstellen falls nicht implementiert
    }
  }
}
</script>

<style scoped>
.s_button{
  background: gray;
  border: none;
  margin: 10px 100px;
  float: right;
  font-family: Roboto;
  padding: 10px 50px;
  color: white;
  cursor: pointer;
}
</style>