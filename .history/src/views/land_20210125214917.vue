<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12 " md12>
          <v-col cols="3" class="py-0 px-2">
            <div class="mr-7">
              <p class="icon--text custom__h">
                <v-icon color="" class="custom__h"> mdi-arrow-left</v-icon> Land
              </p>
            </div>
          </v-col>

          <v-row class="ma-0">
            <v-col cols="12" md="5" lg="5" class=" ">
              <v-card height="250" class="" elevation="" max-width="">
                <v-card-text>
                  <p class=""></p>
                  <div class="text--primary"></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color=""> </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="1">
              <div class="mt-12">
                <v-icon
                  color="  
                 "
                  class="mt-7"
                  >mdi-arrow-right-circle</v-icon
                >
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="5">
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d

"
                  width="200"
                  class="white--text"
                  >Download C,O Dead</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#003192"
                  width="200"
                  class="white--text"
                  >Upload Document</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d

"
                  width="200"
                  class="white--text"
                >
                  Transfer Document</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d

"
                  width="200"
                  class="white--text"
                >
                  Verify Document</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d

"
                  width="200"
                  class="white--text"
                >
                  Check Ownership</v-btn
                >
              </v-col>
            </v-col>
          </v-row>
          <v-col cols="12" class="">
            <v-card class="" elevation="" max-width="" >
              <v-card-text>
                <h3 class="custom__p">Upload</h3>
                <v-row>
                  <v-col cols="12" md="6">
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
                        
                        elevation=""
                        width="280"
                        large
                        color="#003192"
                        class="white--text mb-5"
                      >
                        upload</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" lg="6">
                    <div class="">
                      <span class="mb-2">Previous record ID</span>
                      <v-text-field outlined small> </v-text-field>
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
.custom__p {
  color: #003192;
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
</style>
