<template>
  <v-app class="custom__bg">
    <v-container>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="12" sm="8" class=" mt-3">
            <v-card>
              <v-row>
                <v-col cols="10">
                  <v-text-field
                    dense
                    hide-details
                    prepend-inner-icon="mdi-search"
                    rounded
                    elevation-4
                    placeholder="Search"
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="px-0">
                  <v-icon color="black">mdi-cog-outline</v-icon>
                </v-col>
                <v-col cols="1" class="px-0">
                  <v-icon>mdi-account</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-col cols="12" class="mt-3">
          <div>
            <h2>Dashbord</h2>
          </div>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-divider></v-divider>
        </v-col>

        <v-row>
          <v-col cols="12" md="4" sm="6">
            <v-alert border="bottom" colored-border color="teal" elevation="2">
              <h5>Project A</h5>
              <h6 class="custom__font">Binary Search</h6>
            </v-alert>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-alert border="bottom" colored-border color="blue" elevation="2">
              <h5>Project B</h5>
              <h6 class="custom__font">Binary Search</h6>
            </v-alert>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-alert border="bottom" colored-border color="red" elevation="2">
              <h5>Project C</h5>
              <h6 class="custom__font">Binary Search</h6>
            </v-alert>
          </v-col>
        </v-row>

        

      </v-col>
    </v-container>
  </v-app>
</template>
<script>
export default {

  data: ()=>({
     chartData: [
      ['Time', 'Mins'],
      ['12am', 0],
      ['1am', 0],
      ['2am', 0],
      ['3am', 0],
      ['4am', 0],
      ['5am', 0],
      ['6am', 0],
      ['7am', 0],
      ['8am', 40],
      ['9am', 30],
      ['10am', 10],
      ['11am', 0],
      ['12pm', 0],
      ['1pm', 50],
      ['2pm', 30],
      ['3pm', 5],
      ['4pm', 10],
      ['5pm', 15],
      ['6pm', 20],
      ['7pm', 40],
      ['8pm', 45],
      ['9pm', 50],
      ['10pm', 55],
      ['11pm', 0],
    ],
    columnChartData: [
      ['Days', 'Times'],
      ['Monday', 45],
      ['Tuesday', 60],
      ['Wednesday', 30],
      ['Thursday', 30],
      ['Friday', 55],
      ['Saturday', 0],
      ['Sunday', 0],
    ],
    pieChartData: [
      ['Year', 'Usage'],
      ['2017', 20],
      ['2018', 20],
      ['2019', 35],
      ['2020', 25],
    ],
    chartOptions: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2017-2020',
      },
      labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
      value: [200, 675, 410, 390, 310, 460, 250, 240],
    },
  }),
  
}

</script>
<style scoped>
.custom__bg {
  background: #f2f5f8;
}
.custom__font {
  font-weight: 500;
}
</style>
