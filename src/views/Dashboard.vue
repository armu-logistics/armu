<template>
  <v-app id="inspire">
    <app-side-bar />
    <app-header-menu />

    <v-content class="accent">
      <v-container class="mt-10" align="center" justify="center" fill-height>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-card class="mx-auto">
              <v-card-title>
                <v-sheet class="v-sheet--offset" elevation="2" max-width="80">
                  <v-toolbar color="primary" class="round-coners" dark>
                    <v-icon large>mdi-offer</v-icon>
                  </v-toolbar>
                </v-sheet>
                Order to Sell
              </v-card-title>
              <app-bid></app-bid>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <app-demand></app-demand>
          </v-col>
        </v-row>

        <v-row class="mx-5 mt-10">
          <v-col cols="12" md="12">
            <app-product-history></app-product-history>
          </v-col>
        </v-row>

        <v-row v-if="role === ROLE_BUYER" class="mx-5 mt-10">
          <v-col cols="12" md="12">
            <app-buy-products></app-buy-products>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    appSideBar: () => import("@/components/navigation/NavigationDrawer"),
    appHeaderMenu: () => import("@/components/navigation/HeaderMenu"),
    appBid: () => import("@/components/card/Bid"),
    appDemand: () => import("@/components/card/Demand"),
    appProductHistory: () => import("@/components/sellProduct/inventory"),
    appBuyProducts: () => import("@/components/table/products"),
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
  }),

  computed: {
    ...mapGetters(["role"]),
  },
};
</script>
