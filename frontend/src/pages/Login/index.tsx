import { Button, Paper, Snackbar, Stack, Typography } from "@mui/material";
import Box from '@mui/system/Box';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks'
import { useForm } from "react-hook-form";
import { LoginSchema } from './types';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/auth/auth.action";
import TextField from "../../components/form/textfield";

function Login() {

    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<loginProps>({
        resolver: zodResolver(LoginSchema), // Apply the zodResolver
    });

    const onSubmit = async (data: loginProps) => {
        console.log("SUCCESS", data);
        dispatch(login(data)).then((response: any)=> {
                    if(!response.payload) {
                        console.log(response.error.message,'error');
                        // add snackbar showing wrong credentials
                        setOpen(true);

                        navigate("/Login");
                    }
                    else {
                        localStorage.setItem("token", response.payload.user.token);
                        navigate('/');
                    }
                });
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f9fafb",
            }}>
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
                        
                    </Box>
                    <Stack
                        width={"50%"}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                    >
                        <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
                            Sign In
                        </Typography>


                        <TextField<loginProps>
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

                        <TextField<loginProps>
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

                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            sx={{
                                textTransform: "none",
                                borderRadius: "10px",
                                fontSize: "16px",
                                width: "90%",
                                fontWeight: "500",
                                boxShadow: "none",
                                mb: 4,
                            }}
                        >
                            Sign In
                        </Button>
                        <Box> New user ?? <Link to={'/signup'}> Sign Up </Link></Box>
                    </Stack>
                </Paper>
            </form>
            <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Invalid credentials"
                    action={action}
                />
        </Box>
    );
}

export default Login;