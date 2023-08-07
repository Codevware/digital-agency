import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="">
        <Image src="/hero-first.jpg" alt="" width={482} height={580} />
      </div>

      <div className="">
        <Image src="/hero-second.jpg" alt="" width={170} height={280} />
      </div>
    </div>
  );
}
