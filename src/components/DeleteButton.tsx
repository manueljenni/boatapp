import { ButtonProps } from "@/types";

export default function DeleteButton(props: ButtonProps) {
  return (
    <button
      {...props.buttonProps}
      className="min-h-10 delete-button-gradient max-w-xl rounded text-center uppercase text-white"
      onClick={props.onClick}>
      {props.text && <p className="px-4 py-2 font-medium">{props.text}</p>}
      {props.children && (
        <div className="flex items-center justify-center">{props.children}</div>
      )}
    </button>
  );
}
