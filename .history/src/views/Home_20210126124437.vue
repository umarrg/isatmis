<template>
  <v-app class="custom__bg">
    <v-container>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="12" md="12" sm="8" class=" mt-3">
            <div class="glass">
              <v-row>
                <v-col cols="11">
                  <v-text-field
                    dense
                    hide-details
                    prepend-inner-icon="mdi-search"
                    rounded
                    elevation-4
                    placeholder="Search"
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="mt-2">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon small class="mx-2" v-on="on" v-bind="attrs">
                        <v-badge content="19" bordered color="accent" overlap>
                          <v-icon color="grey">mdi-bell</v-icon>
                        </v-badge>
                      </v-btn>
                    </template>
                    <v-card
                      width="350"
                      class="mx-auto cutom__card--overflow"
                      max-height="400"
                    >
                      <v-card-title primary-title> Notification </v-card-title>
                    </v-card>
                  </v-menu>
                </v-col>
                <!-- <v-col cols="1" class="px-0">
                  <v-icon color="black">mdi-bell-badge</v-icon>
                  <v-icon>mdi-account</v-icon>
                </v-col> -->
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-col cols="12" class="mt-3">
          <v-row>
            <div>
              <h2>Dashbord</h2>
            </div>
          </v-row>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-divider></v-divider>
        </v-col>

        <v-row>
          <v-col cols="12" md="4" sm="6">
            <!-- <v-alert border="bottom" colored-border color="teal" elevation="2">
              <h5>Project A</h5>
              <h6 class="custom__font">Binary Search</h6>
            </v-alert> -->
            <div class="custom__card">
              <v-card-text>
                <v-row>
                  <v-col cols="12"><h2 class="brown--text">Binary</h2> </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="4"> <h2>13,748</h2></v-col>
                  <v-col cols="2"> <h6>5.23%</h6> </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <div class="custom__card">
              <v-card-text>
                <v-row>
                  <v-col cols="12"><h2 class="brown--text">Binary</h2> </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="4"> <h2 class="red--text">13,748</h2></v-col>
                  <v-col cols="2"> <h6>5.23%</h6> </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <div class="custom__card">
              <v-card-text>
                <v-row>
                  <v-col cols="12"><h2 class="brown--text">Binary</h2> </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col cols="4"> <h2>13,748</h2></v-col>
                  <v-col cols="2"> <h6>5.23%</h6> </v-col>
                </v-row>
              </v-card-text>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="custom__chat">
              <v-card-text>
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </v-card-text>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="custom__chat">
              <v-card-text>
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </v-card-text>
            </div>
          </v-col>
        </v-row>

        <div class="circle1"></div>
        <div class="circle2"></div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
};
</script>

<style scoped>
.custom__bg {
  background-color: #fffffc;
  background-image: linear-gradient(315deg, #fffffc 0%, #beb7a4 74%);
}
.custom__font {
  font-weight: 500;
}
.glass {
  background: rgba(209, 0, 0, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 10px;
}
.custom__chat {
  background: rgba(209, 0, 0, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
}
.circle1,
.circle2 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
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
.custom__card {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
}
</style>
