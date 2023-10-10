import Search from "@/components/Search";
import { SearchInput } from "@/components/ui/search-input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const RootPage = async () => {
  const categories = await prismadb.category.findMany();
  return (
    <div>
      <Search />
    </div>
  );
};

export default RootPage;
