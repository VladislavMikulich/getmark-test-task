import { DEFAULT_LANGUAGE as defaultLanguage } from "../constants"

import en from "../locales/en.json"
import ru from "../locales/ru.json"
import zh from "../locales/zh.json"

export function useTranslation() {
  const lang = useCookie("language", {
    default: () => defaultLanguage,
    watch: false,
  })

  const translations = useState("translations", () => {})

  let customTranslations = null

  onBeforeMount(() => {
    customTranslations = JSON.parse(localStorage.getItem("customTranslations"))

    if (customTranslations?.[lang.value]) {
      translations.value = customTranslations[lang.value]
    }
  })

  switch (lang.value) {
    case "ru":
      translations.value = customTranslations
        ? customTranslations?.value?.ru
        : ru
      break
    case "zh":
      translations.value = customTranslations
        ? customTranslations?.value?.zh
        : zh
      break
    default:
      translations.value = customTranslations
        ? customTranslations?.value?.en
        : en
      break
  }

  const translation = (key) => translations.value[key] || en[key]

  return { translation, translations }
}
