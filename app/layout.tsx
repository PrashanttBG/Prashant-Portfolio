import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashant Baghel — Full-Stack Engineer & AI Builder",
  description:
    "Personal portfolio of Prashant Baghel — Software Engineer specializing in Java, Spring Boot, React, Next.js, TypeScript, Apache Kafka, and AI/ML systems.",
  keywords: [
    "Prashant Baghel",
    "Software Engineer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "AI/ML",
    "Portfolio",
  ],
  openGraph: {
    title: "Prashant Baghel — Full-Stack Engineer & AI Builder",
    description:
      "Developer by Passion, Engineer by Precision. Explore projects in healthcare AI, Kafka microservices, and modern web engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
