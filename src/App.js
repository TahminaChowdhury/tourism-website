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
import MyBookings from "./components/Pages/MyBookings/MyBookings"
import ManageAllBookings from "./components/Pages/ManageAllBookings/ManageAllBookings"
import AddNewService from "./components/Pages/AddNewService/AddNewService"
import Reservation from "./components/Reservation/Reservation";
import UpdateStatus from "./components/UpdateStatus/UpdateStatus";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {

  return (
    <div className="App">
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

          <Route path="/mybookings">
            <MyBookings></MyBookings>
          </Route>

          <Route path="/manageallbookings">
            <ManageAllBookings></ManageAllBookings>
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

          <PrivateRoute path="/reservetion">
            <Reservation></Reservation>
          </PrivateRoute>

          <Route path="/reservation">
            <Reservation></Reservation>
          </Route>

          <Route path="/updatestatus/:id">
            <UpdateStatus></UpdateStatus>
          </Route>

          <Route path="/contactus">
            <ContactUs></ContactUs>
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
