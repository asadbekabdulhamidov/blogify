import React from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register: any;
  name: string;
  label?: string;
};

function Input({
  type = "text",
  placeholder,
  error,
  register,
  name,
  label,
}: InputProps) {
  return (
    <label className="mb-4 block">
      <p className="mb-3 text-[14px] font-medium">{label}</p>
      <input
        className="w-full rounded-md border p-[13px] outline-none autofill:bg-white"
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 ml-1 text-red-600">{error.message}</p>}
    </label>
  );
}

export default Input;
