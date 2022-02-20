<template>
  <v-app>
    <app-side-bar />
    <app-header-menu />

    <v-content class="accent">
      <v-container align="center" justify="center" fill-height>
        <v-row class="mx-auto px-5 pt-5">
          <h1 class="grey--text display-1 pr-5">Product Managment</h1>
          <v-divider vertical></v-divider>
          <p class="px-3 pt-3">Dashboard</p>
        </v-row>

        <v-row class="mx-3">
          <v-col class="ma-auto">
            <app-buy-products />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    appSideBar: () => import("@/components/navigation/NavigationDrawer"),
    appHeaderMenu: () => import("@/components/navigation/HeaderMenu"),
    appBuyProducts: () => import("@/components/table/products"),
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
  }),
};
</script>
