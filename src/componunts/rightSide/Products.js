import Data from "@/utils/Data1"
import Data2 from "@/utils/Data2"
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";

export default function Products() {
  return (
<div className="flex gap-[20px] flex-wrap justify-center ">
    <ProductCard1 Data={Data} />
   <ProductCard2 Data2={Data2}/>
   <ProductCard1 Data={Data} />
</div>
  
  )
}
