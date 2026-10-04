import { Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/feature/Navbar";
import Providers from "./Providers";
import Footer from "@/components/feature/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CursorProvider from "./CursorProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
  icons: {
    icon:"/Image.jpeg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inconsolata.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="bg-background text-foreground font-[family-name:var(--font-poppins)]"
      >
        <Providers>
          {/* <CursorProvider /> */}
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
