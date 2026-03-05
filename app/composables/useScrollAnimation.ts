export function useScrollAnimation() {
  const elementRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  onMounted(() => {
    if (!elementRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(elementRef.value);

    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return {
    elementRef,
    isVisible,
  };
}
