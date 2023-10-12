import Categories from "@/components/Categories";
import Search from "@/components/Search";
import { SearchInput } from "@/components/ui/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import Companions from "./companion/components/Companions";
import { checkProtection } from "@/app/utils/helpers";

interface RootPageProps {
  searchParams: {
    category: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  checkProtection();

  const { category, name } = searchParams;

  const categories = await prismadb.category.findMany();
  const companions = await prismadb.companion.findMany({
    where: {
      category: {
        name: category,
      },
      name: {
        search: name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });
  return (
    <div>
      <Search />
      <Categories data={categories} />
      <Companions companions={companions} />
    </div>
  );
};

export default RootPage;
