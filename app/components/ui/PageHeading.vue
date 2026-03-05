<template>
  <div class="relative">
    <div
      class="absolute inset-0 bg-accent w-1 h-16 left-0 -translate-x-16 -translate-y-1 top-0"
    ></div>
    <UiTypography as="h1" variant="billboard">
      <slot />
    </UiTypography>
  </div>
</template>
