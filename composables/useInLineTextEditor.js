const state = {
  elementToEdit: null,
  parentElement: null,
  editorArea: null,
}

export function useInLineTextEditor() {
  onBeforeMount(() => {
    window.addEventListener("dblclick", openTextEditor)

    window.addEventListener("keydown", keydownEventHandler)
  })

  const openTextEditor = (event) => {
    const target = event.target
    const translationKeys = target.getAttribute("data-translation-path")

    if (!state.elementToEdit && translationKeys) {
      const parent = target.parentNode

      state.elementToEdit = event.target
      state.parentElement = target.parentNode

      const editorArea = document.createElement("textarea")

      editorArea.style.width = `${target.offsetWidth}px`
      editorArea.style.height = `${target.offsetHeight}px`

      target.style.display = "none"
      editorArea.value = event.target.textContent

      state.editorArea = editorArea

      parent.replaceChild(editorArea, target)
    }
  }

  const closeTextEditor = () => {
    state.parentElement.replaceChild(state.elementToEdit, state.editorArea)

    state.elementToEdit.style.display = "block"

    state.elementToEdit = null
    state.parentElement = null
    state.editorArea = null
  }

  const keydownEventHandler = (event) => {
    if (event.key === "Escape" && state.elementToEdit) {
      closeTextEditor()
    }

    if (event.key === "Enter") {
      const lang = useCookie("language")
      console.log("dfdsf", lang.value)
      const translations = useState("translations")

      const customTranslations = JSON.parse(
        localStorage.getItem("customTranslations")
      )

      const updatedTranslation = state.editorArea.value

      const translationKeys = state.elementToEdit
        .getAttribute("data-translation-path")
        .split(".")

      let valueToTranslate = translations.value

      translationKeys.forEach((key, index) => {
        if (index === translationKeys.length - 1) {
          valueToTranslate[key] = updatedTranslation
        }

        valueToTranslate = valueToTranslate[key] || {}
      })

      localStorage.setItem(
        "customTranslations",
        JSON.stringify({
          ...customTranslations,
          [lang.value]: translations.value,
        })
      )

      closeTextEditor()
      location.reload()
    }
  }
}
