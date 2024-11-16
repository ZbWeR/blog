<template>
  <div
    @click="openLink"
    class="group flex h-full w-full cursor-pointer flex-col items-center rounded-xl border bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-indigo-800 dark:border-transparent dark:bg-slate-800 dark:text-slate-300 dark:hover:border-sky-300"
    :class="isMe ? 'bg-me-card cursor-default' : 'bg-stripe cursor-pointer'"
  >
    <div class="flex w-full items-center gap-5">
      <!-- 头像 -->
      <div
        class="VP-shadow h-14 w-14 flex-shrink-0 overflow-hidden rounded-full sm:h-[70px] sm:w-[70px]"
      >
        <img v-if="avatar" :src="avatar" :alt="name" />
        <img v-else src="../img/avatar-fallback.png" alt="默认头像" />
      </div>
      <!-- 简介 -->
      <div class="flex-1">
        <div class="flex w-full items-center justify-between">
          <h1 class="text-lg font-bold tracking-wider dark:text-zinc-200">
            {{ name }}
          </h1>
          <Badge
            class="transition-all duration-300 group-hover:opacity-100"
            :color="color"
            :class="isMe ? '' : 'opacity-0'"
            :light="true"
          >
            {{ tag }}
          </Badge>
        </div>
        <p class="mt-1 line-clamp-2 w-full break-words text-sm dark:text-zinc-400 sm:text-base">
          {{ title }}
        </p>
        <div
          class="mt-1 flex items-center gap-1 text-sm text-black/40 group-hover:text-sky-400 dark:text-white/40"
          :class="isMe ? 'text-sky-400 dark:text-sky-400' : 'text-black/40'"
        >
          <p>{{ shortLink }}</p>
          <RiExternalLinkLine v-if="!isMe" class="h-[15px] w-[15px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Badge from '../../components/Badge.vue'
import { RiExternalLinkLine } from '@remixicon/vue'
import { Friend } from '../../userConfig/friendsInfo'

const friendsInfo = defineProps<Friend>()

const shortLink = computed(() => {
  let baseLink = friendsInfo.link
  const regex = /^(http|https):\/\/(.*?)(\/)?$/
  return baseLink.replace(regex, '$2')
})

function openLink() {
  if (friendsInfo.isMe) return
  window.open(friendsInfo.link, '_blank')
}
</script>

<style scoped>
.VP-shadow {
  box-shadow: var(--vp-shadow-3);
}
.bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(0 0% 100%),
    hsl(0 0% 100%) 13px,
    hsl(0 0% 95%) 13px,
    hsl(0 0% 95%) 14px
  );
}
.dark .bg-stripe:hover {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(202, 80%, 24%),
    hsl(202, 80%, 24%) 13px,
    hsl(200, 80%, 20%) 13px,
    hsl(200, 80%, 20%) 14px
  );
}

.bg-me-card {
  background-size: 20px 20px;
  background-image: linear-gradient(90deg, rgba(60, 10, 30, 0.1) 3%, transparent 0),
    linear-gradient(1turn, rgba(60, 10, 30, 0.1) 3%, transparent 0);
}
.dark .bg-me-card {
  background-size: 20px 20px;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 3%, transparent 0),
    linear-gradient(1turn, rgba(255, 255, 255, 0.1) 3%, transparent 0);
}
</style>
