
import { useLoaderData } from "react-router-dom";
import SignleItem from "./SignleItem";

export default function ProductDetails() {

   const product = useLoaderData()
  console.log(product);
  
    return (
        <div className="col-span-8">
            {
                product.map(item => <SignleItem key={item.id} data={item} />)
            }
       </div>   
    );
}
