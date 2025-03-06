import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-darkGray px-6 lg:px-8 xl:px-165">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
