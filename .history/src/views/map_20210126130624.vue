<template>
  <v-app class="custom__bg">
    <v-container>
      <v-responsive>
        <div>
          <div id="map"></div>
        </div>
      </v-responsive>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      mapCenter: { lat: 0, long: 0 },
    };
  },
  methods: {
initMap(){

this.map = new google.maps.Map(document.getElementById('map'),{
center: this.mapCenter, // the center of the map
zoom: true, // the map is zoomable or not
maxZoom: 2, // zoom range from min-max
minZoom: 3,
streetViewControl: true, // strret view, map type, full screen, and zoom button UI control
mapTypeControl: true,
fullscreenControl: true,
zoomControl: true

});



};
</script>
<style scoped>
.custom__bg {
  background-color: #fffffc;
  background-image: linear-gradient(315deg, #fffffc 0%, #beb7a4 74%);
}
</style>
