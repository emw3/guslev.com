import cn from "classnames"
import NavLink from "./nav-link"
import ToggleThemeButton from './toggle-theme-button'

const Header = () => {
  return (
    <header className={cn("absolute inset-x-0 bottom-0 sm:inset-x-0 sm:top-0")}>
      <div
        className={cn(
          "w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 via-lime-500 to-emerald-500"
        )}
      ></div>
      <div className={cn("py-4 sm:py-8 flex justify-evenly sm:justify-end mx-2 sm:mx-16")}>
        <nav className={cn("flex items-center space-x-4 sm:space-x-8")}>
          <NavLink to="/" name="home" />
          <NavLink to="/projects" name="projects" />
          <ToggleThemeButton />
        </nav>
      </div>
    </header>
  )
}

export default Header
