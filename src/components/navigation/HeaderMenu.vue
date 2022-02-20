<template>
  <v-app-bar app light>
    <v-app-bar-nav-icon
      @click.stop="drawerClick(!navDialog)"
    ></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down"></span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <app-avatar> </app-avatar>
    <div class="header">{{ username }}</div>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    appAvatar: () => import('@/components/navigation/AvatarMenu'),
  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    ...mapState(['navDialog']),
  },
  methods: {
    drawerClick(value) {
      this.$store.state.navDialog = value
    },
  },
}
</script>
