"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistrationSchemaType,
  registrationSchema,
} from "@/schemas/registration.schema";
import { FormEvent } from "react";
import Error from "@/components/Error";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const submit = async (data: RegistrationSchemaType) => {
    console.log(data);
  };

  return (
    <div className="sm:m-8 m-4 flex flex-col items-center">
      {/* HEADER */}
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold text-neutral-800">
          DEBUGGER'S CLUB
        </h1>
        <h3 className="font-bold text-2xl text-neutral-700">Code-quest</h3>

        <p className="text-neutral-500 mx-6 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          temporibus nostrum quas dicta accusantium fugit provident eligendi
          similique eius libero cumque recusandae repellat natus! Architecto, a
          nulla? Quaerat, eveniet minima.
        </p>
      </div>

      <Card className="sm:my-12 my-6 sm:w-1/2 w-full">
        <CardHeader>
          <CardTitle>Registration form</CardTitle>
          <CardDescription>Please fill in the form</CardDescription>
        </CardHeader>
        <Separator />
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col gap-2 m-4">
            <Input placeholder="Full Name" {...register("name")} />
            {errors.name ? <Error>{errors.name.message}</Error> : null}
            <Input placeholder="E-mail" {...register("email")} />
            {errors.email ? <Error>{errors.email.message}</Error> : null}

            <div className="text-neutral-600">
              <Label className="font-bold">Branch:</Label>

              <RadioGroup
                className="my-2"
                {...register("branch")}
                defaultValue="Computer">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Computer" id="r1" />
                  <Label htmlFor="r1">Computer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="AIDS" id="r2" />
                  <Label htmlFor="r2">AIDS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="IT" id="r3" />
                  <Label htmlFor="r3">IT</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="CSD" id="r4" />
                  <Label htmlFor="r4">CSD</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mechanical" id="r5" />
                  <Label htmlFor="r5">Mechanical</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Robotics & Automation" id="r6" />
                  <Label htmlFor="r6">Robotics & Automation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Chemical" id="r7" />
                  <Label htmlFor="r7">Chemical</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Electrical" id="r8" />
                  <Label htmlFor="r8">Electrical</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Civil" id="r9" />
                  <Label htmlFor="r9">Civil</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="E&TC" id="r10" />
                  <Label htmlFor="r10">E&TC</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="text-neutral-600">
              <Label className="font-bold">Division:</Label>

              <RadioGroup
                defaultValue="A"
                className="my-2"
                {...register("division")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="A" id="r1" />
                  <Label htmlFor="r1">A</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="B" id="r2" />
                  <Label htmlFor="r2">B</Label>
                </div>
              </RadioGroup>
            </div>

            <Input placeholder="Phone number" {...register("phone")} />
            {errors.phone ? <Error>{errors.phone.message}</Error> : null}
          </div>

          <div className="p-4 gap-2 flex">
            <Button type="submit">Register</Button>
            <Button variant="secondary">Clear form</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
