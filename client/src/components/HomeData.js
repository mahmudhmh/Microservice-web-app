import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";
import Navbar from "./Navbar";
import "./Home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [Workspaces, setWorkspaces] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [checkoutPrice, setCheckoutPrice] = useState(0);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({ street: "", building: "", apt: "" });
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setCheckoutItems([...checkoutItems, selectedWorkspace]);
    setCheckoutPrice(checkoutPrice + selectedWorkspace.price);
  };

  useEffect(() => {
    fetch("http://localhost:7000/api/products/")
      .then((response) => response.json())
      .then((data) => setWorkspaces(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredWorkspaces = Workspaces.filter((Workspace) =>
    Workspace.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderData = filteredWorkspaces.map((Workspace) => (
    <div className="card col-md-4" key={Workspace._id}>
      <img src={Workspace.img} className="w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{Workspace.title}</h5>
        <p className="card-text">{Workspace.description}</p>
        <div>
          <ReactStars />
          <span>{Workspace.reviews} reviews</span>
          <br />
          <button
            className="details-btn"
            onClick={() => openDetailsModal(Workspace)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  ));

  const fetchProductDetails = (_id) => {
    fetch(`http://localhost:7000/api/products/${_id}`)
      .then((response) => response.json())
      .then((data) => setSelectedWorkspace(data))
      .catch((error) => console.log(error));
  };

  const openDetailsModal = (Workspace) => {
    fetchProductDetails(Workspace._id);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setSelectedWorkspace(null);
    setIsDetailsModalOpen(false);
  };

  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckout = () => {
    // Perform the necessary checkout logic
    // Display a success toast
    setCheckoutSuccess(true);
    window.alert("Success! Order has been placed.");
  };

  return (
    <div className="hero">
      <div className="content">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="left-side col-md-10">
              <h1>
                Welcome to Space the First Workspace online booking system
              </h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Shared Area</h3>
                    <p>
                      The lounge area is a relaxed and comfortable space where
                      members can take a break
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Kitchen and Dining Area</h3>
                    <p>
                      Co-working spaces often provide a shared kitchen and
                      dining area where members can prepare and enjoy their
                      Workspaces.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Meeting Rooms</h3>
                    <p>
                      Meeting rooms are dedicated spaces designed for
                      collaborative discussions, presentations, and meetings.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Collaboration Zones</h3>
                    <p>
                      Collaboration zones are designed to facilitate teamwork
                      and brainstorming sessions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Phone Booths</h3>
                    <p>
                      Phone booths or private call rooms are soundproofed spaces
                      where co-workers can make phone calls or have private
                      conversations without disturbing others.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Event Spaces</h3>
                    <p>
                      Co-working spaces often have event spaces that can be used
                      for hosting workshops, seminars, networking events, or
                      community gatherings. These spaces may include a stage, AV
                      equipment, and seating arrangements
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Outdoor Spaces</h3>
                    <p>
                      Some co-working spaces offer outdoor areas such as rooftop
                      terraces or garden spaces where members can relax, work,
                      or hold informal meetings.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="service-item">
                    <h3>Balcony</h3>
                    <p>
                      to have a great view of the streets,to have a great view
                      of the streets to have a great view of the streets to have
                      a great view of the streets to have a great view of the
                      streets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Workspaces">
            <div className="row">
              <div className="col-md-10 d-flex justify-content-between">
                <h3 className="workspaces-txt">Our Workspaces</h3>
                <input
                  type="text"
                  className="form-control w-50"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="row">{renderData}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isDetailsModalOpen}
        onRequestClose={closeDetailsModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedWorkspace && (
          <div>
            <img src={selectedWorkspace.img} alt={selectedWorkspace.title} />
            <DatePicker
              selected={selectedDate}
              className="Date-picker-data"
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select date and time"
            />
            <h2>Workspace Name: {selectedWorkspace.title}</h2>
            <p>Description: {selectedWorkspace.desc}</p>
            <p>Category: {selectedWorkspace.categories}</p>
            <p>Price: {selectedWorkspace.price}</p>
            <p>Cart Count: {cartCount}</p>

            <button onClick={addToCart}>Book</button>
            <button onClick={openCheckoutModal}>Checkout</button>
            <button onClick={closeDetailsModal}>Close</button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isCheckoutModalOpen}
        onRequestClose={closeCheckoutModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div>
          <h2>Checkout</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Street Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="building">Building</label>
            <input
              type="text"
              id="building"
              name="building"
              value={address.building}
              onChange={handleAddressChange}
              placeholder="Building No."
            />
          </div>
          <div className="form-group">
            <label htmlFor="apt">Apt.</label>
            <input
              type="text"
              id="apt"
              name="apt"
              value={address.apt}
              onChange={handleAddressChange}
              placeholder="Apt. No."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <p className="pad-p">Price: {checkoutPrice}</p>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={closeCheckoutModal}>Close Checkout</button>
        </div>
      </Modal>

      {checkoutSuccess && (
        <div className="toast">Success! Order has been placed.</div>
      )}
    </div>
  );
};

export default Hero;
