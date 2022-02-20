<template>
  <v-data-table
    :headers="headers"
    :items="fleet"
    sort-by="calories"
    class="elevation-1"
    :search="search"
    :loading="loadingTable"
    :loading-text="loadingText"
  >
    <template v-slot:top>
      <v-row>
        <v-col cols="auto" class="mx-5">
          <v-sheet class="v-sheet--offset" elevation="2" max-width="80">
            <v-toolbar color="primary" class="round-coners" dark>
              <v-icon large>mdi-receipt</v-icon>
            </v-toolbar>
          </v-sheet>
        </v-col>
        <v-col>
          <v-card-title color="primary">
            <h3 class="font-weight-light">MY INVOICE</h3>
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
    <template v-slot:[`item.actions`]="{ item }">
      <app-invoice-form />

      <v-icon small color="secondary" @click="deleteItem(item)">
        mdi-download
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    appInvoiceForm: () => import("@/components/dialog/InvoiceForm"),
  },
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Invoice No.",
        align: "start",
        sortable: true,
        value: "",
      },
      {
        text: "Customer Name",
        align: "start",
        sortable: true,
        value: "",
      },
      {
        text: "Product",
        align: "start",
        sortable: true,
        value: "",
      },
      { text: "No. of Bags", value: "" },
      { text: "Total Amount.", value: "" },
      { text: "Created", value: "" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),

  computed: {
    ...mapState(["fleet", "loadingText"]),
    ...mapGetters(["loadingTable"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  mounted() {
    this.$store.dispatch("fetchFleet");
  },
  created() {
    this.$store.state.loadingTable = true;
    this.$store.state.loadingText = "Loading... Please wait";
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.fleet.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
  },
};
</script>
