import { cn } from "@/core/utils";
import { LikeIcon, DislikeIcon } from "@/ui-kit/icons";

const RatingButton = ({
  count,
  children,
  onClick,
  className,
}: {
  count: number;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "flex items-center gap-x-[2px] text-neutral-500 hover:text-neutral-800 transition-colors duration-75",
        className
      )}
      onClick={onClick}
    >
      {children}
      <span>{count}</span>
    </button>
  );
};

export const Rating = ({
  dislike,
  like,
}: {
  like: number;
  dislike: number;
}) => (
  <div className="flex items-center gap-x-2.5">
    <RatingButton count={like} className="active:text-quinary-400">
      <LikeIcon />
    </RatingButton>
    <RatingButton count={dislike} className="active:text-quaternary-600">
      <DislikeIcon />
    </RatingButton>
  </div>
);
