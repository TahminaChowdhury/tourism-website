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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import MyOrders from "./components/Pages/MyOrders/MyOrders"
import ManageAllOrders from "./components/Pages/ManageAllOrders/ManageAllOrders"
import AddNewService from "./components/Pages/AddNewService/AddNewService"
import Reservation from "./components/Reservation/Reservation";

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

         <Route path="/banner">
            <Banner></Banner>
         </Route>

         <Route path="/home">
            <Home></Home>
         </Route>

         <Route path="/myorders">
            <MyOrders></MyOrders>
         </Route>

         <Route path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
         </Route>

         <Route path="/addnewservice">
            <AddNewService></AddNewService>
         </Route>

         <Route path="/login">
            <Login></Login>
         </Route>

         <Route path="/signup">
          <Signup></Signup>
         </Route>

          <Route path="/hoteldetails">
            <HotelDetails></HotelDetails>
          </Route>
          <PrivateRoute path="/hotels/:id">
            <HotelDetails></HotelDetails>
          </PrivateRoute>

          <Route path="/reservation">
            <Reservation></Reservation>
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
