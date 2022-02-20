<template>
  <v-app>
    <v-btn
      bottom
      class="secondary"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-form ref="form" v-model="valid">
          <v-card-title class="primary darken-2 white--text justify-center">
            ADD A NEW PRODUCT
          </v-card-title>

          <v-container>
            <app-product />
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import validation from "@/utils/Validations";
export default {
  components: {
    appProduct: () => import("@/components/sellProduct/product"),
  },
  data: () => ({
    valid: false,
    dialog: false,
    dialogInvite: false,
    ...validation,
  }),

  computed: {
    ...mapState(["loading"]),
  },

  methods: {
    userCancel() {
      this.dialog = false;
      this.$refs.form.reset();
    },

    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
