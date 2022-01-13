import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useDarkMode } from '@/hooks/useDarkMode'

const ToggleThemeButton = () => {
  const [isDark, setIsDark] = useDarkMode()

  const toggleColorMode = () => {
    setIsDark(!isDark)
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className={cn('py-2 flex')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={toggleColorMode}
          className={cn(
            'm-auto text-xs rounded text-zinc-800 dark:text-slate-200'
          )}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 fill-transparent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 fill-transparent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ToggleThemeButton
