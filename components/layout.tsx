import cn from 'classnames'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className={cn('min-h-screen')}>
        <main>{children}</main>
      </div>
    </>
  )
}