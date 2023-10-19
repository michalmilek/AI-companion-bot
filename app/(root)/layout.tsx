import MobileSidebar from "@/components/MobileSidebar";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Sidebar from "@/components/Sidebar";
import SubscribeDialog from "@/components/subscribe-dialog";
import ClientLayout from "./components/ClientLayout";
import { checkSubscription } from "@/lib/subscription";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isPro = await checkSubscription();

  return (
    <div className={`min-h-screen `}>
      <SubscribeDialog />
      <Navbar isPro={isPro} />
      <MobileSidebar />
      <Sidebar />
      <main className="px-10 md:pr-60 pt-20 pb-2 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
