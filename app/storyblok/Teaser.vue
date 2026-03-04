<script setup lang="ts">
defineProps<{
  blok: {
    headline: string
  }
}>()
</script>

<template>
  <div v-editable="blok" class="py-8 text-center">
    <h2 class="text-2xl font-semibold text-gray-900">
      {{ blok.headline }}
    </h2>
  </div>
</template>
