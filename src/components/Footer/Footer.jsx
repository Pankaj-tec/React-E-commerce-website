import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="max-w-[1272px] mx-auto px-[1rem]">
        <div className="flex justify-between">
          <div className="">
            <a href="#">
              Pankaj<span>Shop</span>
            </a>
          </div>
          <div>
            <h3>Menu</h3>
            <ul className="">
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">info Center</a>
              </li>
              <li>
                <a href="#">News blog</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">info Center</a>
              </li>
              <li>
                <a href="#">News blog</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">info Center</a>
              </li>
              <li>
                <a href="#">News blog</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">info Center</a>
              </li>
              <li>
                <a href="#">News blog</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p>@2024 pankaj@copyright</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <Link to="/facebook">
              {" "}
              <FaFacebook />
            </Link>
            <Link to="/instagram">
              <FaInstagram />
            </Link>
            <Link to="/twitter">
              {" "}
              <FaTwitter />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
