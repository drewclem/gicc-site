<script setup lang="ts">
defineProps<{
  blok: {
    body: any[]
  }
}>()
</script>

<template>
  <div v-editable="blok" class="min-h-screen">
    <StoryblokComponent
      v-for="nestedBlok in blok.body"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>
