<template>
  <div class="top">
    <div>
      <img
          class="logo"
          src="@/assets/img/Tracer_icon_final.png"
          width="70"
          height="70"
          alt="Logo"
      />
    </div>
    <div class="header">Tracer</div>
    <div>
      <v-btn  small top right fixed fab plain color="white" v-on:click="refresh">
        <v-icon dark>
          mdi-cached
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
name: "pers_header"
}
</script>

<style scoped>
.top {
  text-align: left;
  float: top;
  position: fixed;
  width: 100%;
  padding: 5px;
  background-color: white;
  display: block;
}
.header {
  padding: 21px;
  font-family: Roboto;
  font-size: 20px;
  text-align: center;
  color: #676767;

}

.logo{
  float: left;
}

</style>