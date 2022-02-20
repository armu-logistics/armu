<template>
  <v-app>
    <app-side-bar />
    <app-header-menu />
    <v-content>
      <v-container class="mx-auto">
        <v-row class="mx-5 mt-10">
          <app-tab />
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
    appTab: () => import("@/components/sellProduct/product"),
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
