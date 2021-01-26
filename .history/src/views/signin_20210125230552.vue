<template>
  <v-app class="">
      <v-main>
    <v-container fill-height>
      <v-col>
        <v-row>
          <v-col cols="7"></v-col>
          <v-col cols="5">
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
                  <v-btn block>start</v-btn>
                </v-card-text>
              </div>
            </div>
          </v-col>
        </v-row>
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
  
}
.custom__card {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
}
</style>
