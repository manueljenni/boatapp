import { ReactNode } from "react";

/**
 * Props
 */

export type FormProps = {
  title: string;
  subtitle?: string;
  // How the form will be submitted - this will usually be the onClick of a button
  onSubmit: (arg0: any) => Promise<void> | void;
  // Optional error message to display at the bottom of the form
  error?: ErrorMessage | null;
  button: ReactNode;
  children: React.ReactNode;
};

export type FormInputProps = {
  // Title that is displayed above the input box
  name: string;
  // Value that can be extracted by calling target.* when submitting the form
  value: string;
  inputProps?: Partial<InputProps>;
};

// A list of allowed properties for the <input> element
type InputProps = {
  type?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  autofocus?: boolean;
  pattern?: string;
  defaultValue?: string | number;
  step?: number;
  onChange?: (arg0: any) => Promise<void> | void;
  // Add more as needed, not full list
};

export type ButtonProps = {
  text: string;
  onClick?: any;
  buttonProps?: Partial<ButtonMoreProps>;
  children?: React.ReactNode;
  href?: string;
  className?: string;
};

/**
 * Data fetching
 */

// Custom result type like in Rust
// See: https://imhoff.blog/posts/using-results-in-typescript
export type Result<T, E = ErrorMessage> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export type ErrorMessage = {
  message: string;
  statusCode: number;
};

export type LogInRequest = {
  email: string;
  password: string;
};

export type LogInResponse = Result<{ accessToken: string }, ErrorMessage>;

export type Me = { email: string };

export type MeResponse = Result<Me, ErrorMessage>;
