import UnderlineLink from "@modules/common/components/underline-link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      {/* Apply a semi-transparent overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32 bg-black bg-opacity-50 text-white">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md">
          Welcome to Ayancheri Agri Farm
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md">
          At Ayancheri Agri Farm & Fertilizer, we are dedicated to cultivating success in the field of agriculture. With a passion for sustainable farming practices and a commitment to providing top-quality products, we are your trusted partner in the world of agriculture.
        </p>
        <UnderlineLink href="/store">Buy now</UnderlineLink>
      </div>
      <Image
        src="/hero.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
