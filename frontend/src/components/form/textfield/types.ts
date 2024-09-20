import { SvgIconProps } from "@mui/material";
import { ChangeEvent } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";
import { FormData } from "../../../pages/SignUp/types";

export type CustomTextFieldProps<T extends FieldValues> = {
    type: string;
    placeholder?: string;
    pattern?: RegExp;
    handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur?: any;
    name: Path<T>;
    error: FieldError | undefined;
    control: Control<T>;
    endAdornment?: React.ReactElement<SvgIconProps>;
    startAdornment?: React.ReactElement<SvgIconProps>;
    toolTipText?: string;
    label?: string;
    disabled?: boolean;
    helperText?: string;
    maxLength?: number;
    rules?: Record<string, string[]>;
};
  