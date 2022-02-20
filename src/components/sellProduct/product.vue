<template>
  <v-card>
    <v-tabs v-model="tab" centered icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab">
        maize
        <v-icon>mdi-maize</v-icon>
      </v-tab>

      <v-tab href="#tab-1">
        Sorghum
        <v-icon>mdi-</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Beans
        <v-icon>mdi-</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        Beans
        <v-icon>mdi-</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="mt-5" v-model="tab">
      <v-tab-item value="tab">
        <v-card flat class="mx-auto px-7">
          <v-card-title class=" ">Product Specification</v-card-title>
          <v-form ref="form" v-model="valid">
            <v-row class="mx-10">
              <v-col cols="12" md="6">
                <v-select
                  :items="items"
                  label="Grade"
                  v-model="grade"
                ></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  type="number"
                  v-model="noOfBags"
                  :rules="nameRules"
                  label="No Of Bags"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  type="number"
                  v-model="pricePerBag"
                  :rules="nameRules"
                  label="Price Per Bag (Kshs)"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="farmLocation"
                  :rules="nameRules"
                  label="Farm Location"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  v-model="pickUpLocation"
                  :rules="nameRules"
                  label="Pick Up Location"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <v-textarea
                  filled
                  v-model="description"
                  label="Description / characteristic"
                  auto-grow
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12">
                <h2 class="pb-4" color="primary">
                  Total Amount: Kshs {{ totalAmount }}
                </h2>
              </v-col>

              <v-col cols="12" md="6">
                <v-btn
                  large
                  block
                  :loading="loading"
                  :disabled="!valid"
                  @click="addProduct"
                  class="mb-3 pa-4 secondary"
                >
                  ADD PRODUCT
                  <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" md="6">
                <v-btn
                  large
                  block
                  class="mb-3 pa-4"
                  color="red"
                  @click="userCancel"
                  dark
                >
                  Cancel
                  <v-icon dark right> mdi-close </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-tab-item>

      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat class="mx-auto px-7">
          <v-img
            lazy-src="https://websites.sportstg.com/pics/00/36/07/81/36078109_1_M.jpg"
            max-height="350"
            max-width="350"
            src="https://websites.sportstg.com/pics/00/36/07/81/36078109_1_M.jpg"
            class="my-10 mx-auto"
          >
          </v-img>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tab: null,
      grade: "",
      valid: false,
      noOfBags: "",
      pricePerBag: "",
      farmLocation: "",
      pickUpLocation: "",
      dialog: false,
      description: "",
      items: ["A", "B"],
    };
  },
  computed: {
    totalAmount() {
      return this.noOfBags * this.pricePerBag;
    },
    ...mapState(["loading"]),
  },

  methods: {
    userCancel() {
      this.dialog = false;
      this.$refs.form.reset();
    },

    addProduct() {
      this.$store.state.loading = true;
      const farmData = {
        productDescription: this.description,
        pricePerBag: this.totalAmount,
        numberOfBags: this.noOfBags,
        pickUpLocation: this.pickUpLocation,
        farmId: "42e18228-bd44-4319-bec9-22ee416b7df7",
        productId: "04c7bcda-9dc0-4c90-922e-70bd3561d495",
        gradeId: "7f5499b5-c8f6-448b-8958-c9eded6a26e3",
      };

      console.log(farmData);
      this.$store.dispatch("newProduct", farmData);
    },
  },
};
</script>
