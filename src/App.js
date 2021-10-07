import { message } from 'antd';
import React, { useContext, useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './contexts/auth';
import SocketInstant from './socket.io/index';
import './scss/selfStyle.scss';
import './scss/style.scss';
import IndicatorLoading from './views/action/indicator';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {
  const { token } = useContext(AuthContext);
  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser')|| `{}`);
    // if(currentUser){
    //   SocketInstant.initiateSocket(null,currentUser._id || '');
    // }
  },[])
  return (
      <HashRouter>
        <ReactNotification />
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/" name="Home" render={props => {
              if (token != null) {
                return <TheLayout {...props} />
              } else {
                if(localStorage.getItem('token')) message.warn('Please dont try to Login')
                return <Redirect to={{pathname:'/login',state: { from: props.location }}} />
              }
            }} />

          </Switch>
        </React.Suspense>
        <IndicatorLoading />
      </HashRouter>
  );
}
export default App;
