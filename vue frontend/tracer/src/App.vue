<template>

  <div>
    <img id="Logo" alt="Vue logo" src="./assets/Tracer_icon.png" width="200" height="200">
    <div>
         <button class="button1" alt="Button1" v-on:click="b1"> Hallo </button>
         <button class="button1" alt="Button2" v-on:click="b2"> Hallo2 </button>
         <button class="button1" alt="Button3" v-on:click="b3"> Hallo3 </button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  methods: {
    b1() {
    },
    b2() {
    },
    b3() {
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;

}
.button1{
  background-color: khaki;
  margin: 20px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  transition: background .2s ease-in-out;
  float:left

}

#Logo{
  float: left
}

</style>
