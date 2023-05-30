'use client'

import { TextField, Button, Grid, Box } from "@mui/material"
import { useRef } from "react";

export default function Register() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (event: any) => {
    event?.preventDefault();
  }

  return (
    <Box component={'form'} onSubmit={handleSubmit} justifyContent={'center'} display={'flex'} marginTop={5}>
      <Grid container justifyContent={'center'} columnSpacing={1} rowSpacing={1} sx={{
        maxWidth: {
          xs: '100%',
          sm: '50%'
        }
      }}>
        <Grid item xs={6}>
          <TextField type="text" label="Username" ref={usernameRef} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="email" label="Email" ref={emailRef} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="password" label="Password" ref={passwordRef} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="password" label="Password Confirmation" ref={passwordConfirmationRef} fullWidth />
        </Grid>
        <Grid item xs={12} justifySelf={'flex-end'} justifyContent={'flex-end'}>
          <Grid container justifyContent={'flex-end'}>
            <Button type="submit" variant="outlined">Register</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
