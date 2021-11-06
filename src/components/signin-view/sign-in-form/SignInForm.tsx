import React from "react";
import { useFormik } from "formik";
import { signInValidationSchema } from "./SignInFormValidation";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

export interface SignInFormFields {
    email:string;
    password: string;
}
interface SignInFormProps{
    handleSubmit: (event:any)=>void;
};

export default function SignInForm(props:SignInFormProps) {
  const initialValues:SignInFormFields = {email: '', password: ''};
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signInValidationSchema,
    onSubmit: props.handleSubmit,
  });

  return (
    <Box component="form"  onSubmit={formik.handleSubmit}>
        <TextField margin="normal" required fullWidth id="email" label="Email Address"
            name="email" autoComplete="email" autoFocus 
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}/>
        <TextField margin="normal" required fullWidth name="password" label="Password"
            type="password" id="password" autoComplete="off" 
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}/>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
            Sign In
        </Button>
    </Box>
  );
}