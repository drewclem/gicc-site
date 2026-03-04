<script setup lang="ts">
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'

defineProps<{
  tabs: Array<{
    value: string
    label: string
  }>
  defaultValue?: string
}>()
</script>

<template>
  <TabsRoot :default-value="defaultValue || tabs[0]?.value" class="w-full">
    <TabsList
      class="relative flex w-full border-b border-gray-200"
    >
      <TabsIndicator
        class="absolute bottom-0 left-0 h-0.5 w-[--reka-tabs-indicator-size] translate-x-[--reka-tabs-indicator-position] bg-blue-600 transition-[width,transform] duration-300"
      />
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 data-[state=active]:text-blue-600"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>

    <div class="mt-4">
      <slot />
    </div>
  </TabsRoot>
</template>
