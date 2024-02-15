import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "flex justify-center",
    "w-20 h-20",
    "p-1 pt-4",
    "rounded-xl",
    "outline-none",
    "ease-in-out duration-100",
    "text-xs uppercase",
  ],
  {
    variants: {
      intent: {
        default: [
          "bg-[#c7c3c0]",
          "shadow-default",
          "active:shadow-default-hover",
          "disabled:shadow-default-hover",
        ],
        accent: [
          "bg-[#545251]",
          "text-white",
          "shadow-accent",
          "active:shadow-accent-hover",
          "disabled:shadow-accent-hover",
        ],
        success: [
          "bg-[#18AE78]",
          "text-white",
          "shadow-success",
          "active:shadow-success-hover",
          "disabled:shadow-success-hover",
        ],
        error: [
          "bg-[#d42a02]",
          "text-white",
          "shadow-error",
          "active:shadow-error-hover",
          "disabled:shadow-error-hover",
        ],
      },
    },
    defaultVariants: {
      intent: "default",
    },
    compoundVariants: [
      {
        intent: "accent",
        class: "h-[184px] w-[184px] items-center p-0",
      },
    ],
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ className, intent, ...rest }: Props) => (
  <div className="bg-black rounded p-1 w-fit">
    <button className={twMerge(button({ intent }))} {...rest} />
  </div>
);
