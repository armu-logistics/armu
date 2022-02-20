<template>
  <v-card class="pa-4">
    <ValidationObserver ref="observer">
      <v-title>
        <h2>REGISTER</h2>
      </v-title>
      <form class="ma-7">
        <ValidationProvider
          v-slot="{ errors }"
          name="fullname"
          rules="required|max:50"
        >
          <v-text-field
            v-model="fullname"
            :error-messages="errors"
            label="Full Name"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Email Address"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="phone"
          rules="required|phone"
        >
          <v-text-field
            v-model="phone"
            :error-messages="errors"
            label="Mobile No."
            type="number"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="nationalId"
          rules="required|max:10"
        >
          <v-text-field
            v-model="nationalId"
            :error-messages="errors"
            label="National ID"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="kraPin"
          rules="required|kraPin"
        >
          <v-text-field
            v-model="kraPin"
            :error-messages="errors"
            label="KRA PIN"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="farmName"
          rules="required|max:50"
        >
          <v-text-field
            v-model="farmName"
            :error-messages="errors"
            label="Farm name"
            type="text"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="farmLocation"
          rules="required"
        >
          <v-text-field
            v-model="farmLocation"
            :error-messages="errors"
            label="Location of Farm (County)"
            type="text"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="farmSize"
          rules="required"
        >
          <v-text-field
            v-model="farmSize"
            :error-messages="errors"
            label="Farm Size (acres)"
            type="number"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required|password"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required|password"
        >
          <v-text-field
            v-model="confirmPassword"
            :error-messages="errors"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            :label="terms"
            type="checkbox"
            required
          ></v-checkbox>
        </ValidationProvider>

        <v-btn block large color="primary" class="my-7" @click="onSubmit">
          Register
        </v-btn>
        <v-spacer></v-spacer>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

extend('phone', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('password', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    fullname: '',
    nationalId: '',
    email: '',
    phone: 254,
    kraPin: '',
    farmName: '',
    farmLocation: '',
    farmSize: '',
    password: '',
    confirmPassword: '',
    checkbox: [],
    terms: 'I have read all the terms and conditions',
  }),

  methods: {
    onSubmit() {
      this.$refs.observer.validate()

      const formData = {
        name: this.fullname,
        mobile: this.phone,
        email: this.email,
        roles: ['farmer'],
        password: this.password,
        kra_pin: this.kraPin,
        national_id: this.nationalId,
        farms: [
          {
            name: this.farmName,
            location: this.farmLocation,
            size: this.farmSize,
          },
        ],
      }

      console.log(formData)
      this.$store.dispatch('registerFarmer', formData)
    },
    clear() {
      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.phone = ''
      this.password = ''
      this.confirmPassword = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>
