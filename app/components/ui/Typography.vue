<script setup lang="ts">
import { computed } from "vue";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "label" | "div";
  variant?:
    | "billboard"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-small"
    | "body"
    | "body-large"
    | "label-small"
    | "label"
    | "label-large"
    | "button";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "p",
  variant: "body",
  class: "",
});

const element = computed(() => {
  if (props.as !== "p" && props.as !== "span" && props.as !== "div") {
    return props.as;
  }

  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(props.variant)) {
    return props.variant;
  }

  return props.as;
});

const typographyClasses = computed(() => {
  const baseClasses: string[] = props.class ? [props.class] : [];

  switch (props.variant) {
    case "billboard":
      baseClasses.push("text-3xl lg:text-[72px] leading-none");
      break;
    case "h1":
      baseClasses.push("text-2xl lg:text-3xl leading-none font-medium");
      break;
    case "h2":
      baseClasses.push("text-xl lg:text-2xl leading-6 font-medium");
      break;
    case "h3":
      baseClasses.push("text-lg lg:text-xl leading-6 font-medium");
      break;
    case "h4":
      baseClasses.push("text-base lg:text-lg font-medium");
      break;
    case "h5":
      baseClasses.push("text-sm lg:text-base font-medium");
      break;
    case "h6":
      baseClasses.push("text-base font-semibold");
      break;
    case "body-small":
      baseClasses.push("text-xs");
      break;
    case "body":
      baseClasses.push("text-sm");
      break;
    case "body-large":
      baseClasses.push("text-base");
      break;
    case "label-small":
      baseClasses.push("text-xs   uppercase tracking-widest");
      break;
    case "label":
      baseClasses.push("text-sm uppercase tracking-widest");
      break;
    case "label-large":
      baseClasses.push("text-base uppercase tracking-widest");
      break;
    case "button":
      baseClasses.push("text-sm font-medium");
      break;
  }

  return baseClasses.join(" ");
});
</script>

<template>
  <component :is="element" :class="[typographyClasses]" v-bind="$attrs">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-semibold;
}
</style>
