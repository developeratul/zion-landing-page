import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-body",
});

export const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
});
