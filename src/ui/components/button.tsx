import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "border border-b-4",
    "rounded-md",
    "outline-none",
    "duration-300",
    "hover:brightness-150 hover:border-t-4 hover:border-b",
    "active:opacity-75",
    "w-80 max-w-full",
    "h-20",
    "line-clamp-2",
    "px-4",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-[#FFFFFF30]", "text-white", "border-white-400"],
        success: ["bg-green-950", "text-green-400", "border-green-400"],
        error: ["bg-rose-950", "text-rose-400", "border-rose-400"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ className, intent, children, ...rest }: Props) => (
  <button className={twMerge(button({ intent }))} {...rest}>
    {children}
  </button>
);
