import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { MockData } from "./MockData";

export default function FilterableProductTable() {
  const [filterText, setFilter] = useState("");
  const [inStockOnly, setStockOnly] = useState(false);

  function handleFilterTextChange(filterText: string) {
    setFilter(filterText);
  }

  function handleInStockChange(inStockOnly: boolean) {
    setStockOnly(inStockOnly);
  }

  return (
    <div>
      <SearchBar
        filter={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={MockData}
        filter={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
