import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from './components/Navigation'
import { routes} from './routes'

function App() {
  return (
    <div className="App">
       <Router>
        {/* header */}
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
           routes && routes.map(res => 
               <Route key={res.route} component={res.component} path={res.route}  exact={res.exact}/>
           )
          }
          <Redirect from="*" to="/"></Redirect>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
