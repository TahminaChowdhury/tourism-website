import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/shared/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Footer from "./components/shared/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/Notfound/NotFound";
import AuthProver from "./contextApi/AuthProver";

function App() {

  return (
    <div>
      <AuthProver>
     <Router>
       <Header></Header>
       <Switch>

         <Route exact path="/">
            <Home></Home>
         </Route>

         <Route path="/home">
            <Home></Home>
         </Route>

         <Route path="/banner">
            <Banner></Banner>
         </Route>

         <Route path="/login">
            <Login></Login>
         </Route>

         <Route path="/signup">
          <Signup></Signup>
         </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProver>
    </div>
  );
}

export default App;
