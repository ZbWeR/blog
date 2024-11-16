<template>
  <footer
    v-if="showFooter"
    class="relative border-t px-6 pb-4 pt-8 text-center text-black/40 dark:border-zinc-800 dark:text-zinc-300/40 sm:pt-8"
  >
    <p class="text-sm font-medium">{{ footer.copyright }}</p>
    <p class="text-sm font-medium">
      Theme |
      <LinkText
        text="Easy-Vitepress-Blog"
        link="https://github.com/ZbWeR/easy-vitepress-blog"
        :icon="RiExternalLinkLine"
      />
    </p>
  </footer>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import LinkText from './LinkText.vue'
import { computed } from 'vue'
import { useSidebar } from 'vitepress/theme'
import { RiExternalLinkLine } from '@remixicon/vue'

const { theme, frontmatter } = useData()
const { footer } = theme.value
const { hasSidebar } = useSidebar()

const showFooter = computed(() => {
  const footer: boolean = frontmatter.value.footer ?? true
  // 当侧边栏可见时，不显示页脚
  return footer && !hasSidebar.value
})
</script>
