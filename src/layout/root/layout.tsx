import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import TopNav from "@/components/top-nav/TopNavBar";
import { LoginDialog } from "@/components/login";
// import Footer from "./footer";
import Footer from "@/components/generic-components/Footer";

type RootLayoutProps = { children: any };
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased rounded-md"
        )}
      >
        <main className=" mt-[2px] pb-4">
          <TopNav />
          {children}
        </main>

        <Footer />
        <LoginDialog />
      </body>

      <Toaster theme="dark" position="top-center" />
    </html>
  );
}
