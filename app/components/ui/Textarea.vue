<script setup lang="ts">
import { Label } from "reka-ui";

const props = withDefaults(
  defineProps<{
    label?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    error?: string;
    maxLength?: number;
  }>(),
  {
    required: false,
    rows: 4,
  },
);

const characterCount = computed(() => model.value?.length ?? 0);

const model = defineModel<string>();

const inputId = computed(
  () => props.id || props.label?.toLowerCase().replace(/\s+/g, "-"),
);

const textareaClasses = computed(() => [
  "mt-1 block w-full border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
  props.error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:border-primary focus:ring-primary",
]);
</script>

<template>
  <div>
    <UiTypography v-if="label" as="label" :for="inputId" variant="label">
      {{ label }}
    </UiTypography>
    <textarea
      :id="inputId"
      v-model="model"
      :name="inputId"
      :rows="rows"
      :required="required"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${inputId}-error` : undefined"
      :class="textareaClasses"
    />
    <div class="mt-1 flex justify-between text-sm">
      <p v-if="error" :id="`${inputId}-error`" class="text-red-600">
        {{ error }}
      </p>
      <span v-else />
      <span v-if="maxLength" class="text-gray-500">
        {{ characterCount }} / {{ maxLength }}
      </span>
    </div>
  </div>
</template>
