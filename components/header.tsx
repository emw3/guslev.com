import cn from "classnames";
import Link from "next/link";
import NavLink from "./nav-link";
import ToggleThemeButton from "./toggle-theme-button";

const Header = () => {
  return (
    <header className={cn("absolute inset-x-0 bottom-0 sm:inset-x-0 sm:top-0")}>
      <div
        className={cn(
          "w-full h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 via-lime-500 to-emerald-500"
        )}
      ></div>
      <div
        className={cn(
          "py-4 sm:py-8 flex items-center justify-between mx-8 sm:mx-16"
        )}
      >
        <Link href="/">
          <a
            className={cn(
              "rounded-full bg-gradient-to-r from-yellow-500 via-lime-500 to-emerald-500 w-6 h-6 sm:w-8 sm:h-8 flex"
            )}
          >
            <span
              className={cn(
                "m-auto text-xs sm:text-sm font-bold dark:text-black text-white"
              )}
            >
              GL
            </span>
          </a>
        </Link>
        <nav className={cn("flex items-center space-x-4 sm:space-x-8")}>
          <NavLink to="/" name="home" />
          <NavLink to="/projects" name="projects" />
          <ToggleThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
