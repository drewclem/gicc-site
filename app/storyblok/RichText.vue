<script setup lang="ts">
const props = defineProps<{
  blok: {
    content: any;
  };
}>();

const renderedContent = computed(() => {
  return props.blok.content ? renderRichText(props.blok.content) : "";
});
</script>

<template>
  <section v-editable="blok" class="px-4 py-12">
    <div class="prose prose-lg mx-auto max-w-3xl" v-html="renderedContent" />
  </section>
</template>
