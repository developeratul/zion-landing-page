import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-blue-dark text-white hover:bg-blue-dark/90",
        destructive: "bg-red-600 text-white hover:bg-red-500/90",
        outline: "border border-blue-dark hover:bg-blue-dark hover:text-white",
        secondary: "bg-yellow-light text-black hover:bg-yellow-light/80",
        ghost: "hover:bg-gray-medium/90 hover:text-black bg-gray-medium",
        link: "underline-offset-4 hover:underline text-blue-dark",
      },
      size: {
        default: "w-12 h-12 rounded-md",
        sm: "h-10 w-10 rounded-md",
        lg: "h-14 w-14 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
