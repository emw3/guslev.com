import cn from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
  to: string;
  name: string;
}

const NavLink = ({ to, name }: Props) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <a
        className={cn(
          "uppercase text-xs sm:text-sm tracking-widest py-2 px-4 rounded font-bold antialiased",
          { "text-zinc-900/50 dark:text-white/50": router.pathname !== to },
          { "text-zinc-900 dark:text-white": router.pathname == to }
        )}
      >
        {name}
      </a>
    </Link>
  )
}

export default NavLink
