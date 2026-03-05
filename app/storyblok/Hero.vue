<script setup lang="ts">
defineProps<{
  blok: {
    heading: string;
    accentHeadingText?: string;
    subheading?: string;
  };
}>();
</script>

<template>
  <section v-editable="blok" class="lg:w-1/2 py-24 lg:pt-36">
    <UiStack>
      <UiTypography as="p" class="opacity-75 uppercase tracking-widest">
        St. Simons• Jekyll • Brunswick
      </UiTypography>
      <UiPageHeading>
        {{ blok.heading }}
        <span class="text-accent">{{ blok.accentHeadingText }}</span>
      </UiPageHeading>
      <UiTypography as="p" variant="body-large" class="-translate-y-4">
        {{ blok.subheading }}
      </UiTypography>
    </UiStack>
  </section>
</template>
