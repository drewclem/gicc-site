<script setup lang="ts">
defineProps<{
  blok: {
    heading: string;
    accentHeadingText?: string;
    subheading?: string;
  };
}>();

const { elementRef, isVisible } = useScrollAnimation();
</script>

<template>
  <section
    ref="elementRef"
    v-editable="blok"
    class="py-24 lg:pt-36 scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <UiStack>
      <UiTypography as="p" class="opacity-75 uppercase tracking-widest">
        St. Simons • Jekyll • Brunswick
      </UiTypography>
      <UiPageHeading>
        {{ blok.heading }}
        <span class="text-accent" v-if="blok.accentHeadingText">
          {{ blok.accentHeadingText }}
        </span>
      </UiPageHeading>
      <UiTypography as="p" variant="body-large" class="-translate-y-4">
        {{ blok.subheading }}
      </UiTypography>
    </UiStack>
  </section>
</template>
