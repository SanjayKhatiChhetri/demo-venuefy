/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="venuefy">
        VenueFy
      </a>
      <ul className="nav-center">
        <li className="active">
          <a href="/venues" className="venue">
            Venues
          </a>
        </li>
        <li>
          <a href="/vendors" className="vendors">
            Vendors
          </a>
        </li>
        <li>
          <a href="/more">More</a>
        </li>
      </ul>
      <div className="nav-left">
        <button className="button">Sing in</button>
        <button className="button">Create Listing</button>
      </div>
    </nav>
  );
};
