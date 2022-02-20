<template>
  <v-app>
    <router-view />
    <v-snackbar v-model="snackbar.showing" :color="snackbar.color" bottom>
      <span> {{ snackbar.text }}</span>
      <v-btn depressed color="white" @click="snackbar.showing = false"
        >close</v-btn
      >
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapState(["snackbar"]),
  },

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.v-sheet--offset {
  top: -55px;
  position: relative;
}

.v-sheet--offset .round-coners {
  border-radius: 5px;
}
</style>
