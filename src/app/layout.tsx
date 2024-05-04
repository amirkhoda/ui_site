import { yekan } from "@/utils/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/Footer";

export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
