import Search from "@/components/Search";
import { SearchInput } from "@/components/ui/search-input";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default RootPage;
