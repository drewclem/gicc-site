<script setup lang="ts">
defineProps<{
  blok: {
    kicker: string;
    text: string;
  };
}>();
</script>

<template>
  <div v-editable="blok">
    <UiStack>
      <div class="flex gap-4 items-center">
        <UiTypography
          class="font-display text-accent !text-[64px] leading-none translate-y-1"
        >
          !!
        </UiTypography>
        <div class="-translate-y-0.5">
          <UiStack space="xsmall">
            <UiTypography
              variant="body-small"
              class="uppercase tracking-widest text-accent"
            >
              {{ blok.kicker }}
            </UiTypography>
            <UiTypography as="p" variant="h1">{{ blok.text }}</UiTypography>
          </UiStack>
        </div>
      </div>
      <div>
        <UiButton
          variant="secondary"
          href="https://www.facebook.com/share/g/1LXAcxrRwp/"
          >Join the Facebook Group</UiButton
        >
      </div>
    </UiStack>
  </div>
</template>
