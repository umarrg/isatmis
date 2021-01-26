<template>
  <v-app class="grey lighten-4">
    <v-container class="">
      <v-row>
        <v-col cols="12 " md12>
          <v-col cols="3" class="py-0 px-2">
            <div class="mr-7">
              <p class="icon--text custom__h">
                <v-icon color="" class="custom__h"> mdi-arrow-left</v-icon> Education
              </p>
            </div>
          </v-col>

          <v-row class="ma-0">
            <v-col cols="2" class=" ">
              <v-card
                height="200"
                class="custom__card"
                elevation=""
                max-width=""
              >
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
              <div class="mt-12 ">
                <v-icon
                  color="  light-blue
                 "
                  class="mt-7 "
                  >mdi-arrow-right-circle</v-icon
                >
              </div>
            </v-col>
            <v-col cols="5">
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d"
                  class="white--text"
                  width="200"
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
                >
                  Upload Certificate</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  elevation=""
                  color="#8d8d8d "
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
                  color="#003192"
                  width="200"
                  class="white--text"
                >
                  Check Ownership</v-btn
                >
              </v-col>
            </v-col>
          </v-row>
          <v-col cols="12" class="">
            <v-card class="" elevation="" max-width="">
              <v-card-text>
                <p>Check Ownership</p>

                <v-row>
                  <v-col cols="6" md="3" lg="3">
                    <span class="mb-2">ADDRESS</span>
                    <v-text-field
                      label=""
                      append-icon=""
                      outlined
                      color
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6" lg="3" md="3">
                    <span class="mb-2">GPS</span>
                    <v-text-field
                      label=""
                      append-icon=""
                      outlined
                      color
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" md="3" lg="3" class="px-2 py-0">
                    <span class="mb-2">Harsh</span>
                    <v-text-field
                      label=""
                      append-icon=""
                      outlined
                      color
                    ></v-text-field>
                    <div>
                      <v-btn
                       large
                        elevation=""
                        color="#003192"
                        width="150"
                        class="white--text"
                        >Get Data</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="6" md="3" lg="3" class="px-2 py-0">
                    <span class="mb-2">Document ID</span>
                    <v-text-field
                      label=""
                      append-icon=""
                      outlined
                      color
                    ></v-text-field>
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
