<template>
  <v-data-table
    :headers="headers"
    :items="bookedProducts"
    sort-by="createdAt"
    class="elevation-1"
    :search="search"
    :loading="loadingTable"
  >
    <template v-slot:top>
      <v-row>
        <v-col cols="auto" class="mx-5">
          <v-sheet class="v-sheet--offset" elevation="2" max-width="80">
            <v-toolbar color="primary" class="round-coners" dark>
              <v-icon large>mdi-cart</v-icon>
            </v-toolbar>
          </v-sheet>
        </v-col>
        <v-col>
          <v-card-title color="primary">
            <h3 class="font-weight-light">MY ORDERS</h3>
            <v-col class="d-flex align-end flex-column">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              >
              </v-text-field>
            </v-col>
          </v-card-title>
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: true,
        value: "id",
      },
      {
        text: "Product",
        align: "start",
        sortable: true,
        value: "productGrade.product.name",
      },
      {
        text: "Grade",
        align: "start",
        sortable: true,
        value: "productGrade.grade.name",
      },
      {
        text: "No. of Bags",
        align: "start",
        sortable: true,
        value: "numberOfBags",
      },
      {
        text: "Price offer",
        align: "start",
        sortable: true,
        value: "pricePerBag",
      },
      { text: "Created", value: "createdAt" },
      { text: "Location", value: "pickUpLocation" },
      { text: "Status", value: "status" },
    ],
  }),

  computed: {
    ...mapState(["product", "loading"]),
    ...mapGetters(["bookedProducts"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  mounted() {
    this.$store.dispatch("getProduct");
  },
  created() {
    this.$store.state.loading = true;
  },
};
</script>
