import { translations, type Translations } from "./translations";

export function useT(): Translations {
  return translations;
}
