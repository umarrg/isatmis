<template>
  <nav>
    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        tile
        dark
        small
        @click="drawer = !drawer"
        class="black--text "
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon small class="mr-2" v-on="on" v-bind="attrs">
             
            </v-btn>
          </template>
        </v-menu>

      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer"  app color="">
      <v-layout column align-center>
        <v-flex class="mt-7 mb-8">
          <span class="text-h4 white--text font-weight-light">
            <span class="blue--text font-weight-black">l</span>
            <span class="blue--text font-weight-black">e</span>
            <span class="blue--text font-weight-black">x</span>
            <span class="blue--text font-weight-black">c</span>
            <span class="blue--text font-weight-black">h</span>
            <span class="blue--text font-weight-black">a</span>
            <span class="blue--text font-weight-black">i</span>
            <span class="blue--text font-weight-black">n</span>
          </span>
        </v-flex>
      </v-layout>
      
      <v-list dense nav>
        <v-list-item
         class=""
          active-class=" blue--text border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-eye", text: "View contact", route: "/view" },
      {
        icon: "mdi-clock-time-seven-outline",
        text: "Pending Record",
        route: "/pending",
      },
      { icon: "mdi-forigana-horizontal", text: "Peers", route: "/peers" },
      { icon: "mdi-key", text: "Keys", route: "/keys" },
      { icon: "mdi-credit-card-outline", text: "Payment", route: "/payment" },
      { icon: "mdi-message", text: "Message", route: "/message" },
    ],

    offset: true,
  }),
  
};
</script>

<style>
.border {
  border-right: 4px solid #00b0f0
}

</style>
