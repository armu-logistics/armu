<template>
  <v-app id="inspire" style="background: #f8f9fb">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <app-header />
            <v-card class="elevation-3 pb-5">
              <v-form v-model="valid">
                <v-toolbar color="white blue--text" flat>
                  <v-toolbar-title>FORGOT PASSWORD</v-toolbar-title>
                </v-toolbar>
                <v-card-text class="px-10">
                  <v-text-field
                    id="email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    :rules="[required('email'), emailFormat()]"
                    v-model="email"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions class="px-10">
                  <v-spacer></v-spacer>
                  <v-btn
                    block
                    large
                    color="secondary"
                    class="my-2"
                    :loading="loading"
                    :disabled="!valid"
                    @click="onReset"
                    >Reset Password</v-btn
                  >
                </v-card-actions>

                <v-card-actions class="my-1 px-10">
                  <v-spacer></v-spacer>
                  <span class="grey--text body-2"
                    >Already Have an account ?
                  </span>
                  <v-spacer></v-spacer>
                  <v-btn depressed to="/">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- <app-bottom/> -->
  </v-app>
</template>

<script>
import validation from "@/utils/Validations";
import { mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("@/components/Header"),
    // appBottom : () => import('@/components/BottomImage')
  },
  props: {
    source: String,
  },
  data() {
    return {
      valid: false,
      email: "",
      loading: false,
      ...validation,
    };
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus", "authenticationStatus"]),
  },
  methods: {
    onReset() {
      this.loading = true;

      this.$store
        .dispatch("auth/passwordReset", {
          username: this.email,
        })
        .then(() => {
          if (this.hasAuthenticationStatus) {
            this.loading = false;
            if (this.authenticationStatus.variant === "error") {
              this.$store.commit("SNACKBAR", this.authenticationStatus);
            } else {
              this.$store.commit("SNACKBAR", this.authenticationStatus);
              this.$router.push({
                name: "ResetPassword",
                query: { user: this.email },
              });
            }
          }
        });
    },
  },
};
</script>

<style scoped></style>
