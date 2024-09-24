export const useWindowSize = () => {
  const size = ref([0, 0]);
  function updateSize() {
    size.value = [window.innerWidth, window.innerHeight];
  }
  onMounted(() => {
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });
  return [size.value[0], size.value[1]];
};
