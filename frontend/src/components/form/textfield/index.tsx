import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MuiTextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { Controller, FieldValues } from "react-hook-form";
import { CustomTextFieldProps } from "./types"

const TextField= <T extends FieldValues>({
  type,
  placeholder,
  name,
  error,
  control,
  handleChange,
  pattern,
  label,
  startAdornment,
  endAdornment,
  handleBlur,
  toolTipText,
  disabled,
  helperText,
  maxLength,
  rules
}: CustomTextFieldProps<T> ) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, onBlur, ref, ...others } }) => (
        <MuiTextField
          fullWidth
          disabled={disabled}
          error={!!error}
          placeholder={placeholder}
          helperText={error ? helperText : ""}
          autoComplete="off"
          label={label}
          type={type}
          inputRef={ref}
          inputProps={{maxLength: maxLength}}
          value={value ?? ""}
          onBlur={handleBlur ?? onBlur}
          {...others}
          onChange={(e) => {
            if (handleChange) {
              return handleChange(e);
            }
            if (!pattern || pattern?.test(e.target.value)) {
              onChange(e);
            }
          }}
          InputProps={{
            sx: { pr: "4px" },
            ...(startAdornment || endAdornment
              ? {
                  startAdornment: startAdornment && (
                    <InputAdornment position="start">
                      <Tooltip
                        disableInteractive
                        title={toolTipText}
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -14],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <IconButton>{endAdornment}</IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                  endAdornment: endAdornment && (
                    <InputAdornment position="end">
                      <Tooltip
                        disableInteractive
                        title={toolTipText}
                        slotProps={{
                          popper: {
                            modifiers: [
                              {
                                name: "offset",
                                options: {
                                  offset: [0, -14],
                                },
                              },
                            ],
                          },
                        }}
                      >
                        <IconButton disableTouchRipple>{endAdornment}</IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              : {}),
          }}
        />
      )}
    />
  );
};

export default TextField;
