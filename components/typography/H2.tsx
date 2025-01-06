import cn from "classnames";
import { ReactNode } from "react";

export const H2 = ({
  children,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  return (
    <h2
      className={cn(
        "font-cormorant text-headingRegularSm xl:text-headingRegularXl",
        {
          "gradient-text": variant === "primary",
          "text-dark": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </h2>
  );
};
