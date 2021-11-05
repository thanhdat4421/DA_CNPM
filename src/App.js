import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './firebase/config';
import Login from "./components/login";
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
import CreateTask from './components/task/CreateTask';
import ViewTask from './components/task/ViewTask';
import Home from './components/home/index';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} exact path='/login' />
            <Route component={Home} exact path='/'/>
            <Route component={CreateTask} exact path='/newtask' />
            <Route component={ViewTask} exact path='/:taskID'/>
          </Switch>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
