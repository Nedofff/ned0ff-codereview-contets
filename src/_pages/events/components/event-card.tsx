import { getLocalDate } from "@/core/time";
import { cn } from "@/core/utils";
import { ITMeet } from "@/data/it-meets";
import { ArrowTopRightIcon, Card } from "@/ui-kit";
import { ButtonLink } from "@/ui-kit/";
export const EventCard = ({ place, start, description }: ITMeet) => {
  const isOnline = place.includes("online");
  return (
    <Card className="flex flex-col gap-y-2.5">
      <div className="flex justify-between mb-2.5 leading-[20px] font-wix-display font-semibold">
        <div className="text-neutral-600 ">
          {place} <span className="mx-1.5 text-neutral-300">•</span>{" "}
          {getLocalDate(start)}
        </div>
        <div
          className={cn({
            "text-[#338A33]": isOnline,
            "text-neutral-1000": !isOnline,
          })}
        >
          {isOnline ? "Онлайн" : "Оффлайн"}
        </div>
      </div>
      <h3 className="text-neutral-800 font-wix-display text-lg font-bold leading-[22px]">
        {"title"}
      </h3>
      <p className="text-neutral-800 font-wix-display font-medium leading-[20px]">
        {description}
      </p>
      <div className="flex mt-6">
        <ButtonLink
          href={"#"}
          variant="second"
          className="flex items-center gap-x-2"
        >
          <span>К мероприятию</span> <ArrowTopRightIcon />
        </ButtonLink>
      </div>
    </Card>
  );
};
