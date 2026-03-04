<script setup lang="ts">
defineProps<{
  blok: {
    columns: any[]
  }
}>()
</script>

<template>
  <div v-editable="blok" class="grid gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
    <StoryblokComponent
      v-for="nestedBlok in blok.columns"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>
