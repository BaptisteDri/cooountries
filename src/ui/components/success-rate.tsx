import { twMerge } from "tailwind-merge";

type Props = {
  successRate: number;
  totalAnswers: number;
};
export const SuccessRate = ({ successRate, totalAnswers }: Props) => {
  return (
    <div
      className={twMerge(
        "text-white text-center mt-4 transition-all duration-500",
        totalAnswers === 0 ? "opacity-0" : "opacity-100"
      )}
    >
      {successRate}% de bonnes réponses{" "}
      {successRate >= 80 ? "🥳" : successRate >= 50 ? "🧐" : "🥶"}
    </div>
  );
};
