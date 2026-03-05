<script setup lang="ts">
const config = useRuntimeConfig();
const { fetchStory } = useStoryblokContent();

const global = ref<any>(null);

const { story } = await fetchStory("global");
global.value = story?.content || null;

const navItems = computed(() => global.value?.headerNav || []);
const siteName = computed(
  () => config.public.siteName || "Golden Isles Chess Club",
);
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-white">
    <header class="border-b border-gray-200">
      <nav
        class="container mx-auto flex items-center justify-between px-16 pt-4"
      >
        <NuxtLink to="/" class="sr-only">
          {{ siteName }}
        </NuxtLink>
        <div>
          <UiHeaderLogo />
        </div>
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item._uid"
            :to="item.link?.cached_url ? `/${item.link.cached_url}` : '/'"
            class="uppercase tracking-wider"
          >
            {{ item.label }}
          </NuxtLink>
          <!-- Fallback nav if no Storyblok items -->
          <template v-if="!navItems.length">
            <NuxtLink
              to="/"
              class="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/ui-demo"
              class="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              UI Demo
            </NuxtLink>
          </template>
        </div>
      </nav>
    </header>

    <main class="relative flex-1 container mx-auto px-16 border-l">
      <slot />
      <div class="absolute bottom-0 right-0">
        <UiLogoOutline class="h-[85vh] opacity-10 translate-x-1/3" />
      </div>
    </main>

    <!-- <footer class="border-t border-gray-200 py-8">
      <div class="mx-auto max-w-6xl px-4 text-center text-sm">
        &copy; {{ new Date().getFullYear() }} {{ siteName }}. All rights
        reserved.
      </div>
    </footer> -->
  </div>
</template>
