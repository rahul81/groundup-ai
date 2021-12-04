import React from 'react'
import SignIn from './container/sign-in/SignIn';
import Home from './container/home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ADMIN, HOME, ROOT, USER } from './constants/ContextPaths';
import Settings from './container/settings/Settings';
import { green, grey } from '@mui/material/colors';
import { color } from '@mui/system';

declare module '@mui/material/styles' {
    interface TypographyVariants {
      error: React.CSSProperties;
      paneheader: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      error?: React.CSSProperties;
      paneheader: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      error: true;
      paneheader:true;
    }
  }
  
  const theme = createTheme({
    typography: {
      h3:{
        fontSize: '2rem',
        fontWeight: 500,
        color:grey[600]
      },
      h4:{
        fontSize: '1.5rem',
        fontWeight: 500,
        color:grey[600]
      },
      h5:{
        fontSize: '1.25rem',
        fontWeight: 500,
        color:grey[800]
      },
      h6:{
        fontSize: '1.1rem',
        color:grey[600]
      },
      subtitle2: {
        color: grey[600]
      },
      body1: {
        color: grey[800]
      },
      paneheader:{
        fontSize: '.9rem',
        fontWeight: 700,
        color:grey[600]
      },
      error:{
        color: 'red',
        fontSize: '.8rem',
        lineHeight: '1.3'
      }
    },
    palette:{
      secondary:{
        main: grey[200],
        dark: grey[400],
        contrastText: 'white',
      },
      success:{
        main: green[500],
        contrastText: 'white'
      }
    },
    components:{
      MuiAppBar:{
        styleOverrides:{
          root:{
            backgroundColor: 'white',
            color: '#00000099'
          }
        }
      }
    }
  });
  
export default theme;