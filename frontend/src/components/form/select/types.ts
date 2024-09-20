import { Control, FieldValues, Path } from "react-hook-form";

export type CustomSelectProps<T extends FieldValues> = {
    placeholder: string;
    name: Path<T>;
    options?: Array<{ value: string; label: string }>;
    control: Control<T>;
    helperText?: string;
};
  