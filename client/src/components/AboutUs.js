import React from "react";
import Navbar from "./Navbar";
import "./AboutUs.css";
import Abtus from "../Assets/logo.png";
const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Workspaces Management and Booking System is an innovative solution
          designed to streamline and optimize the management and booking
          processes of shared workspaces. It provides a comprehensive platform
          that caters to the needs of workspace providers and individuals
          seeking flexible workspace options.
        </p>
        <h1>Key Features:</h1>
        <ul>
          <li>
            <p>
              {" "}
              Workspace Listing and Discovery: The system enables workspace
              providers to create detailed profiles for their available spaces,
              including information on amenities, location, pricing, and
              availability. Users can easily search and discover workspaces that
              meet their specific requirements.
            </p>
          </li>
          <li>
            <p>
              {" "}
              Booking and Reservation: Users can conveniently book workspaces
              through the system, selecting desired dates, durations, and
              additional services. The platform offers real-time availability
              and instant booking confirmation, ensuring a seamless reservation
              experience.
            </p>
          </li>
          <li>
            <p>
              {" "}
              Resource and Facility Management: Workspace providers can
              efficiently manage their resources and facilities through the
              system. This includes managing availability, scheduling
              maintenance, tracking occupancy, and ensuring a smooth workflow
              for both users and staff.
            </p>
          </li>
          <li>
            <p>
              {" "}
              User Profiles and Preferences: The system allows users to create
              personalized profiles, saving their preferences and booking
              history. This enables a tailored experience, as users can easily
              access their favorite workspaces, receive personalized
              recommendations, and manage their reservations.
            </p>
          </li>
        </ul>
      </div>
      <div className="image-abtus">
        <img src={Abtus} alt="img"></img>
      </div>
    </>
  );
};

export default AboutUsPage;
