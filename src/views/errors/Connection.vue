<template>
  <div class="bg-gradient-blue">
    <v-container align="center" justify="start" fill-height>
      <div class="mx-auto">
        <h2>Ooops!</h2>
        <h2>Unable to connect to the internet</h2>
        <div class="mr-5">
          <img width="500" src="/images/connection.svg" alt="no internet" />
        </div>
        <div class="">
          <h5 class="body-1 py-4">Check your connection and try again !</h5>
          <v-btn
            @click="$router.go(-1)"
            class="white--text mx-auto"
            large
            block
            color="#AF825B"
            ><v-icon color="#fff">mdi-refresh</v-icon> Retry</v-btn
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Connection',
}
</script>

<style scoped>
.bg-gradient-blue {
  background: #deba93;
  height: 100vh;
}
</style>
