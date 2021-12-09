import cn from "classnames";
import Link from "next/link";

export default function Header() {
  return (
    <header className={cn("flex")}>
      <div className={cn()}></div>
      <nav className={cn('dark:text-white')}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </nav>
    </header>
  );
}
