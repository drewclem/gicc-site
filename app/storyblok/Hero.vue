<script setup lang="ts">
defineProps<{
  blok: {
    headline: string
    subheadline?: string
    cta_text?: string
    cta_link?: {
      cached_url: string
    }
    background_image?: {
      filename: string
      alt: string
    }
  }
}>()
</script>

<template>
  <section
    v-editable="blok"
    class="relative flex min-h-[60vh] items-center justify-center bg-gray-900 px-4 py-20 text-white"
    :style="blok.background_image?.filename ? `background-image: url(${blok.background_image.filename}); background-size: cover; background-position: center;` : ''"
  >
    <div
      v-if="blok.background_image?.filename"
      class="absolute inset-0 bg-black/50"
    />
    <div class="relative z-10 mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {{ blok.headline }}
      </h1>
      <p
        v-if="blok.subheadline"
        class="mt-6 text-lg text-gray-300 sm:text-xl"
      >
        {{ blok.subheadline }}
      </p>
      <div v-if="blok.cta_text" class="mt-10">
        <UiButton variant="primary" size="lg">
          <NuxtLink v-if="blok.cta_link" :to="blok.cta_link.cached_url">
            {{ blok.cta_text }}
          </NuxtLink>
          <span v-else>{{ blok.cta_text }}</span>
        </UiButton>
      </div>
    </div>
  </section>
</template>
