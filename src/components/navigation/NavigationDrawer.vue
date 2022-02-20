<template>
  <v-navigation-drawer
    v-model="navDialog"
    app
    dark
    class="dashContent darken-2"
  >
    <v-list>
      <v-img src="@/assets/logo2.png" class="my-5 mx-auto" max-width="150">
      </v-img>
      <v-divider />
      <v-list-item-group color="secondary" class="my-5">
        <template v-for="(item, i) in items">
          <v-list-item
            :to="item.link"
            active-class="nav-active"
            :key="i"
            v-if="item.position === role"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title small v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: 'mdi-view-dashboard',
        text: 'Market Overview',
        link: '/dashboard',
        position: 'ROLE_FARMER',
      },
      {
        icon: 'mdi-cart',
        text: 'My orders',
        link: '/orders',
        position: 'ROLE_FARMER',
      },
      {
        icon: 'mdi-sprout',
        text: 'Products',
        link: '/buyer',
        position: 'ROLE_BUYER',
      },
      {
        icon: 'mdi-store',
        text: 'My Inventory',
        link: '/inventory',
        position: 'ROLE_FARMER',
      },
      {
        icon: 'mdi-receipt',
        text: 'Invoice',
        link: '/invoice',
        position: 'ROLE_FARMER',
      },
    ],
  }),
  computed: {
    ...mapState(['navDialog']),
    ...mapGetters(['role']),
  },
}
</script>

<style scoped>
.nav-active {
  background-color: #012247;
  border-left: #ffa500 8px solid;
}
</style>
