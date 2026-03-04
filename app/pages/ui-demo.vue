<script setup lang="ts">
import { TabsContent } from 'reka-ui'

const accordionItems = [
  {
    value: 'item-1',
    title: 'What is Reka UI?',
    content: 'Reka UI is a headless component library for Vue that provides unstyled, accessible components.',
  },
  {
    value: 'item-2',
    title: 'What is Storyblok?',
    content: 'Storyblok is a headless CMS that enables developers and content teams to collaborate efficiently.',
  },
  {
    value: 'item-3',
    title: 'Why Nuxt?',
    content: 'Nuxt provides an intuitive development experience with built-in features like file-based routing and auto-imports.',
  },
]

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'features', label: 'Features' },
  { value: 'docs', label: 'Documentation' },
]

const dialogOpen = ref(false)
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-12">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">
      UI Components Demo
    </h1>
    <p class="mb-12 text-gray-600">
      Examples of Reka UI components styled with Tailwind CSS.
    </p>

    <!-- Buttons -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary">Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="outline">Outline</UiButton>
        <UiButton variant="primary" size="sm">Small</UiButton>
        <UiButton variant="primary" size="lg">Large</UiButton>
      </div>
    </section>

    <!-- Dialog -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">Dialog</h2>
      <UiDialog
        v-model:open="dialogOpen"
        title="Example Dialog"
        description="This is an example dialog built with Reka UI."
      >
        <template #trigger>
          <UiButton variant="primary">Open Dialog</UiButton>
        </template>
        <p>This is the dialog content. You can put any content here.</p>
        <div class="mt-4 flex justify-end gap-2">
          <UiButton variant="outline" @click="dialogOpen = false">
            Cancel
          </UiButton>
          <UiButton variant="primary" @click="dialogOpen = false">
            Confirm
          </UiButton>
        </div>
      </UiDialog>
    </section>

    <!-- Tabs -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">Tabs</h2>
      <UiTabs :tabs="tabs" default-value="overview">
        <TabsContent value="overview" class="text-gray-600">
          <p>This is the overview content. Tabs help organize content into separate views.</p>
        </TabsContent>
        <TabsContent value="features" class="text-gray-600">
          <p>Features content goes here. Each tab can have different content.</p>
        </TabsContent>
        <TabsContent value="docs" class="text-gray-600">
          <p>Documentation and guides would go in this section.</p>
        </TabsContent>
      </UiTabs>
    </section>

    <!-- Accordion -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900">Accordion</h2>
      <UiAccordion :items="accordionItems" />
    </section>
  </div>
</template>
