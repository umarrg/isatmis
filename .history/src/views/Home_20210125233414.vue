<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" sm="8" class="py-0">
          <v-text-field
            color="accent"
            solo
            hide-details
            class="mb-2"
            label="Search NARR"
            append-icon="mdi-search"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md="3" sm="6">
          <v-alert border="bottom" colored-border type="warning" elevation="2">
            Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus
            non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus
            non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget
            bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
            libero. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
