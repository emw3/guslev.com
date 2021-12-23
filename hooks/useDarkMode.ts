import { useEffect, useState } from "react"
import { usePrefersDarkMode } from "./usePrefersDarMode"
import { useSafeLocalStorage } from "./useSafeLocalStorage"

export function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode()
  const [isEnabledOnLocalStorage, setIsEnabledOnLocalStorage] = useSafeLocalStorage("dark-mode", undefined)
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

  console.log('Prefers Dark Mode:', prefersDarkMode)
  console.log('Is Enabled:', isEnabledOnLocalStorage)

  console.log('Enabled:', isEnabled)

  useEffect(() => {
    setIsEnabled(isEnabledOnLocalStorage === undefined ? prefersDarkMode : isEnabledOnLocalStorage)
  }, [isEnabledOnLocalStorage, prefersDarkMode])

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(isEnabled ? "light" : "dark")
    root.classList.add(isEnabled ? "dark" : "light")
  }, [isEnabled])

  return [isEnabled, setIsEnabledOnLocalStorage]
}
