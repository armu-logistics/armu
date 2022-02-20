<template>
  <v-app id="inspire" style="background: #f8f9fb">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <app-header />
            <v-card class="elevation-3 py-5">
              <v-toolbar color="white blue--text" flat>
                <v-toolbar-title>Reset Password</v-toolbar-title>
              </v-toolbar>

              <v-card-text class="px-10">
                <v-form v-model="valid">
                  <v-text-field
                    id="otp"
                    label="OTP"
                    type="number"
                    v-model="otp"
                    :rules="[required('OTP')]"
                  >
                    <v-icon slot="prepend" color="primary">mdi-security</v-icon>
                  </v-text-field>

                  <v-text-field
                    id="password"
                    label="password"
                    name="new-password"
                    prepend-icon="mdi-lock"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    v-model="password"
                    :rules="[required('password'), minLength('password', 8)]"
                    counter="true"
                    @click:append="show = !show"
                  ></v-text-field>

                  <v-text-field
                    id="confirm-new-password"
                    label="Confirm password"
                    name="confirmPassword"
                    prepend-icon="mdi-lock"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    v-model="confirmPassword"
                    :rules="[required('password')]"
                    counter="true"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="px-10">
                <v-spacer></v-spacer>
                <v-btn
                  block
                  large
                  color="secondary"
                  class="my-2"
                  @click="createPassword"
                  :disabled="!valid"
                  :loading="loading"
                  >Submit Password</v-btn
                >
              </v-card-actions>
              <v-card-actions class="justify-center">
                <a class="tw-font-bold" href="#" @click.prevent="resendOtp">{{
                  resend
                }}</a>
              </v-card-actions>
              <v-card-actions class="my-1 px-10">
                <v-spacer></v-spacer>
                <span class="grey--text body-2"
                  >Already Have an account ?
                </span>
                <v-spacer></v-spacer>
                <v-btn depressed to="/">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <app-bottom />
  </v-app>
</template>

<script>
import validations from '@/utils/Validations'
import { mapState } from 'vuex'
export default {
  components: {
    appHeader: () => import('@/components/Logo'),
    appBottom: () => import('@/components/BottomImage'),
  },
  props: {
    source: String,
  },
  data() {
    return {
      valid: false,
      otp: '',
      password: '',
      confirmPassword: '',
      show: false,
      show1: false,
      ...validations,
      resend: 'Resend OTP',
      username: '',
    }
  },
  mounted() {
    const regex = /\S+@\S+\.\S+/
    const param = this.$route.query.user
    if (!param || !regex.test(param)) {
      this.$router.push({ name: 'ForgotPassword' })
    }
    this.username = param
    this.$store.dispatch('auth/clearAuthenticationStatus')
  },

  computed: {
    ...mapState(['loading']),
  },

  methods: {
    async createPassword() {
      this.$store.state.loading = true
      await this.$store
        .dispatch('auth/confirmPasswordReset', {
          username: this.username,
          code: this.otp,
          password: this.password,
        })
        .then(() => {
          this.$store.state.loading = false
          if (this.hasAuthenticationStatus) {
            if (this.authenticationStatus.variant === 'error') {
              this.$store.commit('SNACKBAR', this.authenticationStatus)
            } else {
              this.$store.commit('SNACKBAR', this.authenticationStatus)
              this.$router.push({ name: 'SignIn' })
            }
          }
        })
    },
  },
  async resendOtp() {
    this.resend = 'Resending OTP...'
    await this.$store
      .dispatch('auth/passwordReset', {
        username: this.username,
      })
      .then(() => {
        if (this.hasAuthenticationStatus) {
          if (this.authenticationStatus.variant === 'error') {
            this.$store.commit('SNACKBAR', this.authenticationStatus)
          } else {
            this.$store.commit('SNACKBAR', this.authenticationStatus)
          }
        }
        this.resend = 'Resend OTP'
      })
  },
}
</script>

<style scoped></style>
