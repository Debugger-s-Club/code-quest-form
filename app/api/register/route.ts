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

    const notUniqueRegistration = await prisma.registration.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (notUniqueRegistration) {
      return new Response(
        "Registration with the same email or phone number already exists",
        { status: 400 }
      );
    }

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
