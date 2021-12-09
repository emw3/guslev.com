import cn from "classnames"

type Props = {
  children?: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className={cn('container mx-auto px-5')}>{children}</div>
}