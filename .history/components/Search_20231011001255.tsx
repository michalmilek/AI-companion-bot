"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";
import { usePathname } from "next/navigation";
import { SearchInput } from "./ui/search-input";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const debouncedQuery = {
        name: query,
        category,
      };

      const url = qs.stringifyUrl(
        {
          url: pathname,
          query: debouncedQuery,
        },
        { skipEmptyString: true, skipNull: true }
      );

      router.push(url);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname, router, query, category]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <SearchInput
      type="text"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default Search;
