import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { Product } from "./../types";
import React from "react";

export default function ProductTable(props: {
  products: Product[];
  filter: string;
  inStockOnly: boolean;
}) {
  const productRows: {}[] = [];
  let category = "";
  props.products.forEach((product) => {
    const nameLowerCase = product.name.toLowerCase();
    const filterToLowerCase = props.filter.toLowerCase();

    if (props.inStockOnly && !product.stocked) {
      return;
    }

    if (nameLowerCase.indexOf(filterToLowerCase) === -1) {
      return;
    }
    if (category !== product.category) {
      productRows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
      category = product.category;
    }

    productRows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productRows}</tbody>
    </table>
  );
}
