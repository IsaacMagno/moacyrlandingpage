import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Gasparini Contabilidade",
  description: "Há mais de 50 anos atuando na área contábil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-[#3b3b3a] from-[96%] via-[#454543] to-[#646455] ">
        <TopBar />
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
