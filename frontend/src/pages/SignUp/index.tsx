import Box from "@mui/system/Box";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, UserSchema } from "./types";
import { Button, IconButton, Paper, Snackbar, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { createUser } from "../../features/auth/auth.action";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from "../../components/form/textfield";
import { ROLE_TYPES } from "./role-type";
import Select from "../../components/form/select";

export default function Signup() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset, setValue, resetField } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });
  const { errors } = useFormState({ control });

  const onSubmit = async (data: FormData) => {
    dispatch(createUser(data)).then((response) => {
      if(!response.payload) {
        setOpen(true);
        // navigate("/Login");
    }
      if (response.payload) navigate("/Login");
    });
  };
  const handleClose = () => {
    setOpen(false);
};

  const action = (
    <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
);

  
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9fafb",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          sx={{
            width: "55vw",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            p: 3,
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">
              Demo Test
            </Typography>
          </Box>
          <Stack
            width={"100%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={"20px"}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Create your Account
            </Typography>

            <TextField<FormData>
              type="text"
              label="name"
              name="name"
              helperText={
                errors?.name
                  ? errors?.name?.message
                  : undefined
              }
              error={errors?.name}
              control={control}
              maxLength={50}
            />

            <TextField<FormData>
              type="text"
              label="Email"
              name="email"
              helperText={
                errors?.email
                  ? errors?.email?.message
                  : undefined
              }
              error={errors?.email}
              control={control}
              maxLength={50}
            />

            <TextField<FormData>
              type="text"
              label="Password"
              name="password"
              helperText={
                errors?.password
                  ? errors?.password?.message
                  : undefined
              }
              error={errors?.password}
              control={control}
              maxLength={50}
            />

            <TextField<FormData>
              type="text"
              label="Confirm Password"
              name="confirmPassword"
              helperText={
                errors?.confirmPassword
                  ? errors?.confirmPassword?.message
                  : undefined
              }
              error={errors?.confirmPassword}
              control={control}
              maxLength={50}
            />
            {/* <button type="submit" className="submit-button">
                    Submit
                </button> */}
            <Select<FormData>
              name="role"
              placeholder="Role"
              options={ROLE_TYPES}
              control={control}
              helperText={
                errors?.role
                  ? errors?.role?.message
                  : undefined
              }
            />
            {/* <select
              {...register("role")}
              style={{
                margin: "10px",
                border: "1px solid transparent",
                padding: "10px",
              }}
            >
              <option value="USER">USER</option>
              <option value="VENDOR">VENDOR</option>
              <option value="ADMIN">ADMIN</option>
            </select> */}
            <Button
              color="primary"
              variant="contained"
              type="submit"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                fontSize: "16px",
                width: "100%",
                fontWeight: "500",
                boxShadow: "none",
                mb: 4,
              }}
            >
              Create Account
            </Button>
            <Typography> Already a user ?? <Link to={'/login'}> Log in </Link></Typography>
          </Stack>
        </Paper>
      </form>
      <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="User Already exists, Please login"
                    action={action}
      />
    </Box>
  );
}
