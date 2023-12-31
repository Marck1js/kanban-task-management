import ThemeProvider from "../context/theme-provider";
import { Plus_Jakarta_Sans as Plus } from "next/font/google";
import { Toaster } from "sonner";
const plus = Plus({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Marco Task Management",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={plus.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
