import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import { Controller, FieldValues } from "react-hook-form";
import { CustomSelectProps } from "./types"

const Select = <T extends FieldValues>({ placeholder, name, options, control, helperText }: CustomSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error?.type}>
          <InputLabel id={name}>{placeholder}</InputLabel>
          <MuiSelect
            onChange={onChange}
            value={value ?? ""}
            inputRef={ref}
            name={name}
            label={placeholder}
            labelId={name}
            error={!!error?.type}
            onBlur={onBlur}
            MenuProps={{ elevation: 1 }}
          >
            {options && options.length > 0 ? (
              options?.map((option) => {
                return (
                  <MenuItem value={option.value} key={option.label}>
                    {option.label}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem value={""}>{"No-options"}</MenuItem>
            )}
          </MuiSelect>
          {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default Select;
