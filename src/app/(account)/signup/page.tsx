"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import FormInput from "@/components/FormInput";
import { saveAccessToken, signup } from "@/DataController";
import { ErrorMessage } from "@/types";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function page() {
  const [error, setError] = useState<ErrorMessage | null>();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const response = await signup({
      email: target.email.value,
      password: target.password.value,
    });
    if (response.ok) {
      saveAccessToken(response.value.accessToken);
      window.location.href = "/";
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="w-full md:max-w-sm transition-in-1">
      <Form
        title="Sign up"
        subtitle="Welcome to the Boat app!"
        onSubmit={handleSignup}
        button={<Button text="Sign up" />}
        error={error}>
        <FormInput
          name="Email"
          value="email"
          inputProps={{
            placeholder: "Enter your email address",
            required: true,
          }}
        />
        <FormInput
          name="Password"
          value="password"
          inputProps={{
            type: "password",
            placeholder: "Enter your password",
            required: true,
          }}
        />
      </Form>
      <Link href={"/login"}>
        <p className="text-center text-primary font-medium w-full mt-4">Log in</p>
      </Link>
    </div>
  );
}
