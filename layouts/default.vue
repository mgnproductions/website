<template>
  <v-app id="mgn">
    <v-app-bar :clipped-left="clipped" fixed app :height="78" elevation="0">
      <MgnLogo></MgnLogo>
      <v-spacer />
      <a class="header-link"> Quem Somos </a>

      <a class="header-link"> Comunidade </a>

      <a class="header-link"> MGN tokens </a>

      <a class="header-link"> Colecções NFTs </a>
      <v-spacer />

      <v-btn class="action-btn" :ripple="false" color="#242424">
        RECEBE MGN TOKENS
        <IconArrowDown class="ml-2"></IconArrowDown>
      </v-btn>
    </v-app-bar>
    <v-main>
      <div>
        <Nuxt />
      </div>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import MgnLogo from '~/assets/svg/mgn-logo.vue'
import IconArrowDown from '~/assets/svg/icon-arrow-down.vue'

export default {
  name: 'DefaultLayout',
  components: { MgnLogo, IconArrowDown },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss">
#mgn {
  .v-app-bar {
    background-color: #fff;
    .v-toolbar__content {
      max-width: 1262px;
      margin: 0 auto;
      padding: 4px 12px;
      .header-link {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #242424;

        margin: 0 15px;
      }
    }
  }
}
</style>
