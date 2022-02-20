<template>
  <v-card class="mt-10 mx-auto" max-width="700">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">Demand distribution</div>
      <div class="subheading font-weight-light grey--text">
        for the last 6 Month
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small> mdi-clock </v-icon>
      <span class="caption grey--text font-weight-light"
        >last update 26 minutes ago</span
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov ",
      "Dec",
    ],
    value: [200, 675, 410, 390, 310, 460, 250, 240, 390, 310, 460, 1000],
  }),
};
</script>
