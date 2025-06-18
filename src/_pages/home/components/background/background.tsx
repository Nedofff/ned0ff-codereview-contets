import Image from "next/image";
import bgGradient from "./bg-gradient.png";

export function BackgroundGradient() {
  return (
    <div className="absolute top-0 left-0 w-full h-[674px] z-1">
      <Image
        src={bgGradient}
        alt="Background stars"
        fill
        className="object-cover h-full"
        priority
        draggable={false}
      />
    </div>
  );
}
