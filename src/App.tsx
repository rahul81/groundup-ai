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
import { getToken, onMessageListener } from './firebase';
import { notificationActionCreator, userActionCreators } from './store/action-creators';
import { bindActionCreators } from 'redux';
import { NotificationState } from './store/reducers/notificationReducer'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setTimeout } from 'timers';

function App() {
  const dispatch = useDispatch();
  const { setNotification } = bindActionCreators(notificationActionCreator, dispatch)
  const { updateDeviceToken } = bindActionCreators(userActionCreators, dispatch)
  
  const [refresh, setRefresh] = useState(false);

  //Get Notifications using firebase - cloud messaging API

  useEffect(() => {
    getToken().then((deviceToken) => {
      if(deviceToken){
        const userId = localStorage.getItem('userId') || ''
        updateDeviceToken(userId, deviceToken)
      }
    });
  }, [])
  // getToken();
  onMessageListener().then(payload => {
    setNotification(payload)
    
    //Need to re render the app.js on every message recieved for onMessagelistener
    setRefresh(true);
    setTimeout(() => {setRefresh(false)}, 500)
    console.log("on message listener > ",payload)
  }).catch(err => console.log('failed: ', err));

  return (
    <>
      <HttpInterceptor/>
      <div className="App">
        <Switch>
          <Route path={ROOT} exact>
            <SignIn />
          </Route>
          <Route path={HOME}>
            <Home />
          </Route>
          <Route path={USER}>
            <Settings />
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