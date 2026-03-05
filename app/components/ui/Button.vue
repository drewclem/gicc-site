<script setup lang="ts">
const props = defineProps<{
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
}>();

const buttonClasses = computed(() => {
  return [
    "inline-flex items-center justify-center  px-6 py-3 border border-transparent uppercase tracking-widest",
    {
      "bg-accent text-primary hover:bg-accent/75": props.variant === "primary",
      "!border-accent text-primary hover:bg-accent/25":
        props.variant === "secondary",
    },
  ];
});
</script>

<template>
  <component :is="href ? 'a' : 'button'" :href="href" :class="buttonClasses"
    ><slot
  /></component>
</template>
