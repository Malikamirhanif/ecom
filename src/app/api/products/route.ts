import { oneProductType } from "@/components/utils/SanityProductsTypes";
import { client } from "../../../../sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    let response=await client.fetch('*[_type=="products"]');
           let url=await request.nextUrl.searchParams;
            
       let allData=[...response]
       if(url.has("st")&&url.has("ed"))
       {
        if (allData[Number(url.get("st"))]){
            let productArray:Array<oneProductType>=allData.slice(Number(url.get("st")),Number(url.get("ed")))
            return NextResponse.json(productArray)
        }
        else
        {
         return NextResponse.json({productArray:"Not Found"})
        }
    // try {
  
    //     //  console.log({url});
        
    //     // return NextResponse.json({"message":"hi"})

   
    //    }

    //    console.log({allData})
     return NextResponse.json(response);

    // } catch (error) {
    //     console.log("Error",error)
    // }   

}