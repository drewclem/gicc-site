<script setup lang="ts">
const config = useRuntimeConfig()
const story = await useAsyncStoryblok(
  'home',
  {
    version: config.public.storyblokVersion as 'draft' | 'published',
  },
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div v-else class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900">Welcome to GICC Site</h1>
      <p class="mt-2 text-gray-600">
        Create a "home" story in Storyblok to get started.
      </p>
    </div>
  </div>
</template>
