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
    data(){
        return {
            map: null
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
