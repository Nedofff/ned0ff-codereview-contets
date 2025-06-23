import { Card } from "@/ui-kit";
import Image from "next/image";
import NoIconGithub from "./no-icon.png";
import Link from "next/link";
import { Project } from "@/data/pet-projects";

export const PetProjectCard = ({
  description,
  type = "opensource",
  authorLink,
  projectLink,
}: Project & {
  type?: "opensource" | "commercial";
}) => {
  return (
    <Card className="font-wix-display">
      <h3 className="text-lg font-bold leading-[22px] text-neutral-800 mb-[15px] md:text-xl md:leading-[24px]s">
        {"title"}
      </h3>
      <p className="text-neutral-800 font-medium leading-[20px] mb-7.5 md:mb-[33px]">
        {description}
      </p>
      <div className="flex flex-col gap-y-[15px] md:flex-row md:justify-between md:items-end">
        <div className="grid items-center grid-cols-[max-content_1fr] grid-rows-[1fr_auto] gap-x-2.5">
          <Image
            src={NoIconGithub}
            alt={"title"}
            width={42}
            height={42}
            className="w-[42px] h-[42px] object-cover row-span-2 rounded-lg"
          />
          <div className="font-semibold leading-[22px] text-lg text-neutral-800">
            {"author"}
          </div>
          <div className="flex items-center gap-x-1 text-primary-500 font-medium leading-[20px]  ">
            <Link href={authorLink}>telegram</Link>
            <span className="text-neutral-300 mx-1.5">•</span>
            <Link href={projectLink}>GitHub</Link>
          </div>
        </div>
        <div className="text-neutral-500 font-medium leading-[20px]">
          {
            {
              opensource: "Open source",
              commercial: "Коммерческий",
            }[type]
          }
        </div>
      </div>
    </Card>
  );
};
