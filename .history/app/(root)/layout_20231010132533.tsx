import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default RootLayout;
