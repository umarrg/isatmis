<template>
    <v-app class="custom__bg">
        <v-container>
            <v-col cols="6">
             <v-card>
            <v-card-text>
              <div class="text-center">
                <p class="display-1 custom__div">Login</p>
              </div>
              <v-row>
                <v-col cols="12" lg="6" md="6">
                  <v-card
                    color="#e35520
                            "
                  >
                    <v-card-text>
                      <div>
                        <h5 class="icon-text white--text">
                          <v-icon color="#ffff" left>mdi-google</v-icon>
                          Login with google
                        </h5>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="6" >
                  <v-card
                    color="#2089d6
                          "
                  >
                    <v-card-text>
                      <div>
                        <h5 class="icon-text white--text">
                          <v-icon color="white" left>mdi-facebook</v-icon>
                          Login with facebook
                        </h5>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-col cols="12" md="12" lg="12">
                <v-text-field
                  outlined
                  prepend-inner-icon="mdi-email"
                  label="First Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="12" lg="12">
                <v-text-field
                  outlined
                  prepend-inner-icon="mdi-key-variant"
                  label="Password"
                >
                </v-text-field>
              </v-col>
              <div class="text-center">
                <v-btn
                  elevation=""
                  color="#003192"
                  class="white--text"
                  width="150"
                  rounded
                  >SignIn</v-btn
                >
              </div>
              <div class="text-center mt-5">
                <v-btn
                  small
                  elevation=" 
                      "
                  color="#003192"
                  text
                  >forgot Password?</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
            </v-col>
        </v-container>
    </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.custom__bg{
    background: url('./assets/soldier.JPG');
}
</style>