<template>
  <v-card class="pa-4">
    <ValidationObserver ref="observer">
      <v-title>
        <h2>REGISTER</h2>
      </v-title>
      <form class="ma-7">
        <ValidationProvider
          v-slot="{ errors }"
          name="business name"
          rules="required|max:50"
        >
          <v-text-field
            v-model="businessName"
            :error-messages="errors"
            label="Business Name"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="mobile number"
          rules="required|phone"
        >
          <v-text-field
            v-model="mobileNo"
            :error-messages="errors"
            label="Mobile Number"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="email address"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Email Address"
            type="email"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="business registration number"
          rules="required"
        >
          <v-text-field
            v-model="businessRegNo"
            :error-messages="errors"
            label="Business Registration Number"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="kra Pin" rules="required">
          <v-text-field
            v-model="kraPin"
            :error-messages="errors"
            label="KRA PIN"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="Primary Contact"
          rules="required|max:50"
        >
          <v-text-field
            v-model="primaryContact"
            :error-messages="errors"
            label="Primary Contact Name"
            type="text"
            required
          ></v-text-field>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" name="city" rules="required">
          <v-text-field
            v-model="city"
            :error-messages="errors"
            label="city"
            type="text"
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
    businessName: '',
    mobileNo: 254,
    email: '',
    role: ['buyer'],
    businessRegNo: '',
    kraPin: '',
    primaryContact: '',
    password: '',
    confirmPassword: '',
    checkbox: [],
    city: '',
    terms: 'I have read all the terms and conditions',
  }),

  methods: {
    onSubmit() {
      this.$refs.observer.validate()

      const formData = {
        name: this.businessName,
        mobile: this.mobileNo,
        email: this.email,
        roles: this.role,
        password: this.password,
        kra_pin: this.kraPin,
        businessRegistrationNumber: this.businessRegNo,
        city: this.city,
        primaryContactName: this.primaryContact,
      }

      console.log(formData)
      this.$store.dispatch('registerBuyer', formData)
    },
  },
}
</script>
