import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import AllProducts from "./Pages/AllProducts";
import ContactForm from "./Pages/Contact";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { UserContextProvider } from "./Context/UserContext";
import UserProfile from "./Pages/UserProfile";
import EditProfile from "./Pages/EditProfile";
import PersonalDetails from "./Pages/PersonalDetails";
import Success from "./Pages/Success";
import Notfound from "./Pages/Notfound";


function App() {
  return (
    <><UserContextProvider>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/login" exact Component={Login} />
            <Route path="/register" exact Component={Register} />
            <Route path="/contact" exact Component={ContactForm} />
            <Route path="/productpage/:id" exact Component={ProductPage}/>
            <Route path="/cart" exact Component={Cart} />
            <Route path="/success" exact Component={Success} />
            <Route path="/products" exact Component={AllProducts} />
            <Route path="/personal-details" exact Component={PersonalDetails}/>
            <Route path="/user-profile" exact Component={UserProfile}/>
            <Route path="/edit-profile" exact Component={EditProfile}/>
            <Route path="/not-found" Component={Notfound} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Router>
      </Provider>
      </UserContextProvider>
    </>
  );
}

export default App;
