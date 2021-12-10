import cn from "classnames"
import NavLink from "./nav-link"

const Header = () => {
  return (
    <header className={cn("absolute inset-x-0 bottom-0 sm:inset-x-0 sm:top-0")}>
      <div
        className={cn(
          "w-full h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        )}
      ></div>
      <div className={cn("py-4 sm:py-8 flex justify-end mx-2 sm:mx-16")}>
        <nav className={cn("flex space-x-4 sm:space-x-8")}>
          <NavLink to="/" name="home" />
          <NavLink to="/projects" name="projects" />
          <div className="text-white">Change</div>
        </nav>
      </div>
    </header>
  )
}

export default Header
