import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaInstagram, FaPinterestP, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light pt-5">

      <div className="container pb-5">
        <div className="row gy-4">

          <div className="col-md-3">
            <img
              src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/site-logo.svg"
              alt="Logo"
              width="140"
              className="mb-4"
            />

            <p className="text-muted" style={{ fontSize: "18px", opacity: "0.7" }}>
              Praesent eget tortor sit risus <br />
              egestas nulla pharetra ornare <br />
              quis bibendum est bibendum <br />
              sapien proin nascetur
            </p>

            <div className="d-flex gap-3 mt-5">
              <FaInstagram size={22} className="footer-icon" />
              <FaPinterestP size={22} className="footer-icon" />
              <FaFacebookF size={22} className="footer-icon" />
              <FaTwitter size={22} className="footer-icon" />
            </div>
          </div>

          <div className="col-md-3 px-md-5">
            <h4 className="mb-4">Shop</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="/Men">Shop Men</a></li>
              <li><a href="/Women">Shop Women</a></li>
              <li><a href="/LookBook">Lookbook</a></li>
              <li><a href="#">Gift Card</a></li>
              <li><a href="/SaleSection">Sale</a></li>
            </ul>
          </div>

          <div className="col-md-3 px-md-5">
            <h4 className="mb-4">About</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="/OurStory">Our Story</a></li>
              <li><a href="#">Our Materials</a></li>
              <li><a href="#">Our Value</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Manufacture</a></li>
            </ul>
          </div>

          <div className="col-md-3 px-md-5">
            <h4 className="mb-4">Need Help?</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Shoe Care</a></li>
              <li><a href="#">Size Chart</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="py-4 pt-5 pb-5 border-top" style={{ backgroundColor: "#F1F1EF" }}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <p className="m-0 text-muted" style={{ opacity: "0.7" }}>
                © 2025 Recycled Shoe Store. Powered by Recycled Shoe Store.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <img
                src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
                alt="Payment Icons"
                width="230"
                height="20"
              />
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
