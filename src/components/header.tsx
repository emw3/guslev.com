import cn from 'classnames'
import Link from 'next/link'
import NavLink from './nav-link'
import ToggleThemeButton from './toggle-theme-button'

const Header = () => {
  return (
    <header
      className={cn(
        'fixed inset-x-0 bottom-0 sm:bottom-auto sm:top-0 z-50 bg-slate-50 sm:bg-slate-50/50 dark:bg-zinc-900 dark:sm:bg-zinc-900/50'
      )}
    >
      <div
        className={cn(
          'w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 via-lime-500 to-emerald-500'
        )}
      ></div>
      <div
        className={cn(
          'py-3 sm:py-6 flex items-center justify-between mx-8 sm:mx-16'
        )}
      >
        <Link href="/">
          <a
            className={cn(
              'transition-all duration-300 ease-in-out delay-150 skew-y-6 hover:skew-y-0 bg-zinc-900 dark:bg-slate-50 w-6 h-6 sm:w-8 sm:h-8 flex'
            )}
          >
            <span
              className={cn(
                'm-auto text-xs sm:text-sm font-bold transition-all duration-300 ease-in-out delay-150 dark:text-zinc-900 text-slate-50'
              )}
            >
              GL
            </span>
          </a>
        </Link>
        <nav className={cn('flex items-center space-x-4 sm:space-x-8')}>
          <NavLink to="/" name="home" />
          <NavLink to="/projects" name="projects" />
          <ToggleThemeButton />
        </nav>
      </div>
      <div className={cn('w-full h-2 sm:hidden')}></div>
    </header>
  )
}

export default Header
