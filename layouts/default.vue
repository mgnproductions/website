<template>
  <v-app id="mgn">
    <v-app-bar fixed app :height="78" elevation="0">
      <nuxt-link class="header-link ml-0" :to="{ path: '' }">
        <MgnLogo></MgnLogo>
      </nuxt-link>
      <v-spacer />

      <nuxt-link class="header-link" :to="{ path: '', hash: '#team' }"
        >Quem Somos</nuxt-link
      >
      <nuxt-link class="header-link" :to="{ path: '', hash: '#community' }"
        >Comunidade</nuxt-link
      >
      <nuxt-link class="header-link" :to="{ path: '', hash: '#tokens' }"
        >MGN tokens</nuxt-link
      >
      <nuxt-link class="header-link" :to="{ path: '', hash: '#collections' }"
        >Colecções NFTs</nuxt-link
      >
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
    <v-footer>
      <v-container>
        <v-row>
          <MgnFooterLogo />
          <v-spacer />

          <nuxt-link class="header-link" :to="{ path: '', hash: '#team' }"
            >Quem Somos</nuxt-link
          >
          <nuxt-link class="header-link" :to="{ path: '', hash: '#community' }"
            >Comunidade</nuxt-link
          >
          <nuxt-link class="header-link" :to="{ path: '', hash: '#tokens' }"
            >MGN tokens</nuxt-link
          >
          <nuxt-link
            class="header-link"
            :to="{ path: '', hash: '#collections' }"
            >Colecções NFTs</nuxt-link
          >
          <v-spacer />

          <a
            class="header-link white--text text-decoration-none"
            href=""
            target="_blank"
          >
            <IconDiscord class="mr-2" />
            Entra na comunidade
          </a>
        </v-row>
        <v-row class="mt-10">
          <v-col class="text-center white--text">
            {{ new Date().getFullYear() }} &copy; MGN Filmes Community - All
            rights reserved
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import MgnFooterLogo from '../assets/svg/mgn-footer-logo.vue'
import IconDiscord from '../assets/svg/icon-discord.vue'
import MgnLogo from '~/assets/svg/mgn-logo.vue'
import IconArrowDown from '~/assets/svg/icon-arrow-down.vue'

export default {
  name: 'DefaultLayout',
  components: { MgnLogo, IconArrowDown, MgnFooterLogo, IconDiscord },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
#mgn {
  .header-link {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #242424;
    text-decoration: none;

    margin: 0 15px;
    display: flex;
    align-items: center;
    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }
  .v-app-bar {
    background-color: #fff;
    .v-toolbar__content {
      max-width: 1262px;
      margin: 0 auto;
      padding: 4px 12px;
      .header-link {
        color: #242424;
      }
    }
  }
  .v-footer {
    padding: 40px 100px 60px;
    background-color: #242424;
    .container {
      max-width: 1262px;
      .header-link {
        color: white;
      }
    }
  }
}
</style>
