import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Weka Machineries and Tools | Industrial Equipment Supplier",
  description: "Premium supplier of shot blast machines, surface preparation equipment, and industrial machinery solutions worldwide.",
  keywords: ["shot blast machine", "industrial equipment", "surface preparation", "machinery supplier"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
