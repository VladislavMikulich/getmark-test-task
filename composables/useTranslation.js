const state = reactive({
  translations: {},
})

export function useTranslation() {
  const lang = useCookie("language")

  const loadTranslations = async () => {
    const translationsJson = await import(`../locales/${lang.value}.json`)
    state.translations = translationsJson.default
  }

  const translation = (key) =>
    state.translations[key] || "Translation is not found"

  return { translation, loadTranslations }
}
