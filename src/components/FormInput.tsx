import { FormInputProps } from "@/types";

export default function FormInput(props: FormInputProps) {
  return (
    <div className="w-full flex-col space-y-2">
      <p>
        <label htmlFor={props.value} className="text-sm font-medium uppercase">
          {props.name}
        </label>
      </p>
      <input
        className="h-10 w-full rounded px-2 py-1 ring-1 ring-gray-200"
        style={{
          // On Safari, we need to disable the default appearance for our style to appear
          WebkitAppearance: "none",
        }}
        name={props.value}
        {...props.inputProps}
      />
    </div>
  );
}
