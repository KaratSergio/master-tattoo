import cn from "classnames";
import { ReactNode } from "react";

export const H3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-h3Sm xl:text-h3Xl", className)}>{children}</h3>
  );
};
