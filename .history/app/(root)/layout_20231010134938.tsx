import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="md:pl-20 mt-16 border-yellow-500 border-2">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
