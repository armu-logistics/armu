<template>
  <v-app class="background-color">
    <v-container class="fill-height">
      <v-card class="mx-auto" max-width="600" elevation="2">
        <v-row class="py-5 px-10 mb-10 text-center">
          <v-col cols="12">
            <v-img
              lazy-src="https://sgbckdk.in/wp-content/uploads/2019/09/correct.png"
              max-height="150"
              max-width="150"
              src="https://sgbckdk.in/wp-content/uploads/2019/09/correct.png"
              class="mx-auto"
            >
            </v-img>
          </v-col>
          <v-card-title class="mx-auto">
            <h3 class="text-center pb-5">Verification Success</h3>
          </v-card-title>

          <v-card-text>
            Thank you for your support. We have sucessfully verified your email
            address. You can now proceed.
            <br />
            <br />
            <v-card-action>
              <v-btn class="mt-4" color="primary" to="/"> Take me home </v-btn>
            </v-card-action>
          </v-card-text>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      validationUrl: "",
    };
  },
  mounted() {
    this.validationUrl = this.$route.query.key;
  },
};
</script>

<style scoped>
.background-color {
  background-color: #f8f9fb;
}
</style>
