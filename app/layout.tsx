import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "XToDo - Dashboard",
  description: "Dashboard de projetos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}