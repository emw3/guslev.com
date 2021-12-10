import cn from 'classnames'
import Meta from './meta'
import Header from './header'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className={cn('min-h-screen bg-white dark:bg-zinc-900')}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}