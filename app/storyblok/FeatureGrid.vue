<script setup lang="ts">
defineProps<{
  blok: {
    title?: string
    features: any[]
  }
}>()

const { elementRef, isVisible } = useScrollAnimation();
</script>

<template>
  <section
    ref="elementRef"
    v-editable="blok"
    class="px-4 py-16 sm:py-24 scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2
        v-if="blok.title"
        class="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ blok.title }}
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StoryblokComponent
          v-for="feature in blok.features"
          :key="feature._uid"
          :blok="feature"
        />
      </div>
    </div>
  </section>
</template>
