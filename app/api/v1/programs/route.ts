import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response) => {
    try {
        const programs = await db.programs.findMany()
        return NextResponse.json({programs}, {status: 200})
        
    } catch (error) {
        console.log("[PROGRAMS]", error);
        return new NextResponse("Internal Error" + error);        
    }
}

export async function POST(
    req: Request,
) {
    try{        
        const {
            title,
            description,
            price,
            startDate,
            endDate,
         } = await req.json();

        const program = await db.programs.create({
            data:{
                title,
                description,
                price,
                startDate,
                endDate,
            }
        });
        return NextResponse.json({message: "ok", program}, {status: 201})
       

    }catch(error){
        console.log("[PROGRAMS]", error);
        return new NextResponse("Internal Error" + error);
    }
}


