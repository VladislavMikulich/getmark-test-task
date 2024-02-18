import { DEFAULT_LANGUAGE as defaultLanguage } from "../constants"

const state = reactive({
  translations: {},
})

export function useTranslation() {
  const lang = useCookie("language", {
    default: () => defaultLanguage,
    watch: false,
  })

  const loadTranslations = async () => {
    const translationsJson = await import(`../locales/${lang.value}.json`)
    state.translations = translationsJson.default
  }

  const translation = (key) =>
    state.translations[key] || "Translation is not found"

  return { translation, loadTranslations }
}
