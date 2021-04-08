export default function ProductCategoryRow(props: { category: string }) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  );
}
