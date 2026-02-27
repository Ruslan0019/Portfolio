import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  description:
    "Explore my portfolio showcasing my work as a Full Stack Developer. Learn more about my skills, experience, and projects.",
  keywords: ["portfolio", "full stack", "developer", "projects", "skills"],
  metadataBase: new URL("https://ruslan-afanasiev.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "My Portfolio - Full Stack Developer",
    description:
      "Welcome to my personal portfolio website. Discover my projects, skills, and experience as a Full Stack Developer.",
    url: "https://ruslan-afanasiev.vercel.app/",
    siteName: "Portfolio",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-darkGray ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
