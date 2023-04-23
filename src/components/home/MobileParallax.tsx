import HeroWireFrameInitialImage from "@/assets/hero-wireframe-initial-image.jpg";
import HeroWireFrameSecondImage from "@/assets/hero-wireframe-second-image.jpg";
import MobileWireFrame from "@/assets/mobile-wireframe-thin.png";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
import { useParallax } from "react-scroll-parallax";

function BackgroundText() {
  const [gap, setGap] = React.useState(100);

  const handleScroll = () => {
    const newGap = window.scrollY * 0.2;
    if (newGap <= 350) {
      setGap(newGap);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-[75px] -z-10 hidden md:block">
      <div
        className="absolute top-[128px] flex w-full items-center justify-center overflow-hidden"
        style={{ gap }}
      >
        <h2
          className={cn(
            "w-[50vw] text-right text-[210px]",
            "bg-gradient-to-t from-blue-dark to-blue-light bg-clip-text text-transparent",
            poppinsBold.className
          )}
        >
          Meet
        </h2>
        <h2
          className={cn(
            "w-[50vw] text-left text-[210px]",
            "bg-gradient-to-t from-blue-dark to-blue-light bg-clip-text text-transparent",
            poppinsBold.className
          )}
        >
          Zion
        </h2>
      </div>
    </div>
  );
}

function MobileView() {
  const { ref } = useParallax({
    translateY: ["0", "-100%"],
    shouldAlwaysCompleteAnimation: true,
  });
  return (
    <Fade>
      <div className="sticky top-[110px] mx-auto w-full max-w-sm">
        <Image
          src={MobileWireFrame}
          className="w-full"
          alt="Mobile wire frame"
        />
        <div className="absolute bottom-[35px] left-[36px] right-[36px] top-[35px] -z-[1] overflow-hidden">
          <Image
            src={HeroWireFrameInitialImage}
            ref={ref as React.RefObject<HTMLImageElement>}
            alt="App image 1"
            className="absolute -z-10 h-full w-full transform overflow-hidden rounded-[40px] object-cover"
          />
          <Image
            src={HeroWireFrameSecondImage}
            alt="App image 2"
            className="absolute -z-20 h-full w-full overflow-hidden rounded-[40px] object-cover"
          />
        </div>
      </div>
    </Fade>
  );
}

export default function MobileParallax() {
  return (
    <div className="relative h-[200vh]">
      <BackgroundText />
      <MobileView />
    </div>
  );
}
