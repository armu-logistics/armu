<template>
  <v-data-table
    :headers="headers"
    :items="crop"
    sort-by="Date"
    class="elevation-1"
    :search="search"
    :loading="loadingTable"
    :loading-text="loadingText"
  >
    <template v-slot:top>
      <v-row>
        <v-col cols="auto" class="mx-5">
          <v-sheet class="v-sheet--offset" elevation="5">
            <v-toolbar color="primary" class="round-coners" dark>
              <v-icon large>mdi-history</v-icon>
            </v-toolbar>
          </v-sheet>
        </v-col>
        <v-col>
          <v-card-title color="primary">
            <h3 class="font-weight-light">My Product History</h3>
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
        value: "product",
      },
      {
        text: "Grade",
        align: "start",
        sortable: true,
        value: "grade",
      },
      {
        text: "No. of Bags",
        align: "start",
        sortable: true,
        value: "bags",
      },
      {
        text: "Price offer",
        align: "start",
        sortable: true,
        value: "price",
      },
      { text: "Created", value: "date" },
      { text: "Location", value: "location" },
      { text: "Status", value: "status" },
    ],
    crop: [
      {
        id: 1,
        product: "maize",
        grade: "A",
        bags: 34,
        price: 50000,
        date: "12/08/2020",
        location: "Kitale",
        status: "sold",
      },
      {
        id: 2,
        product: "sorgum",
        grade: "A",
        bags: 50,
        price: 150000,
        date: "17/10/2020",
        location: "Eldoret",
        status: "Available",
      },
      {
        id: 3,
        product: "maize",
        grade: "B",
        bags: 19,
        price: 30000,
        date: "06/08/2020",
        location: "Kitale",
        status: "sold",
      },
      {
        id: 4,
        product: "millet",
        grade: "B",
        bags: 74,
        price: 250000,
        date: "28/08/2020",
        location: "Kitale",
        status: "sold",
      },
    ],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapState(["bookedVehicle", "loadingTable"]),
    ...mapGetters(["loadingText"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  mounted() {
    //   this.$store.dispatch('fetchBookedVehicles')
  },
  created() {
    this.initialize(),
      //   this.$store.state.loadingTable = true;
      (this.$store.state.loadingText = "Loading... Please wait");
  },

  methods: {
    initialize() {
      this.desserts = this.$store.state.carRequest;
    },
  },
};
</script>
