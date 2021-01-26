<template>
  <v-app class="custom__bg">
    <v-container>
      <v-col cols="12">
        <v-row >
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
      </v-col>
      <v-row >
        <v-col cols="12" md="4" sm="6">
          <v-alert border="bottom" colored-border color="blue" elevation="2">
            <h5>Project A</h5>
          </v-alert>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-alert border="bottom" colored-border color="blue" elevation="2">
            <h5>Project B</h5>
          </v-alert>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-alert border="bottom" colored-border color="blue" elevation="2">
            <h5>Project C</h5>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.custom__bg{
  background: #F2F5F8
}
</style>
