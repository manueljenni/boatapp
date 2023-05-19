"use client";
import { FormProps } from "@/types";

export default function Form(props: FormProps) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">{props.title}</h1>
      {props.subtitle && (
        <h2 className="text-center text-gray-400 mt-4">{props.subtitle}</h2>
      )}
      <form onSubmit={props.onSubmit} className="form">
        <div className="flex-col space-y-4">
          <div className="my-8">
            <div className="space-y-8 form-children">{props.children}</div>
            {props.error && <p className="text-red-500 mt-4">{props.error.message}</p>}
          </div>
          {props.button}
        </div>
      </form>
    </>
  );
}
