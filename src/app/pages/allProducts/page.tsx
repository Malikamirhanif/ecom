import { fetchProducts } from "@/app/page";
import { oneProductType } from "@/components/utils/SanityProductsTypes";
import AllCards from "@/views/AllCards";

export default async function GiveAddress() {
  let proData:Array<oneProductType>=await fetchProducts();
  // console.log(proData[0])
    return (
      <div className="flex flex-wrap justify-between">
         { 
        
          proData.length && proData?.map((item:oneProductType,index:number)=>(         
             <AllCards key={index} proDataSingle={item} />
            
          ))
          
         }
      </div>
    )
  }