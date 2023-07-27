import db from "@/db.json";

import { NextResponse } from "next/server"

export const GET =(request, {params})=>{

    const product = db.products.find(product=> product.id == params.id);
    if(product){
        return NextResponse.json(product);
    }

    return NextResponse.json(
        {
            message: "Product not found",
        },
        {
            status: 404,
        }
    )
   
}


