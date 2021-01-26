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
                      <v-text-field outline disabled label="Email">></v-text-field>
                    </v-col>
                    <v-col cols="12" class="px-0 py-1">
                      <v-text-field
                        outline
                        label="Passsword"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-btn block to="/home" color="" outlined>Ready</v-btn>
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- <div class="circle3"></div>
          <div class="circle4"></div> -->
        </v-col>
      </v-container>
     
    </v-main>
     <div class="circle1"></div>
      <div class="circle2"></div>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.custom__bg {
  background-image: url('../assets/uniform2.jpeg');
}
.custom__card {
  
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
  top: 25%;
  right: 7%;
}
.circle2 {
  bottom: 15%;
  left: 60%;
}

.circle3,
.circle4 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 10rem;
  width: 10rem;

  border-radius: 50%;
}

.circle3 {
  top: 10%;
  right: 10%;
}
.circle4 {
  bottom: 15%;
  left: 20%;
}
</style>
