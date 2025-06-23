import { Recruiter } from "@/data/recruiters";
import { Card, Rating } from "@/ui-kit";
import Link from "next/link";
export const RecruitersCard = ({ company, contact, name }: Recruiter) => {
  return (
    <Card className="font-wix-display flex flex-col gap-y-[15px]">
      <div>
        <h3 className="text-neutral-800 font-bold text-[22px] leading-[26px] truncate">
          {"title"}
        </h3>
        <p className="text-neutral-600 font-medium text-[16px] leading-[18px]">
          {"jobTitle"}
        </p>
      </div>
      <div className="flex flex-wrap gap-1 mb-[5px] lg:mb-[26px]">
        {[company].map((item) => (
          <span
            key={item}
            className="bg-white px-1.5 py-0.5 rounded-md text-sm font-medium text-neutral-700 leading-[18px]"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-end justify-between mt-auto">
        <div>
          <div className="font-semibold text-lg text-neutral-800 leading-[22px]">
            {name}
          </div>
          <div className="block font-medium text-primary-500  leading-[18px]">
            {contact && (
              <>
                <Link href={contact ?? ""}>telegram</Link>
                <span className="px-1 text-primary-300">•</span>
              </>
            )}
            <Link href={`mailto:${contact}`}>почта</Link>
          </div>
        </div>
        <Rating like={10} dislike={0} />
      </div>
    </Card>
  );
};
