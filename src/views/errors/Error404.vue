<template>
  <div class="bg-gradient-blue">
    <v-container align="center" justify="start" fill-height>
      <div class="mx-auto">
        <h2>Ooops!</h2>
        <div class="mr-5">
          <img width="500" src="/images/404.svg" alt="404" />
        </div>
        <div class="">
          <h5 class="body-1 py-4">
            The page you're looking for couldn't be found .
          </h5>
          <v-btn
            @click="$router.go(-1)"
            class="white--text mx-auto"
            large
            block
            color="#AF825B"
            >Back To Homepage</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
.bg-gradient-blue {
  background: #deba93;
  height: 100vh;
}
</style>
