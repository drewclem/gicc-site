<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'

defineProps<{
  items: Array<{
    value: string
    title: string
    content: string
  }>
  type?: 'single' | 'multiple'
}>()
</script>

<template>
  <AccordionRoot
    :type="type || 'single'"
    class="w-full divide-y divide-gray-200 rounded-lg border border-gray-200"
    collapsible
  >
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      class="overflow-hidden first:rounded-t-lg last:rounded-b-lg"
    >
      <AccordionHeader class="flex">
        <AccordionTrigger
          class="group flex flex-1 items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-50"
        >
          {{ item.title }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div class="px-4 pb-3 pt-0 text-gray-600">
          {{ item.content }}
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
