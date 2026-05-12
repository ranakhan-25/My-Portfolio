import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/feature/Navbar";
import Providers from "./Providers";
import Footer from "@/components/feature/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import PremiumCursor from "@/components/shared/CustomCursor";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "My Portfolio ",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased `}
    >
      <body
        suppressHydrationWarning
        className=" bg-background text-foreground 
        "
      >
        <Providers>
          <PremiumCursor/>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
