<script setup lang="ts">
const props = defineProps<{
  blok: {
    body: any[];
    seoTitle?: string;
    seoDescription?: string;
    ogImage?: {
      filename: string;
      alt?: string;
    };
  };
}>();

const config = useRuntimeConfig();

useSeoMeta({
  title: () => props.blok.seoTitle || config.public.siteName,
  ogTitle: () => props.blok.seoTitle || config.public.siteName,
  description: () => props.blok.seoDescription || config.public.siteDescription,
  ogDescription: () =>
    props.blok.seoDescription || config.public.siteDescription,
  ogImage: () => config.public.siteImage,
  twitterTitle: () => props.blok.seoTitle || config.public.siteName,
  twitterDescription: () =>
    props.blok.seoDescription || config.public.siteDescription,
  twitterImage: () => props.blok.ogImage?.filename || config.public.siteImage,
});
</script>

<template>
  <div v-editable="blok">
    <UiStack>
      <StoryblokComponent
        v-for="nestedBlok in blok.body"
        :key="nestedBlok._uid"
        :blok="nestedBlok"
      />
    </UiStack>
  </div>
</template>
