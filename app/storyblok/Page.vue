<script setup lang="ts">
defineProps<{
  blok: {
    body: any[];
  };
}>();
</script>

<template>
  <div v-editable="blok">
    <UiStack>
      <StoryblokComponent
        v-for="nestedBlok in blok.body"
        :key="nestedBlok._uid"
        :blok="nestedBlok"
      />
    </UiStack>
  </div>
</template>
