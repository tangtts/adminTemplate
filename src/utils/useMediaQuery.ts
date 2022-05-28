import { ref } from "vue";

function useMediaQuery(query: string) {
  let mediaQuery: MediaQueryList | undefined;
  const matches = ref(false);

  const update = () => {
    mediaQuery = window!.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  mediaQuery && mediaQuery.addEventListener("change", update);
  return {
    matches,
  };
}
export { useMediaQuery };
