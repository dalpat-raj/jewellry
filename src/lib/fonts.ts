import { Nunito, Nunito_Sans, Edu_AU_VIC_WA_NT_Arrows, Italianno, Poppins } from "next/font/google";

export const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
    weight: ["600", "700", "800", "900"]
  });
  
export const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500"]
  });

export const italianno = Italianno({
    variable: "--font-italianno-sans",
    subsets: ["latin"],
    weight: ["400"]
  });

export const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: [ "200", "400", "500", "600"]
})