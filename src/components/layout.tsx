import cn from 'classnames'
import Meta from './meta'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div
        className={cn(
          'min-h-screen bg-slate-50 dark:bg-zinc-900 relative pb-20 sm:pt-32 text-zinc-800 dark:text-slate-200'
        )}
      >
        <Header />
        <main className={cn('z-10')}>{children}</main>
      </div>
    </>
  )
}

export default Layout
