import { Product } from "./../types";
import React from "react";

export default function SearchBar(props: {
  filter: string;
  inStockOnly: boolean;
  onFilterTextChange: (filter: string) => void;
  onInStockChange: (inStockChange: boolean) => void;
}) {
  function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onFilterTextChange(e.target.value);
  }

  function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onInStockChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filter}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}
