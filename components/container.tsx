import cn from "classnames";

type Props = {
  children?: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className={cn("container mx-auto px-5")}>
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
