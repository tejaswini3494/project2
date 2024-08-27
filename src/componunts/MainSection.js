import Filter from "./leftSide/Filter";
import Products from "./rightSide/Products";

export default function MainSection() {
  return (
    <div className="flex justify-between md:flex-row pt-[30px] gap-[30px] flex-col md:items-start items-center">
      <Filter />
      <Products />
    </div>
  );
}
