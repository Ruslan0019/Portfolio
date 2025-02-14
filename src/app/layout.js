import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio",
  description:
    "Developer portfolio showcasing information about me, my professional skills, and completed projects. Includes examples of work in web development, frontend and backend development using modern technologies.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-darkBackground px-6 lg:px-8 xl:px-165">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
