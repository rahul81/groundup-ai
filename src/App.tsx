import './App.scss';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './container/sign-in/SignIn';
import Home from './container/home/Home';
import { HOME, ROOT, USER } from './constants/ContextPaths';
import Settings from './container/settings/Settings';
import Sample from './container/sample/Sample';
import HttpInterceptor from './HttpInterceptor';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;