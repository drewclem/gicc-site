<script setup lang="ts">
defineProps<{
  blok: {
    title: string
    description: string
    icon?: string
  }
}>()

const { elementRef, isVisible } = useScrollAnimation();
</script>

<template>
  <div
    ref="elementRef"
    v-editable="blok"
    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div
      v-if="blok.icon"
      class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl"
    >
      {{ blok.icon }}
    </div>
    <h3 class="text-lg font-semibold text-gray-900">
      {{ blok.title }}
    </h3>
    <p class="mt-2 text-gray-600">
      {{ blok.description }}
    </p>
  </div>
</template>
