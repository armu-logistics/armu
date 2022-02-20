<template>
  <div class="bg-gradient-blue">
    <v-container align="center" justify="start" fill-height>
      <div class="mx-auto">
        <h2>Sorry!</h2>
        <h2>Well, this is unexpected ...</h2>
        <div class="mr-5">
          <img width="500" src="/images/50x.svg" alt="50x" />
        </div>
        <div class="">
          <h5 class="body-1 py-4">
            Go back and try again and the If error persists, <br />
            Either check the URL,
            <router-link class="tw-text-yellow-500" to="/">go home</router-link
            >.
          </h5>
          <v-btn
            @click="$router.go(-1)"
            class="white--text mx-auto"
            large
            block
            color="#AF825B"
            ><v-icon color="#fff">mdi-chevron-left</v-icon> Go Back</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Error50x",
};
</script>

<style scoped>
.bg-gradient-blue {
  background: #deba93;
  height: 100vh;
}
</style>
