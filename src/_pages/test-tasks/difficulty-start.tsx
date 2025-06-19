import { AsteriskIcon } from "@/ui-kit/icons";

export const DifficultyStars = ({
  difficulty,
}: {
  difficulty: "easy" | "medium" | "hard";
}) => {
  const filledStars = {
    easy: 1,
    medium: 2,
    hard: 3,
  }[difficulty];
  const color = {
    easy: "text-quinary-400",
    medium: "text-tertiary-200",
    hard: "text-quaternary-500",
  }[difficulty];
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <AsteriskIcon
          key={star}
          className={star <= filledStars ? color : "text-neutral-300"}
        />
      ))}
    </div>
  );
};
