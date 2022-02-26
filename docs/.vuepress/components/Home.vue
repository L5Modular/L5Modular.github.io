<script setup>
// import Home from '@vuepress/theme-default/lib/client/components/Home.vue'

import HomeContent from '@vuepress/theme-default/lib/client/components/HomeContent.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from '@vuepress/theme-default/lib/client/components/HomeFooter.vue'
import HomeHero from '@vuepress/theme-default/lib/client/components/HomeHero.vue'

import Logo from './Logo.vue'

</script>

<template lang="pug">
main.home
  header
    Logo
  HomeHero
  HomeFeatures
  HomeContent
  HomeFooter
</template>

<style lang="sass">
.home
  header
    text-align: center
    padding-top: 60px
</style>
