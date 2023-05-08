import "./globals.css";
import { Urbanist } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nike Shoe Store",
  description: "Ecommerce Nike Shoe Store built with Next.js and Strapi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
