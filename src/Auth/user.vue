<template>
  <v-app id="inspire" class="image">
    <v-container class="fill-height" max-width="600">
      <app-logo />

      <v-content justify="center" class="text-center">
        <h1>WELCOME TO ARMU</h1>
        <p class="py-5">Please select whether you are a Farmer or Buyer</p>
        <v-row justify="center" class="mt-5">
          <v-col class="mx-10 user-hover" cols="auto">
            <router-link to="/register/farmer">
              <v-img src="@/assets/avatars/farmer.svg"> </v-img>
              <p class="pt-10">Farmer</p>
            </router-link>
          </v-col>

          <p class="pt-12">or</p>

          <v-col class="mx-10 user-hover" cols="auto">
            <router-link to="/register/buyer">
              <v-img src="@/assets/avatars/buyer.svg"> </v-img>
              <p class="pt-10">Buyer</p>
            </router-link>
          </v-col>
        </v-row>
        <p class="caption pt-10">
          Copyright © 2020. ARMU Powered by ARMU Solutions
        </p>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {
    appLogo: () => import("@/components/Header"),
  },
  data() {
    return {
      email: "",
      password: "",
      show: false,
    };
  },
};
</script>

<style scoped>
.image {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.login-background {
  background-image: url("../assets/login-background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.user-hover:hover {
  border: 5px solid #455b27;
  cursor: pointer;
  margin: 0 auto;
}
</style>
