import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const id = req.url.split("programs/")[1];
    console.log(id)
    const program = await db.programs.findUnique({
        where:{
            id: parseInt(id),
        }
    })

    if(!program){
        return NextResponse.json({message: "Not Found"}, {status: 404})
    }

    return NextResponse.json({message: "ok", program}, {status: 200})
    //get a program detail by programId
}

export const PUT = async (req: Request) => {
  try {
    const id = req.url.split('programs/')[1];
    console.log(id)
    const programExist = await db.programs.findUnique({
        where:{
            id: parseInt(id),
        }
    })

    if(!programExist){
        return NextResponse.json({message: "Not Found"}, {status: 404})
    }

    const {
      title,
      description,
      price,
      startDate,
      endDate,
    } = await req.json();
    

    const program = await db.programs.update({
      where: {
        id: parseInt(id), // Ensure the ID is parsed to an integer
      },
      data: {
        title,
        description,
        price,
        startDate,
        endDate,
      },
    });
    if (!program) {
        return NextResponse.json({ message: 'Program not found' }, { status: 404 });
      
    } else {
        return NextResponse.json({ message: 'Program updated successfully', program }, { status: 200 });
    }
  } catch (error) {
    console.log('[UPDATE PROGRAM]', error);
    return new NextResponse('Internal Error: ' + error, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  const id = req.url.split('programs/')[1];
  const programExist = await db.programs.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!programExist) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }

  try {
    await db.programs.delete({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json({ message: 'Program deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('[DELETE PROGRAM]', error);
    return new NextResponse('Internal Error: ' + error, { status: 500 });
  }
};


export const PATCH = async (req: Request) => {
  const id = req.url.split('programs/')[1];
  const programExist = await db.programs.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!programExist) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }

  try {
    const updatedFields: { [key: string]: any } = await req.json();

    const updatedData: { [key: string]: any } = {};

    if (updatedFields.title !== undefined) {
      updatedData.title = updatedFields.title;
    }

    if (updatedFields.description !== undefined) {
      updatedData.description = updatedFields.description;
    }

    if (updatedFields.price !== undefined) {
      updatedData.price = updatedFields.price;
    }

    if (updatedFields.startDate !== undefined) {
      updatedData.startDate = updatedFields.startDate;
    }

    if (updatedFields.endDate !== undefined) {
      updatedData.endDate = updatedFields.endDate;
    }

    const program = await db.programs.update({
      where: {
        id: parseInt(id),
      },
      data: updatedData,
    });

    return NextResponse.json({ message: 'Program updated successfully', program }, { status: 200 });
  } catch (error) {
    console.error('[PATCH PROGRAM]', error);
    return new NextResponse('Internal Error: ' + error, { status: 500 });
  }
};