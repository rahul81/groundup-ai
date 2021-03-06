import './App.scss';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './container/sign-in/SignIn';
import Home from './container/home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ADMIN, HOME, ROOT, USER } from './constants/ContextPaths';
import Settings from './container/settings/Settings';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
  }
}

const theme = createTheme({
  typography: {
    h3:{
      fontSize: '2rem',
      fontWeight: 500
    },
    h4:{
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h5:{
      fontSize: '1.25rem',
      fontWeight: 500
    },
    h6:{
      fontSize: '1.1rem'
    },
    error:{
      color: 'red',
      fontSize: '.8rem',
      lineHeight: '1.3'
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

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Switch>
        <Route path={ROOT} exact>
          <SignIn />
        </Route>
        <Route path={HOME}>
          <Home/>
        </Route>
        <Route path={USER}>
          <Settings/>
        </Route>
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;