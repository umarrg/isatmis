<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-col>
        <v-row>
          <v-col cols="7"></v-col>
          <v-col cols="5">
            <div>
              <div>
                <v-card-text>
                  <div>
                    <v-row>
                      <v-col cols="5"> <v-divider class="mt-4"></v-divider></v-col>
                      <v-col cols="2"> <h3>Login</h3> </v-col>
                      <v-col cols="5"> <v-divider class="mt-4"></v-divider></v-col>
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
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.custom__bg {
  background: url("/assets/logo.png");
}
</style>
