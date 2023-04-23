import { poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={cn(poppins.variable, "font-body text-black-light")}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
};

export default MyApp;
