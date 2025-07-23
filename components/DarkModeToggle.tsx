import { useAppDispatch, useAppSelector } from "@/hooks"
import { toggleDarkMode } from "@/features/preferences/preferencesSlice"

const DarkModeToggle = () => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(state => state.preferences.darkMode)

  const handleToggle = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

export default DarkModeToggle
