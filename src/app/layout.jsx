import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import icon from "/public/logoIcon.png";

export const metadata = {
  title: "Gasparini Contabilidade",
  description: "Há mais de 50 anos atuando na área contábil.",
  icons: icon,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-[#3b3b3a] from-[96%] via-[#454543] to-[#646455] relative">
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
