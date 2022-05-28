import { useMediaQuery } from "./useMediaQuery";

export function formatIconPath(str: string) {
  return str.replace(/[A-Z]/g, "-$&").toLowerCase();
}

export { useMediaQuery };
