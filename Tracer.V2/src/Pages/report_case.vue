<template>
  <div>Fall melden
    <div>

      <b-card
          style="max-width: 20rem;"
          class="mb-2"
      >
        <b-card-text>
          Falls Sie positiv auf Covid-19 getestet <br>
          wurden, laden Sie hier Ihren Testbericht <br>
          samt Unterschrift des Hausarztes hoch.
        </b-card-text>
      </b-card> <br>
      <button_basicstyle class="buttonbasic"  v-on:click="onclick">
        PDF Dokument oder JPG hochladen
      </button_basicstyle> <br>
      <button_basicstyle :onclick="caseroute">Formular ausfüllen</button_basicstyle>
    </div>
    <div>
      <vue-pull-refresh :on-refresh="onRefresh"></vue-pull-refresh>
    </div>
  </div>
</template>
<script>
import button_basicstyle from "@/components/button_basicstyle";
import VuePullRefresh from 'vue-pull-refresh';

export default {
  name: "Fall melden",
  components: {button_basicstyle, VuePullRefresh},
  methods: {
    caseroute() {
      this.$router.push({path: '/fill_in_formular'});
    },
    onRefresh: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 1000);
      });
    }
  },
  data: function () {
    return {};
  },
}

</script>

<style scoped>

</style>