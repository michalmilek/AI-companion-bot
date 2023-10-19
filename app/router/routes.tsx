import { HomeIcon, PlusIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export interface Route {
  href: string;
  label: string;
  icon: JSX.Element;
}

export const routes: Route[] = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "/companion/new",
    label: "New",
    icon: <PlusIcon />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Cog6ToothIcon />,
  },
];
