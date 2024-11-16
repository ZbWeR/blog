<template>
  <a
    :href="link"
    class="relative inline-flex items-center text-black/40 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:border-b after:border-blue-500 after:opacity-0 after:transition-all after:duration-200 hover:text-blue-500 after:hover:opacity-100 dark:text-zinc-300/40 dark:after:border-blue-400 dark:hover:text-blue-400"
    :target="mode === 'blank' ? '_blank' : '_self'"
  >
    {{ text }}
    <component v-if="icon" :is="icon" class="ml-1 h-4 w-4" />
  </a>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

interface LinkTextProps {
  text: string
  link: string
  mode?: 'self' | 'blank'
  icon?: Component
}

const props = withDefaults(defineProps<LinkTextProps>(), {
  mode: 'blank'
})
</script>
