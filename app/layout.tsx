import "./globals.css";
import { Poppins } from "next/font/google";
import { InputValueProvider } from "./context/inputValue";
import { TogglerProvider } from "./context/toggler";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Jardin Cafe",
  description: "Jardin Cafe Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TogglerProvider>
      <InputValueProvider>
        <html lang="en">
          <body className={poppins.className}>{children}</body>
        </html>
      </InputValueProvider>
    </TogglerProvider>
  );
}
