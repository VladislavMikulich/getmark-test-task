import { DEFAULT_LANGUAGE as defaultLanguage } from "../constants"

export function useTranslation() {
  const lang = useCookie("language", {
    default: () => defaultLanguage,
    watch: false,
  })

  const translations = useState("translations", () => {})

  const loadTranslations = async () => {
    const translationsJson = await import(`../locales/${lang.value}.json`)
    translations.value = translationsJson.default
  }

  const translation = (key) =>
    translations.value[key] || "Translation is not found"

  return { translation, loadTranslations }
}
