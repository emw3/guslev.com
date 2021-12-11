import cn from "classnames";
import Meta from "./meta";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div
        className={cn(
          "min-h-screen bg-slate-50 dark:bg-zinc-900 relative sm:pt-32 text-zinc-900 dark:text-slate-50"
        )}
      >
        <Header />
        <main className={cn("z-10")}>{children}</main>
      </div>
    </>
  );
}
