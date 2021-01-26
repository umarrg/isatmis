<template>
  <v-app class="grey lighten-4">
    <v-container class="">
      <v-row>
        <v-col cols="12">
          <v-col cols="12" class="py-0 px-2">
            <div class="mr-7 custom__p">
              <p class="icon--text custom__h">
                <v-icon color="blue darken-4" class="custom__h"> mdi-arrow-left</v-icon>
                Medical
              </p>
            </div>
          </v-col>

          <v-row class="ma-0">
            <v-col cols="12" md="5" lg="5" class=" ">
              <v-card
                height="250"
                class="custom__card"
                elevation=""
                max-width=""
                color="#00b0f0"
              >
                <v-card-text>
                  <p class=""></p>
                  <div class="text--primary">
                    <img src="../assets/heart.png" alt="">
                  </div>
                </v-card-text>
               
               
              </v-card>
            </v-col>
            <v-col cols="1">
              <div class="mt-12">
                <v-icon
                  color=" #003192 
                 "
                  class="mt-7 blue--text"
                  >mdi-arrow-right-circle</v-icon
                >
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d"
                  width="200"
                  class="white--text"
                  >Download certificate</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d"
                  width="200"
                  class="white--text"
                  >Download certificate</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#003192

"
                  width="200"
                  class="white--text"
                >
                  Upload Certificate</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d "
                  class="white--text"
                  width="200"
                >
                  Verify Document</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d"
                  class="white--text"
                  width="200"
                >
                  Check Ownership</v-btn
                >
              </v-col>
            </v-col>
          </v-row>
          <v-col cols="12" class="">
            <v-card class="" elevation="" max-width="" >
              <v-card-text>
                <p class="custom__p">Upload</p>
                <v-row justify-space-between>
                  <v-col cols="12" lg="6" md="6">
                    <v-card
                      height="250"
                      width="300"
                      class=""
                      elevation=""
                      max-width=""
                    >
                    </v-card>
                    <div class="mt-5">
                      <v-btn
                        large
                        elevation=""
                        width="300"
                       

                        color="#003192"
                        class="white--text mb-5"
                      >
                        upload</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <div class="">
                    <v-card
                      height="250"
                      width="300"
                     
                      elevation=""
                      max-width=""
                    >
                    </v-card>
                    <div class="mt-5">
                      <v-btn
                        large
                        elevation=""
                        class="white--text mb-5"
                        width="300"
                       
                        color="#003192"
                      >
                        upload</v-btn
                      >
                    </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {};
</script>
<style scoped>
.custom__dif {
  background-color: #00b0f0;
}
.custom__card {
  background-color: #00b0f0;
}
.custom__p {
  color: #003192;
}
.custom__h{
    color: #001846

;
font-family: OpenSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.11;
  letter-spacing: normal;
}
</style>
