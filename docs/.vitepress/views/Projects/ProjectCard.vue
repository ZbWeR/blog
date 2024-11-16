<template>
  <div
    @click="openLink"
    class="group cursor-pointer overflow-hidden rounded-lg border bg-slate-50 transition-all duration-300 hover:border-indigo-800 dark:border-transparent dark:bg-slate-800 dark:hover:border-sky-300"
  >
    <!-- banner -->
    <div class="h-40 w-full">
      <div
        :style="{ 'background-image': `url(${projectsInfo.banner})` }"
        class="h-full w-full bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
    <!-- 文字 -->
    <div class="p-4 pb-6">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-bold">{{ title }}</h1>
        <p v-if="tag" class="rounded-full px-2 py-0.5 text-[12px]" :class="littleBadgeColor">
          {{ tag }}
        </p>
      </div>
      <p
        class="mt-2 line-clamp-2 text-sm text-slate-400 transition-all duration-300 group-hover:text-slate-800 dark:group-hover:text-slate-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const projectsInfo = defineProps(['banner', 'title', 'description', 'link', 'tag'])

const littleBadgeColor = computed(() => {
  switch (projectsInfo.tag) {
    case 'JavaScript':
      return 'bg-yellow-400 text-white'
    case 'Python':
      return 'bg-sky-700 text-white'
    case 'Vue':
      return 'bg-teal-400 text-white'
    case 'TypeScript':
      return 'bg-sky-400 text-white'
    case 'C++':
      return 'bg-red-400 text-white'
    default:
      return 'border'
  }
})

function openLink() {
  window.open(projectsInfo.link, '_blank')
}
</script>
