<script setup lang="ts">
// import HomeFeatures from '@vuepress/theme-default/lib/client/components/HomeFeatures.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})
</script>

<template lang="pug">
.features(v-if='features.length')
  .feature(v-for='feature in features' :key='feature.title')
    h2 {{ feature.title }}
    p(v-html='feature.details')
</template>
