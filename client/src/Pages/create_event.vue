<template>
  <div>
    <br><br>
    <img class="logo" src="@/assets/img/qr_code-24px.svg" height="70" alt="error picture not available"/>
    <br>
    <h2>QR-Code erstellen</h2>
     <div>
       <br>
       <p>
         Bitte geben Sie die durschnitliche Verweildauer Ihrer Kunden in Minuten an. Diese wird benötigt um abschätzen zu können welche Kunden bei einer möglichen Infektion kontaktiert werden müssen.
       </p>
      <div style="margin:50px ">
        <v-text-field label="Verweildauer in Minuten" :rules="rules" hide-details="auto" ></v-text-field>
      </div>
  </div>
    <div>
      <button_basicstyle :onclick="to_generate">Qr-Code erzeugen</button_basicstyle>
    </div>
    <tab_bar></tab_bar>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";
import tab_bar from "@/components/tab_bar";

export default {
  name: "create_event",
  components: {tab_bar,button_basicstyle},
  methods:{
    to_generate(){
      this.$router.push({path:'/qr_generator'})
    },
  },
   data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 1) || 'Min 1 characters',
      ],
    }),
}
</script>

<style scoped>
.h2{
  font-family: Roboto;
  color: #676767;
  padding: 15px;
}
.span{
  display:block;
  height:200px;
  width:100%;
  background:white;
}
.untercard{
  display:block;
  height:30px;
  width:100%;
  background:white;
}
.p{
  font-family: Roboto;
  color: #676767;
  margin: 30px;
  text-align: left;
}
</style>
