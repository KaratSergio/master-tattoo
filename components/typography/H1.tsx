import cn from "classnames";
import { ReactNode } from "react";

export const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "gradient-text font-cormorant text-headingBigSm xl:text-headingBigXl",
        className
      )}
    >
      {children}
    </h1>
  );
};
