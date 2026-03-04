<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const slug = computed(() => {
  const slugValue = route.params.slug
  if (Array.isArray(slugValue)) {
    return slugValue.join('/')
  }
  return slugValue || 'home'
})

const story = await useAsyncStoryblok(
  slug.value,
  {
    version: config.public.storyblokVersion as 'draft' | 'published',
  },
)

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
