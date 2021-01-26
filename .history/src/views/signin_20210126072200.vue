<template>
  <v-app class="">
    <v-main class="custom__bg">
      <v-container fill-height>
        <v-col>
          <v-row justify="center" align="center">
           
            <v-col cols="4">
              <div>
                <div class="custom__card">
                  <v-card-text>
                    <div>
                      <v-row>
                        <v-col cols="5">
                          <v-divider class="mt-4"></v-divider
                        ></v-col>
                        <v-col cols="2"> <h3>Login</h3> </v-col>
                        <v-col cols="5">
                          <v-divider class="mt-4"></v-divider
                        ></v-col>
                      </v-row>
                    </div>
                    <v-col cols="12" class="px-0 py-1">
                      <v-text-field solo disabled label="Email">></v-text-field>
                    </v-col>
                    <v-col cols="12" class="px-0 py-1">
                      <v-text-field
                        solo
                        label="Passsword"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-btn block to="/home">start</v-btn>
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>

        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.custom__bg {
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);

}
.custom__card {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );

  backdrop-filter: blur(1rem);
  border-radius: 1rem;
}

.circle1,
.circle2 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 10rem;
  width: 10rem;
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 5%;
  right: 15%;
}
.circle2 {
  bottom: 5%;
  left: 10%;
}
</style>
