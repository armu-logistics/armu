<template>
  <v-app id="inspire">
    <app-side-bar />
    <app-header-menu />

    <v-content class="accent">
      <v-container class="mt-10" align="center" justify="center" fill-height>
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <app-orders></app-orders>
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
    appOrders: () => import("@/components/orders/order"),
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
