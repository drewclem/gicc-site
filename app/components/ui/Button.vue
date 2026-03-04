<script setup lang="ts">
import { Button } from 'reka-ui'

defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <Button
    class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[
      variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
      variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      variant === 'outline' && 'border border-gray-300 bg-transparent hover:bg-gray-100',
      !variant && 'bg-blue-600 text-white hover:bg-blue-700',
      size === 'sm' && 'h-8 px-3 text-sm',
      size === 'lg' && 'h-12 px-8 text-lg',
      (!size || size === 'md') && 'h-10 px-4 text-base',
    ]"
  >
    <slot />
  </Button>
</template>
