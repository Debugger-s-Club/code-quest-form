import prisma from "@/lib/prisma";
import { RegistrationSchemaType } from "@/schemas/registration.schema";

export const POST = async (req: Request) => {
  try {
    const {
      name,
      email,
      branch,
      year,
      division,
      phone,
    }: RegistrationSchemaType = await req.json();

    await prisma.registration.create({
      data: {
        name,
        email,
        branch,
        year,
        division,
        phone,
      },
    });

    return new Response("Succesfully Reigstered", { status: 200 });
  } catch (error: any) {
    console.log(error.stack);
    return new Response("Internal server error", { status: 500 });
  }
};
