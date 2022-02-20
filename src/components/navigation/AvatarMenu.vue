<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on">
          <v-avatar size="30px" item class="ma-2">
            <v-img src="@/assets/avatars/profile.png" alt="user"></v-img
          ></v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <a href="#" @click.prevent="onLogout">Logout</a>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'My Dashboard', link: '/dashboard' },
      { title: 'My Profile', link: '/profile' },
    ],
  }),
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>
