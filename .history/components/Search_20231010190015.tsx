"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";
import { usePathname } from "next/navigation";
import { SearchInput } from "./ui/search-input";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const debouncedQuery = {
        name: query,
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
  }, [pathname, router, query]);

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
