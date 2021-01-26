<template>
  <v-app class="grey lighten-4">
    <v-container class="">
      <v-row>
        <v-col cols="12" md12>
          <v-row>
            <v-col cols="12" md="5" lg="5" class="mt-5" >
              <h3 class="custom__h" id="dash">DASHBOARD</h3>
            </v-col>
            <v-col cols="12" md="7" lg="7" class="mt-3">
              <v-text-field append-icon="mdi-card-search" id="field" solo>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="8" md="8" class="">
              <v-row class="ma-0 py-0">
                <v-col cols="12" md="4" lg="4">
                  <v-card
                    elevation=""
                    max-width=""
                    :class="radius"
                    to="/medical"
                  >
                    <v-card-text class=" text-center">
                      <v-avatar tile size="">
                        <img src="../assets/heart.png" alt="" />
                      </v-avatar>

                      <h3 class="mt-4 custom__t">medical</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <div class="custom_glass" elevation="" max-width="" to="/land">
                    <v-card-text class=" text-center">
                      <v-avatar tile size="">
                        <img src="../assets/map.png" alt="" />
                      </v-avatar>

                      <h3 class="mt-4 custom_glass">Land</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="4">
                  <v-card class="" elevation="" max-width="" to="/education">
                    <v-card-text class=" text-center">
                      <v-avatar tile size="">
                        <img src="../assets/gr.png" alt="" />
                      </v-avatar>

                      <h3 class="mt-4 custom__t">Education</h3>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" class="ma-0 ">
                  <v-card class="" elevation="" max-width="">
                    <v-card-text>
                      <h2 class="custom__title">LexChain Statistics</h2>
                      <v-row>
                        <v-col cols="12" md="8" lg="8" class="py-0">
                          <v-row>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue" class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue " class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue" class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue" class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue" class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                            <v-col cols="4" class="px-2 py-3">
                              <v-sheet color="light-blue" class="r__c">
                                <v-card-text>
                                  <h2 class="white--text">57,000</h2>
                                  <h3 class="white--text">Users</h3>
                                </v-card-text>
                              </v-sheet>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" md="4" lg="4" class="px-2 py-0">
                          <v-col>
                            <v-card
                              class="mx-auto text-center"
                              color="blue"
                              dark
                              height="177"
                              max-width="600"
                            >
                              <v-card-text>
                                <v-sheet color="white">
                                  <v-sparkline
                                    :value="value"
                                    color="blue"
                                    height="100"
                                    padding="24"
                                    stroke-linecap="round"
                                    smooth
                                  >
                                  </v-sparkline>
                                </v-sheet>
                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions class="justify-center">
                                <v-btn block text>
                                  Lexchain chat
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-col>
                        </v-col>
                      </v-row>
                      <v-col cols="12" class="px-0 py-0 ">
                        <h3 class="custom__title ml-2 mb-1">Latest block</h3>

                        <v-sheet color="indigo darken-4" class="rounded__card ">
                          <v-card-text class="white--text">
                            <v-row>
                              <v-col cols="8"   class="px-2 py-0">
                                <h2 class="mb-3 ">Block #31,000</h2>
                                <h3>3164 records</h3>
                                <v-spacer></v-spacer>
                              </v-col>
                              <v-col cols="4" class="px-2 py-0">
                                <h2 class="mb-3 text--icon ">
                                  Hash 0007bc..898
                                  <v-icon color="white" right
                                    >mdi-clipboard-multiple-outline</v-icon
                                  >
                                </h2>
                                <h3>mined at 11mb 2020-11-12</h3>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-sheet>
                      </v-col>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" lg="4" md="4" class="px-2 ma-0">
              <v-card class="mt-2 rounded__card" height="568">
                <v-card-text>
                  <div class="text-center mt-4">
                    <v-avatar size="150">
                      <img src="../assets/bi.png" alt="" />
                    </v-avatar>
                    <h3 class="mt-3 black--text">Auwal rg</h3>
                  </div>
                  <div class="mt-12">
                    <h3>Document uploaded(12)</h3>
                    <div class="mt-3">
                      <v-sheet color="light-blue" class="rounded__card ">
                        <v-card-text class="">
                          <div class="d-flex  align-center">
                            <v-icon dark size="80"> mdi-pdf-box </v-icon>

                            <div class="">
                              <h2 class="text-h6  white--text">
                                LX0110
                              </h2>
                              <h5 class="font-weight-light white--text">
                                id: 12:23324444
                              </h5>
                            </div>
                          </div>
                        </v-card-text>
                      </v-sheet>
                    </div>

                    <div class="mt-5">
                      <v-sheet flat color="blue" class="rounded__card ">
                        <v-card-text class="">
                          <div class="d-flex  align-center">
                            <v-icon dark size="80"> mdi-pdf-box </v-icon>

                            <div class="">
                              <h2 class="text-h6  white--text">
                                LX0110
                              </h2>
                              <h5 class="font-weight-light white--text">
                                id: 12:23324444
                              </h5>
                            </div>
                          </div>
                        </v-card-text>
                      </v-sheet>
                    </div>
                    <h2 class="custom__title text-center mt-8">More</h2>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
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
  backdrop-filter: blur(2rem);

}
</style>
