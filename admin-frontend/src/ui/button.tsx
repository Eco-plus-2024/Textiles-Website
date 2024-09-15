import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        banner:
          "d-medium-14 border-2 border-white bg-white/20 uppercase text-white backdrop-blur hover:bg-white/5 hover:text-white 2xl:h-11",
        outline:
          "border border-jaw-primary-stroke bg-white px-11 py-[0.88rem] text-[0.875rem] font-[500] uppercase text-jaw-primary-black hover:bg-jaw-primary-black hover:text-white",
        icon: "fill-jaw-primary-black hover:fill-jaw-primary-stroke focus:fill-jaw-primary-stroke",
        link: "text-jaw-primary-black underline hover:no-underline",
        inverse_link: "text-jaw-primary-black hover:underline",
        primary:
          "bg-jaw-primary-gold text-base font-medium uppercase text-white hover:bg-jaw-primary-gold/90 2xl:h-11",
        secondary:
          "hover:bg-primary/90 d-medium-14 bg-jaw-primary-black 2xl:h-11",
        tertiary:
          "bg-jaw-tertiary-gold text-sm font-normal uppercase text-jaw-primary-gold hover:bg-jaw-tertiary-gold/90",
        underline: "capitalize underline underline-offset-4",
        google:
          "d-regular-14 w-full gap-2 border border-jaw-primary-stroke bg-white uppercase hover:bg-jaw-primary-black/5",
        apple:
          "w-full gap-2 border border-jaw-primary-stroke bg-jaw-primary-black text-sm uppercase text-white hover:bg-jaw-primary-black/90",
        chat: "size-fit rounded-full bg-[#858484] bg-opacity-10 bg-clip-padding px-4 py-2 backdrop-blur-xl backdrop-filter",
        tab: "d-regular-14 relative mx-0 p-0 py-1 uppercase text-jaw-secondary-black after:absolute after:bottom-0 after:h-px after:w-0 after:bg-jaw-primary-black after:transition-all after:duration-300 hover:after:w-full md:mx-4",
        activeTab:
          "d-medium-14 relative mx-0 py-1 uppercase text-jaw-primary-black after:absolute after:bottom-0 after:h-px after:w-full after:bg-jaw-primary-black after:transition-all after:duration-300 md:mx-4",
        ar: "flex items-center justify-center gap-x-2 bg-white px-2.5 py-2",
        carousel:
          "bg-gray-800 bg-opacity-10 bg-clip-padding text-white backdrop-blur-lg backdrop-filter",
        ghost:
          "hover:text-accent-foreground border border-jaw-tertiary-grey text-[#313131] ring-jaw-primary-border hover:bg-jaw-primary-turq-dark",
        "ghost-active":
          "bg-black text-white ring-jaw-primary-border hover:text-white focus:text-white active:text-white",

        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        banner: "h-12 px-14 py-2",
        outline: "h-12 px-10",
        icon: "h-10 w-10",
        primary: "h-11 w-full",
        pagination: "h-10 px-4 py-4",

        // default: "h-10 px-4 py-2",
        // sm: "h-9 rounded-md px-3",
        // lg: "h-11 rounded-md px-8",
        // icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
