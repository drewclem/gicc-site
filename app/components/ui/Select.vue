<script setup lang="ts">
import {
  Label,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "reka-ui";

const props = withDefaults(
  defineProps<{
    label?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    options: { value: string; label: string }[];
    error?: string;
  }>(),
  {
    required: false,
  },
);

const model = defineModel<string>();

const inputId = computed(
  () => props.id || props.label?.toLowerCase().replace(/\s+/g, "-"),
);

const triggerClasses = computed(() => [
  "mt-1 flex w-full items-center justify-between border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 data-[placeholder]:text-primary/75",
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
    <SelectRoot v-model="model" :required="required" :name="inputId">
      <SelectTrigger
        :id="inputId"
        :class="triggerClasses"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${inputId}-error` : undefined"
        aria-label="Select an option"
      >
        <SelectValue :placeholder="placeholder" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#BBAF7D"
          stroke-width="2"
          class="shrink-0"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="z-50 min-w-[160px] overflow-hidden border border-gray-200 bg-white shadow-md"
          position="popper"
          :side-offset="4"
          :body-lock="false"
        >
          <SelectViewport class="p-1">
            <SelectItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              class="relative flex cursor-pointer select-none items-center px-8 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <SelectItemIndicator
                class="absolute left-2 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </SelectItemIndicator>
              <SelectItemText>{{ option.label }}</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
    <p v-if="error" :id="`${inputId}-error`" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
