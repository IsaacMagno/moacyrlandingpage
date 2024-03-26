import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import { metadataInicial } from "./helpers/metadata.js";

export const metadata = metadataInicial;
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-[#3b3b3a] from-[96%] via-[#454543] to-[#646455] relative montserrat.className">
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
