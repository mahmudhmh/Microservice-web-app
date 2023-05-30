import React, { Component } from "react";
import Hero from "./components/HomeData";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import AboutUsPage from "./components/AboutUs";
import ContactUsPage from "./components/ContactUs";
import ProfilePage from "./components/ProfilePage";
import CartPage from "./components/CartPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      cartItems: [], // Define cartItems in the state
    };
  }

  callAPI() {
    fetch("http://localhost:7000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Hero />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    );
  }
}

export default App;
