import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "flex justify-center",
    "w-24 h-24",
    "p-1 pt-4",
    "rounded-xl",
    "outline-none",
    "ease-in-out duration-100",
    "text-sm uppercase",
  ],
  {
    variants: {
      intent: {
        default: ["bg-[#c7c3c0] shadow-default active:shadow-default-hover"],
        accent: [
          "bg-[#545251] shadow-accent active:shadow-accent-hover text-white",
        ],
        success: [
          "bg-[#18AE78] shadow-success active:shadow-success-hover text-white",
        ],
        error: [
          "bg-[#d42a02] shadow-error active:shadow-error-hover text-white",
        ],
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ className, intent, ...rest }: Props) => (
  <div className="bg-black rounded p-1">
    <button className={twMerge(button({ intent }))} {...rest} />
  </div>
);
