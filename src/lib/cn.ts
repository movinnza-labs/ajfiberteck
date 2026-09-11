/** Tiny classname joiner — avoids pulling in a dependency for this. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}
