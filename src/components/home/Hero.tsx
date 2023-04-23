import Vector1 from "@/assets/bg-vector-1.svg";
import Vector2 from "@/assets/bg-vector-2.svg";
import QRCode from "@/assets/qr-code.jpg";
import { Container } from "@/components/layout/Container";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import { type AppProps } from "@/types";
import Image, { type StaticImageData } from "next/image";
import React from "react";

function HeadingNode(props: AppProps & { className?: string }) {
  const { children, className } = props;
  return (
    <h2
      className={cn(
        "w-full text-start text-5xl font-extrabold even:text-center",
        "sm:text-center sm:text-8xl",
        "lg:text-start",
        className,
        poppinsBold.className
      )}
    >
      {children}
    </h2>
  );
}

function BackgroundObjects() {
  const [rotateZ, setRotateZ] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotateZ((pre) => {
        if (pre >= 350) return 0;
        else return pre + 1;
      });
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden">
      <div
        className="absolute bottom-auto left-[-430px] right-auto top-20 z-[-1]"
        style={{
          transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Image
          src={Vector1 as StaticImageData}
          alt="Vector-1"
          width={520}
          height={650}
        />
      </div>
      <div
        className="absolute bottom-auto left-auto right-[-530px] top-0 z-[-1]"
        style={{
          transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Image
          src={Vector2 as StaticImageData}
          alt="Vector-2"
          width={650}
          height={650}
        />
      </div>
    </div>
  );
}

function QRCodeCard() {
  return (
    <div className="hidden items-center gap-4 rounded-2xl border-2 border-gray-light bg-white py-1 pl-4 pr-2 lg:inline-flex">
      <p className="text-center text-sm">
        Download
        <br />
        Zion app
      </p>
      <Image width={70} src={QRCode} alt="QR Code" />
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative">
      <BackgroundObjects />
      <Container>
        <div className="grid min-h-[70vh] place-items-center">
          <div
            className={cn(
              "flex w-full max-w-[300px] flex-col place-items-center gap-2",
              "sm:max-w-[500px]",
              "lg:max-w-[700px]"
            )}
          >
            <HeadingNode>GET PAID</HeadingNode>
            <HeadingNode>FOR YOUR</HeadingNode>
            <div className="flex w-full items-center justify-start gap-4">
              <HeadingNode className="lg:w-auto">CONTENT</HeadingNode>
              <QRCodeCard />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
