import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-center bg-white overflow-x-hidden">
      {children}
    </main>
    <Footer />
  </>
);

export default DefaultLayout;
