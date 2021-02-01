<template lang="html">
  <div>
  <div>
  <navigation_bar></navigation_bar>
  </div>
    <div class='wrapper'>
      <button class='change__style' @click='changeStyle()'>Change Style</button>
      <tabs :mode="mode">
        <tab title="Home">Hello From Tab 1</tab>
        <tab title="Scan">Hello From Tab 2</tab>
        <tab title="Create Event">Hello From Tab 3</tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import navigation_bar from "@/components/navigation_bar";

export default {
name: "homescreen",
  components: {navigation_bar,
    Tab,
    Tabs
  },
data () {
  return {
    mode: 'dark'
  }
},
methods: {
  changeStyle () {
    if (this.mode === 'dark') {
      this.mode = 'light'
    } else {
      this.mode = 'dark'
    }
  }
}
}
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  font-family: 'Karla', sans-serif;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

.change__style {
  background-color: #eee;
  font-size: 1em;
  margin-bottom: 10px;
  padding: 5px;
}
</style>