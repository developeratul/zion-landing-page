import QRCode from "@/assets/qr-code.jpg";
import { poppinsBold } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function DownloadAffix() {
  const [opacity, setOpacity] = React.useState(0);

  const handleScroll = () => {
    if (window.scrollY >= 285) setOpacity(1);
    else setOpacity(0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ opacity }}
      className={cn(
        "fixed bottom-0 right-0 z-50 flex w-full justify-center duration-200 md:bottom-[2%] md:right-[2%] md:w-auto",
        "md:rounded-2xl md:border md:border-[#74caff3b] md:bg-white md:p-4 md:shadow-[0_0_10px_rgba(116,202,255,.2)]"
      )}
    >
      <div className="hidden w-full items-center gap-3 md:flex ">
        <h2
          className={cn(
            "bg-gradient-to-b from-blue-light to-blue-dark bg-clip-text text-center text-2xl text-transparent",
            poppinsBold.className
          )}
        >
          Download
          <br />
          Zion App
        </h2>
        <Image src={QRCode} width={100} alt="QR Code for download" />
      </div>
      <button
        className={cn(
          "mx-[10%] mb-8 flex h-16 w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-light to-blue-dark py-6 text-center text-lg text-white md:hidden",
          poppinsBold.className
        )}
      >
        Download Zion
      </button>
    </div>
  );
}
