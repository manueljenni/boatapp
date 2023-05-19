"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import FormInput from "@/components/FormInput";
import { createBoat, getAccessToken } from "@/dataController";
import { ErrorMessage } from "@/types";
import { FormEvent, useState } from "react";

export default function page() {
  const [error, setError] = useState<ErrorMessage | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
      dailyPrice: { value: number };
    };
    const response = await createBoat(
      {
        name: target.name.value,
        description: target.description.value,
        dailyPrice: target.dailyPrice.value,
      },
      getAccessToken()
    );
    if (response.ok) {
      window.location.href = "/";
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="w-full h-full md:max-w-sm">
      <Form
        title="Add a boat"
        onSubmit={handleSubmit}
        button={<Button text="Submit" />}
        error={error}>
        <FormInput
          name="Name"
          value="name"
          inputProps={{ placeholder: "Enter a name." }}
        />
        <FormInput
          name="Description"
          value="description"
          inputProps={{ placeholder: "Enter the description." }}
        />
        <FormInput
          name="Daily price"
          value="dailyPrice"
          inputProps={{ type: "number", defaultValue: 1000, step: 0.01 }}
        />
      </Form>
    </div>
  );
}
