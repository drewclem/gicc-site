export function useStoryblokContent() {
  const config = useRuntimeConfig();

  const isConfigured = computed(
    () => !!config.public.storyblok?.accessToken
  );

  const version = computed(
    () => (config.public.storyblokVersion as "draft" | "published") || "draft"
  );

  async function fetchStory(slug: string) {
    if (!isConfigured.value) {
      return { story: null, error: "Storyblok not configured" };
    }

    try {
      const storyblokApi = useStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
        version: version.value,
      });
      return { story: data?.story || null, error: null };
    } catch (e: any) {
      const status = e?.response?.status;
      let error = "Failed to fetch from Storyblok";

      if (status === 401) {
        error = "Unauthorized - check your access token";
      } else if (status === 404) {
        error = `Story "${slug}" not found`;
      }

      console.warn(`Storyblok fetch error (${slug}):`, e?.message);
      return { story: null, error };
    }
  }

  async function fetchStoryWithFallbacks(slugs: string[]) {
    for (const slug of slugs) {
      const result = await fetchStory(slug);
      if (result.story) {
        return result;
      }
    }
    return { story: null, error: `No stories found for: ${slugs.join(", ")}` };
  }

  return {
    isConfigured,
    version,
    fetchStory,
    fetchStoryWithFallbacks,
  };
}
