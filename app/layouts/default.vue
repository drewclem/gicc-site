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

const mobileMenuOpen = ref(false);

const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>

<template>
  <div class="relative flex flex-col min-h-screen bg-white">
    <header class="border-b border-gray-200 animate-fade-down">
      <nav
        class="container mx-auto flex items-center justify-between px-6 lg:px-16 pt-4"
      >
        <NuxtLink to="/" class="sr-only">
          {{ siteName }}
        </NuxtLink>
        <NuxtLink to="/">
          <UiHeaderLogo />
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item._uid"
            :to="item.link?.cached_url ? `/${item.link.cached_url}` : '/'"
            class="nav-link uppercase tracking-wider relative"
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

        <!-- Mobile menu button -->
        <button
          class="lg:hidden p-2"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>

    <!-- Mobile slideout menu -->
    <Transition name="slideout">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 lg:hidden">
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50"
          @click="mobileMenuOpen = false"
        />

        <!-- Panel -->
        <div class="absolute top-0 right-0 h-full w-72 bg-white shadow-xl">
          <div class="flex justify-end p-4">
            <button
              class="p-2"
              aria-label="Close menu"
              @click="mobileMenuOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav class="px-6">
            <UiStack space="medium">
              <NuxtLink
                v-for="item in navItems"
                :key="item._uid"
                :to="item.link?.cached_url ? `/${item.link.cached_url}` : '/'"
                class="block text-lg uppercase tracking-wider py-2 border-b border-gray-100"
              >
                {{ item.label }}
              </NuxtLink>
              <!-- Fallback nav if no Storyblok items -->
              <template v-if="!navItems.length">
                <NuxtLink
                  to="/"
                  class="block text-lg uppercase tracking-wider py-2 border-b border-gray-100"
                >
                  Home
                </NuxtLink>
                <NuxtLink
                  to="/ui-demo"
                  class="block text-lg uppercase tracking-wider py-2 border-b border-gray-100"
                >
                  UI Demo
                </NuxtLink>
              </template>
            </UiStack>
          </nav>
        </div>
      </div>
    </Transition>

    <main
      class="relative flex-1 container mx-auto px-6 lg:px-16 border-l pb-12 lg:pb-24"
    >
      <div class="lg:flex gap-12 items-start">
        <div class="lg:w-1/2 animate-fade-up">
          <slot />
        </div>
        <div
          class="relative z-10 hidden lg:flex items-center justify-center w-1/2 mt-12"
        >
          <div class="relative">
            <div
              class="absolute w-3/5 shadow-lg -rotate-6 translate-y-1/4 animate-photo-1"
            >
              <img
                src="/images/hero_1.jpg"
                alt="Two girls play a game of chess at a small café table while another pair plays behind them. One girl lifts a black chess piece to make a move while the other studies the board. Behind them, another chess game is in progress at a nearby table, with drinks and the café counter visible in the background."
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="w-3/5 shadow-lg rotate-3 ml-auto translate-y-3/4 animate-photo-2"
            >
              <img
                src="/images/hero-2.jpg"
                alt="Two men sit across from each other playing chess at a small table inside a brightly lit bookstore or library. One man in a tan jacket studies the board while the other, wearing a tan baseball cap and light jacket, rests his hand on his chin. A takeaway coffee cup sits beside the board. In the background, another pair of players are also focused on a chess game among rows of bookshelves."
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- <UiLogoOutline
      class="hidden lg:block fixed bottom-0 right-0 h-[85vh] lg:opacity-10 translate-x-3/4 lg:translate-x-1/4 pointer-events-none animate-fade-in"
    /> -->
    <UiLogoSolid
      class="text-primary/40 block fixed bottom-0 right-0 h-[85vh] translate-x-1/2 lg:translate-x-1/4 pointer-events-none animate-fade-in"
    />
  </div>
</template>
