<template>
  <v-app>
    <v-container>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" sm="8" class="py-0">
            <v-card>
              <v-row>
                <v-col cols="10">
                  <v-text-field
                    dense
                    solo
                    hide-details
                    prepend-inner-icon="mdi-search"
                    height="50"
                    label="Search "
                  ></v-text-field>
                </v-col>
                <v-col cols="1" class="px-0 ">
                  <v-icon color="black">mdi-cog-outline</v-icon>
                </v-col>
                <v-col cols="1" class="pa-0">
                  <v-btn to="/profile" v-rounded icon>
                    <v-list-item-avatar color="black" class="ml-4">
                      <v-img src="../assets/bi.png" size="30"></v-img>
                    </v-list-item-avatar>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- <v-row no-gutters>
        <v-col cols="12" md="3" sm="6">
          <v-alert border="bottom" colored-border color="blue" elevation="2">
            turpishjhjh
          </v-alert>
        </v-col>
      </v-row> -->
    </v-container>
  </v-app>
</template>
