declare module 'compare-versions' {
  export default function(v1: string, v2: string): number;
  export function sort(versions: string[]): string[];
}
