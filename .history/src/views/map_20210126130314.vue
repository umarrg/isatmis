<template>
  <v-app class="custom__bg">
    <v-container>
      <v-responsive>
        <div>
            <div id="map">

            </div>
        </div>
      </v-responsive>
    </v-container>
  </v-app>
</template>
<script>
export default {
    name
    data(){
        return {
            map: null,
            mapCenter: {lat:0, long:0},
        }
    }
}
</script>
<style scoped>
.custom__bg {
background-color: #fffffc;
background-image: linear-gradient(315deg, #fffffc 0%, #beb7a4 74%);
}
</style>
