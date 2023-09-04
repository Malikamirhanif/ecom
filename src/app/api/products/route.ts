import { oneProductType } from "@/components/utils/SanityProductsTypes";
import { client } from "../../../../sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        //  let url=request.nextUrl.searchParams;

        
        // return NextResponse.json({"message":"hi"})

       let response=await client.fetch('*[_type=="products"]');
    //    let allData=[...response]
    //    if(url.has("st")&& url.has("ed"))
    //    {
    //     if (allData[Number(url.get("st"))]){
    //         let productArray:Array<oneProductType>=allData.slice(Number(url.get("st")),Number(url.get("ed")))
    //         return NextResponse.json(productArray)
    //     }
    //     else
    //     {
    //      return NextResponse.json({productArray:"Not Found"})
    //     }
    //    }

    //    console.log({allData})
     return NextResponse.json(response);

    } catch (error) {
        console.log("Error",error)
    }   

}