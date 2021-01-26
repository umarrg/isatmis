<template>
  <v-app class="grey lighten-4">
    <v-container class="">
     
    </v-container>
  </v-app>
</template>

export default {
  name: "Home",
  components: {},
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
<style scoped>
.rounded__card {
  border-radius: 15px;
}
.r__c {
  border-radius: 12px;
}
.custom__h {
  color: #001846;
  font-family: OpenSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.11;
  letter-spacing: normal;
}
.custom__t{

color: 
#001846;
}
.custom__title{
  color: #003192

;
}
.custom_glass{


  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(4rem);

}
</style>
