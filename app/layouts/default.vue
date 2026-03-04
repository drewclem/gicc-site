<template>
  <div class="min-h-screen bg-white">
    <header class="border-b border-gray-200">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NuxtLink to="/" class="text-xl font-bold text-gray-900">
          GICC
        </NuxtLink>
        <div class="flex items-center gap-6">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-gray-200 py-8">
      <div class="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
        &copy; {{ new Date().getFullYear() }} GICC. All rights reserved.
      </div>
    </footer>
  </div>
</template>
