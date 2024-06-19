"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const SearchBox = ({ noSearch = false, search = "" }) => {
  const [searchTerm, setSearchTerm] = useState(search);
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`/product?search=${searchTerm}`);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    router.push(`/product`);
  };

  return (
    <>
      {!noSearch && (
        <div className="relative container rounded-md h-[45px] mt-[6px] mb-1 px-3">
          <Input
            type="text"
            placeholder="Search premium bestsellers"
            className="my-3 py-2 h-12 shadow-md pr-10"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 pr-4"
            >
              &#10005; {/* This is the HTML entity for a cross symbol */}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBox;
