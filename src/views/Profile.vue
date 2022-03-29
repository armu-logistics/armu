<template>
  <v-app id="inspire">
    <app-side-bar />
    <app-header-menu />

    <v-content class="accent">
      <v-container class="mt-10" align="center" justify="center">
        <v-row class="mx-auto px-5 pt-5">
          <h1 class="grey--text display-1 pr-5">MY Account</h1>
          <v-divider vertical></v-divider>
          <p class="px-3 pt-3">Edit Profile</p>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-5">
              <v-card-title class="mt-8">
                <v-row>
                  <v-avatar class="mx-auto my-5" size="150">
                    <img
                      alt="user"
                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                    />
                  </v-avatar>
                </v-row>
              </v-card-title>

              <v-row class="">
                <h2 class="title mx-auto my-3">{{ username }}</h2>
                <br />
              </v-row>
              <v-row>
                <p class="caption mx-auto mb-10">{{ email }}</p>
              </v-row>

              <v-card-action>
                <v-row>
                  <v-btn class="secondary mx-auto mb-10">
                    change profile picture
                  </v-btn>
                </v-row>
              </v-card-action>
            </v-card>
          </v-col>

          <v-col cols="12" md="8">
            <v-card>
              <template>
                <v-tabs
                  fixed-tabs
                  background-color="primary"
                  dark
                  v-model="tab"
                  height="100"
                >
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab href="#profile"> Profile </v-tab>
                  <v-tab href="#changePassword"> Change Password </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item value="profile">
                    <v-card class="my-10">
                      <v-list class="pl-10 py-5">
                        <v-row class="my-3">
                          <v-col cols="12" md="4">
                            <p class="px-10">Name</p>
                          </v-col>
                          <v-col cols="12" md="1">
                            <v-divider vertical></v-divider>
                          </v-col>
                          <v-col cols="12" md="7">
                            <p class="px-10">{{ username }}</p>
                          </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row class="my-3">
                          <v-col cols="12" md="4">
                            <p class="px-10">Email Address</p>
                          </v-col>
                          <v-col cols="12" md="1">
                            <v-divider vertical></v-divider>
                          </v-col>
                          <v-col cols="12" md="7">
                            <p class="px-10">{{ email }}</p>
                          </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-divider></v-divider>
                        <v-row class="my-3">
                          <v-col cols="12" md="4">
                            <p class="px-10">Role</p>
                          </v-col>
                          <v-col cols="12" md="1">
                            <v-divider vertical></v-divider>
                          </v-col>
                          <v-col cols="12" md="7">
                            <p class="px-10">{{ roles }}</p>
                          </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-row class="my-3">
                          <v-col cols="12" md="4">
                            <p class="px-10">Created</p>
                          </v-col>
                          <v-col cols="12" md="1">
                            <v-divider vertical></v-divider>
                          </v-col>
                          <v-col cols="12" md="7">
                            <p class="px-10">12/05/2020</p>
                          </v-col>
                        </v-row>
                      </v-list>
                    </v-card>
                  </v-tab-item>

                  <v-tab-item value="changePassword">
                    <v-row class="my-5 mx-auto">
                      <v-col class="mx-auto mt-5" cols="12" md="8">
                        <v-text-field
                          v-model="oldPassword"
                          label="Old Password"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          @click:append="show = !show"
                          prepend-icon="mdi-lock"
                          required
                        >
                        </v-text-field>
                      </v-col>
                      <v-col class="mx-auto" cols="12" md="8">
                        <v-text-field
                          v-model="newPassword"
                          label="New Password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          prepend-icon="mdi-lock"
                          required
                        >
                        </v-text-field>
                      </v-col>

                      <v-col class="mx-auto" cols="12" md="8">
                        <v-text-field
                          v-model="confirmPassword"
                          label="Confirm Password"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show2 ? 'text' : 'password'"
                          @click:append="show2 = !show2"
                          prepend-icon="mdi-lock"
                          required
                        >
                        </v-text-field>
                      </v-col>

                      <v-col class="mx-auto my-5" cols="12" md="8">
                        <v-btn large block class="secondary">
                          Update Password
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row class="mx-auto">
                      <v-col class="mx-auto" cols="12"> </v-col>
                    </v-row>
                  </v-tab-item>
                </v-tabs-items>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    appSideBar: () => import('@/components/navigation/NavigationDrawer'),
    appHeaderMenu: () => import('@/components/navigation/HeaderMenu'),
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    tab: null,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    show: false,
    show1: false,
    show2: false,
  }),

  computed: {
    ...mapState(['email', 'username', 'roles']),
  },
}
</script>
