import cn from 'classnames'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className={cn('container mx-auto px-5')}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  )
}

export default Container
