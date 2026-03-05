<script setup lang="ts">
const props = defineProps<{
  blok: {
    content: any;
  };
}>();

const renderedContent = computed(() => {
  return props.blok.content ? renderRichText(props.blok.content) : "";
});

const { elementRef, isVisible } = useScrollAnimation();
</script>

<template>
  <section
    ref="elementRef"
    v-editable="blok"
    class="pb-12 scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="prose prose-lg" v-html="renderedContent" />
  </section>
</template>
