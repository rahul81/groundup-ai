import './App.scss';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './container/sign-in/SignIn';
import Home from './container/home/Home';
import { ThemeProvider } from '@mui/material/styles';
import { HOME, ROOT, USER } from './constants/ContextPaths';
import Settings from './container/settings/Settings';
import theme from './Theme';
import Sample from './container/sample/Sample';
import HttpInterceptor from './HttpInterceptor';
import './firebase'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HttpInterceptor/>
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
          {/* Sample route to render and test components */}
          <Route path={'/sample'}>  
            <Sample />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;