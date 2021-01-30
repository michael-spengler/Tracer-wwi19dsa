<template>
  <div>
    <navbar_button :onclick="startroute">Homescreen</navbar_button>
    <navbar_button :onclick="scanroute">Scan</navbar_button>
    <navbar_button :onclick="eventroute">Create Event</navbar_button>
  </div>

</template>

<script>
import navbar_button from "@/components/navbar_button";
export default {
name: "navigation_bar",
  components: {navbar_button},
  methods:{
    startroute(){
      this.$router.push({path: '/'});
    },
    scanroute(){
      this.$router.push({path: '/scanpage'});
    },
    eventroute(){
      this.$router.push({path: '/create_event'})
    }
  }
}
</script>

<style scoped>
.navi{

}
</style>