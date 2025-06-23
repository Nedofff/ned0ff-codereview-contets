import Image from "next/image";

interface ChannelTag {
  name: string;
  x: number;
  y: number;
  opacity: number;
}

const channelTags: ChannelTag[] = [
  { name: "@young_june", x: 36, y: 99, opacity: 0.95 },
  { name: "@it_interns", x: 206, y: 28, opacity: 0.95 },
  { name: "@juno_jobs", x: 111, y: 204, opacity: 0.95 },
  { name: "@young_intern", x: 234, y: 220, opacity: 0.85 },
  { name: "@bigtechjobs", x: 63, y: 323, opacity: 0.95 },
  { name: "@YourCodeReview", x: 215, y: 425, opacity: 0.95 },
  { name: "@junior_designers", x: 41, y: 417, opacity: 0.95 },
];

interface Avatar {
  src: string;
  x: number;
  y: number;
  size: number;
}

const avatars: Avatar[] = [
  { src: "/auth-modal/avatar-7.png", x: 30, y: 26, size: 100 },
  { src: "/auth-modal/avatar-1.png", x: 37, y: 269, size: 100 },
  { src: "/auth-modal/avatar-2.png", x: 233, y: 372, size: 100 },
  { src: "/auth-modal/avatar-3.png", x: 238, y: 28, size: 100 },
  { src: "/auth-modal/avatar-4.png", x: 129, y: 137, size: 100 },
  { src: "/auth-modal/avatar-5.png", x: 60, y: 388, size: 100 },
  { src: "/auth-modal/avatar-6.png", x: 242, y: 228, size: 100 },
];

export const Channels = () => {
  return (
    <div className="w-[380px] h-[532px] bg-[#F5F5F5] relative overflow-hidden hidden md:block">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url(/auth-modal/grid-background.svg)",
          backgroundPosition: "-294px -53px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1146px 662px",
        }}
      />

      {/* Avatars */}
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="absolute rounded-full overflow-hidden shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)]"
          style={{
            left: avatar.x,
            top: avatar.y,
            width: avatar.size,
            height: avatar.size,
          }}
        >
          <Image
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
            width={avatar.size}
            height={avatar.size}
            className="object-cover"
            draggable={false}
          />
        </div>
      ))}

      {/* Channel tags */}
      {channelTags.map((tag, index) => (
        <div
          key={index}
          className="absolute bg-[#0560C9] text-white text-[16px] font-medium leading-[20px] tracking-[-0.0625em] px-[5px] py-[2px] rounded-[6px] whitespace-nowrap"
          style={{
            left: tag.x,
            top: tag.y,
            opacity: tag.opacity,
          }}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
};
