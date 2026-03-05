<script setup lang="ts">
import { computed } from "vue";

interface Props {
  space?:
    | "none"
    | "xxsmall"
    | "xsmall"
    | "small"
    | "default"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  as?:
    | "div"
    | "section"
    | "article"
    | "main"
    | "aside"
    | "header"
    | "footer"
    | "nav"
    | "form"
    | "ul"
    | "ol";
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  space: "default",
  as: "div",
  class: "",
});

const spaceClasses = computed(() => {
  const baseClasses: string[] = props.class ? [props.class] : [];

  switch (props.space) {
    case "none":
      baseClasses.push("space-y-0");
      break;
    case "xxsmall":
      baseClasses.push("space-y-0.5");
      break;
    case "xsmall":
      baseClasses.push("space-y-1");
      break;
    case "small":
      baseClasses.push("space-y-2");
      break;
    case "medium":
      baseClasses.push("space-y-4");
      break;
    case "large":
      baseClasses.push("space-y-8");
      break;
    case "xlarge":
      baseClasses.push("space-y-12");
      break;
    case "xxlarge":
      baseClasses.push("space-y-16");
      break;
    default:
      baseClasses.push("space-y-6");
      break;
  }

  return baseClasses.join(" ");
});
</script>

<template>
  <component :is="as" class="flex flex-col" :class="[spaceClasses]">
    <slot />
  </component>
</template>
