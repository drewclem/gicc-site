<script setup lang="ts">
const { isConfigured, fetchStoryWithFallbacks } = useStoryblokContent();

const { story, error } = await fetchStoryWithFallbacks(["home", ""]);
</script>

<template>
  <StoryblokComponent v-if="story?.content" :blok="story.content" />
  <div v-else class="flex min-h-screen items-center justify-center">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-3xl font-bold text-gray-900">Welcome</h1>
      <p class="mt-4 text-gray-600">
        <template v-if="!isConfigured">
          Configure your Storyblok access token in
          <code class="rounded bg-gray-100 px-2 py-1">.env</code> to get
          started.
        </template>
        <template v-else-if="error">
          {{ error }}
        </template>
        <template v-else>
          Create a "home" story in Storyblok to see your content here.
        </template>
      </p>
      <div class="mt-8">
        <NuxtLink
          to="/ui-demo"
          class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          View UI Components Demo
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
