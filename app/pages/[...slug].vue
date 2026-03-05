<script setup lang="ts">
const route = useRoute();
const { isConfigured, fetchStory } = useStoryblokContent();

const slug = computed(() => {
  const slugValue = route.params.slug;
  if (Array.isArray(slugValue)) {
    return slugValue.join("/");
  }
  return slugValue || "home";
});

if (!isConfigured.value) {
  throw createError({
    statusCode: 503,
    statusMessage: "Storyblok not configured",
  });
}

const { story, error } = await fetchStory(slug.value);

if (!story) {
  throw createError({
    statusCode: 404,
    statusMessage: error || "Page not found",
  });
}
</script>

<template>
  <StoryblokComponent v-if="story?.content" :blok="story.content" />
</template>
