<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
    href?: string;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    disabled: false,
  },
);

const buttonClasses = computed(() => {
  return [
    "inline-flex items-center justify-center  px-6 py-3 border border-transparent uppercase tracking-widest",
    {
      "bg-accent text-primary hover:bg-accent/75": props.variant === "primary",
      "!border-accent text-primary hover:bg-accent/25":
        props.variant === "secondary",
    },
    { "opacity-50 pointer-events-none": props.disabled },
  ];
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="buttonClasses"
    :disabled
  >
    <slot />
  </component>
</template>
