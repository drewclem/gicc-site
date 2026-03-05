<script setup lang="ts">
defineProps<{
  blok: {
    title: string;
    titleAccentText?: string;
    subheading?: string;
  };
}>();

const { elementRef, isVisible } = useScrollAnimation();
</script>

<template>
  <div
    ref="elementRef"
    v-editable="blok"
    class="pt-24 scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <UiPageHeading>
      {{ blok.title }}
      <template v-if="blok.titleAccentText" #accentHeadingText>
        {{ blok.titleAccentText }}
      </template>
    </UiPageHeading>
  </div>
</template>
