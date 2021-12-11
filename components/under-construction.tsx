import cn from "classnames";

const UnderConstruction = () => {
  return (
    <div className={cn('m-auto transition-all duration-300 ease-in-out delay-150 skew-y-3 hover:skew-y-0 bg-gradient-to-r from-yellow-500 via-lime-500 to-emerald-500 py-4 px-8')}>
      <h1 className={cn('text-2xl sm:text-5xl font-extrabold transition-all duration-300 ease-in-out delay-150 text-zinc-900 dark:text-slate-50')}>Under construction</h1>
    </div>
  );
};

export default UnderConstruction;
