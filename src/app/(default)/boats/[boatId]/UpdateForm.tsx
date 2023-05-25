"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import FormInput from "@/components/FormInput";
import { getAccessToken, updateBoat } from "@/DataController";
import { Boat, CreateBoatRequest, ErrorMessage } from "@/types";
import { FormEvent, useState } from "react";

export default function UpdateForm(props: { boat: Boat }) {
  const boat = props.boat;
  const [error, setError] = useState<ErrorMessage | null>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
      dailyPrice: { value: number };
    };
    const createBoatRequest: CreateBoatRequest = {
      name: target.name.value,
      description: target.description.value,
      dailyPrice: target.dailyPrice.value,
    };
    // Some basic validation... don't allow blank values
    for (const key in createBoatRequest) {
      if (Object.prototype.hasOwnProperty.call(createBoatRequest, key)) {
        const value = createBoatRequest[key as keyof CreateBoatRequest];
        if (value.toString().trim() == "") {
          setError({
            message: `Field "${key}" cannot be blank!`,
            statusCode: 400,
          });
          return;
        }
      }
    }
    const response = await updateBoat(createBoatRequest, boat.id, getAccessToken());
    if (response.ok) {
      window.location.href = "/boats/" + boat.id;
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="w-full h-full centerDiv">
      <div className="md:max-w-sm w-full transition-in-1">
        <Form
          title="Edit"
          onSubmit={handleSubmit}
          button={<Button text="Update" />}
          error={error}>
          <FormInput
            name="Name"
            value="name"
            inputProps={{ placeholder: "Enter a name.", defaultValue: props.boat.name }}
          />
          <FormInput
            name="Description"
            value="description"
            inputProps={{
              placeholder: "Enter the description.",
              defaultValue: props.boat.description,
            }}
          />
          <FormInput
            name="Daily price"
            value="dailyPrice"
            inputProps={{
              type: "number",
              defaultValue: props.boat.dailyPrice,
              step: 0.01,
            }}
          />
        </Form>
      </div>
    </div>
  );
}
