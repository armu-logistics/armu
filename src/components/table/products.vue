<template>
  <v-data-table
    :headers="headers"
    :items="postedProduct"
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
              <v-icon large>mdi-store</v-icon>
            </v-toolbar>
          </v-sheet>
        </v-col>
        <v-col>
          <v-card-title color="primary">
            <h3 class="font-weight-light">Products</h3>
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

    <template v-slot:[`item.status`]="{ item }">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            class="my-3 secondary"
            v-bind="attrs"
            v-on="on"
          >
            Buy Now
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline"> PURCHASE </v-card-title>
          <v-card-text>Do you wish to purchase this product</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="red" @click="dialog = false"> No </v-btn>
            <v-btn class="green mx-2" @click="purchasedProduct(item)">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        value: "productDescription",
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
        text: "Price offer (Kshs)",
        align: "start",
        sortable: true,
        value: "pricePerBag",
      },
      { text: "Pickup Location", value: "pickUpLocation" },
      { text: "Farm region", value: "farm.location" },
      { text: "Created", value: "createdAt" },
      { text: "Status", value: "status" },
    ],
    productId: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapState(["postedProduct", "loadingTable"]),
    ...mapGetters(["loadingText"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  mounted() {
    this.$store.dispatch("fetchPostedProduct");
  },
  created() {
    // this.$store.state.loadingTable = true;
    this.$store.state.loadingText = "Loading... Please wait";
  },
  methods: {
    purchasedProduct(item) {
      this.productId = item.id;
      const farmData = {
        farmerProductId: this.productId,
      };
      this.$store.dispatch("buyingProduct", farmData);
      this.dialog = false;
    },
  },
};
</script>
