<template>
  <div>
    <tab_bar></tab_bar>
    <div class="homescreen_button">
      <v-btn
          color= "#99D7F0"
          dark
          width="85%"
          v-on:click="to_app_information">
        App Information
      </v-btn>
    </div>
  </div>
</template>

<script>
import tab_bar from "@/components/tab_bar";

export default {
  components: {tab_bar},
  name: "Settings",
  methods: {
    to_app_information() {
      this.$router.push({path: "/app_information"})

    },
  }
}
</script>

<style scoped>

</style>