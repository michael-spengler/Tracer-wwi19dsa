<template>
  <div>Tracer Event erstellen
    <div>
      <button_basicstyle :onclick="to_generate">Qr-Code erzeugen</button_basicstyle>
    </div>
    <v-carousel v-model="model">
      <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
      >
        <v-sheet
            :color="color"
            height="100%"
            tile
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="display-3">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import button_basicstyle from "@/components/button_basicstyle";

export default {
  name: "create_event",
  components: {button_basicstyle},
  methods:{
    to_generate(){
      this.$router.push({path:'/qr_generator'})
    },
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  },
}
</script>

<style scoped>

</style>
