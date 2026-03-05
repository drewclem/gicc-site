<script setup lang="ts">
import { Label } from "reka-ui";

const props = withDefaults(
  defineProps<{
    label?: string;
    type?: "text" | "email" | "tel" | "password" | "url" | "number";
    id?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
  }>(),
  {
    type: "text",
    required: false,
  },
);

const model = defineModel<string>();

const inputId = computed(
  () => props.id || props.label?.toLowerCase().replace(/\s+/g, "-"),
);

const inputClasses = computed(() => [
  "mt-1 block w-full border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
  props.error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:border-primary focus:ring-primary",
]);
</script>

<template>
  <div>
    <UiTypography as="label" :for="inputId" variant="label">
      {{ label }}
    </UiTypography>
    <input
      :id="inputId"
      v-model="model"
      :type="type"
      :name="inputId"
      :required="required"
      :placeholder="placeholder"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${inputId}-error` : undefined"
      :class="inputClasses"
    />
    <p v-if="error" :id="`${inputId}-error`" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
