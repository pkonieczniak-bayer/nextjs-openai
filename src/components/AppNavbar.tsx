'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthButton = () => {
  const { data } = useSession();

  if (!data?.user) {
    return (
      <Button color="inherit" onClick={() => signIn()}>Login</Button>
    )
  }

  return (
    <Button color="inherit" onClick={() => signOut()}>Logout</Button>
  )
}

const RegisterButton = () => {
  const { data } = useSession();
  const router = useRouter();

  if (data?.user) {
    return null;
  }

  return (
    <Button color="inherit" onClick={() => router.push('/register')}>Register</Button>
  )
}

export const AppNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <AuthButton />
          <RegisterButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
