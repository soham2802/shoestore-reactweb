import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import {
  FaMobileAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="py-5 text-center">
        <div className="container">
          <h1 className="fw" style={{ fontSize: "60px" }}>
            Contact
          </h1>
        </div>
      </section>
      <section
        className="py-5 px-5 container"
        style={{ backgroundColor: "#F1F1EF" }}
      >
        <div className="row">
          <div className="col-md-4">
            {/* Box 1 */}
            <div className="d-flex mb-4 pb-4 contact-item">
              <div className="me-3">
                <FaMobileAlt size={22} className="contact-icon" />
              </div>

              <div>
                <h5 className="fw-bold mb-1 contact-title">Products & order</h5>
                <p className="contact-text">
                  (+1) 123-456-7890 <br />
                  available 24/7
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="d-flex mb-4 pb-4 contact-item">
              <div className="me-3">
                <FaMobileAlt size={22} className="contact-icon" />
              </div>

              <div>
                <h5 className="fw-bold mb-1 contact-title">Info & enquiries</h5>
                <p className="contact-text">
                  (+1) 123-456-7890 <br />
                  available 24/7
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="d-flex mb-4 pb-4 contact-item">
              <div className="me-3">
                <FaMapMarkerAlt size={22} className="contact-icon" />
              </div>

              <div>
                <h5 className="fw-bold mb-1 contact-title">Store locator</h5>
                <p className="contact-text">Find our retail near you</p>
              </div>
            </div>

            <h6 className="mt-4">Stay in touch</h6>

            <div className="d-flex gap-3 mt-2">
              <FaFacebook size={22} className="social-icon" />
              <FaTwitter size={22} className="social-icon" />
              <FaYoutube size={22} className="social-icon" />
            </div>
          </div>

          <div className="col-md-1 d-none d-md-block">
            <div
              style={{
                borderLeft: "1px solid #dadada",
                height: "100%",
                margin: "0 auto",
              }}
            ></div>
          </div>

          <div className="col-md-7">
            <h2 className="mb-4" style={{ opacity: "0.8" }}>
              Send Us a Message
            </h2>

            <form className="row g-3">
              <div className="col-md-6 lab">
                <label className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input type="text" className="form-control" required />
              </div>

              <div className="col-md-6 lab">
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input type="email" className="form-control" required />
              </div>

              <div className="col-12 lab">
                <label className="form-label">
                  Comment or Message <span className="required">*</span>
                </label>
                <textarea className="form-control" rows="5" required></textarea>
              </div>

              <div className="col-12">
                <button
                  className="btn px-5 py-2"
                  style={{ backgroundColor: "#656d3a", color: "#fff" }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "38px", color: "#222" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
            Purus amet scelerisque nisl nibh felis massa a enim gravida
          </p>

          <div
            className="mx-auto mb-4"
            style={{
              width: "55%",
              borderBottom: "1px solid #e0e0e0",
            }}
          ></div>

          <div
            className="accordion mx-auto"
            id="faqAccordion"
            style={{ maxWidth: "55%" }}
          >
            <div className="accordion-item border mb-2">
              <h2 className="accordion-header" id="q1">
                <button
                  className="accordion-button collapsed bg-white fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#a1"
                >
                  Quam ligula tristique sed leo nunc aenean amet
                </button>
              </h2>
              <div
                id="a1"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.{" "}
                </div>
              </div>
            </div>

            <div className="accordion-item border mb-2">
              <h2 className="accordion-header" id="q2">
                <button
                  className="accordion-button collapsed bg-white fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#a2"
                >
                  Tortor eget a a tincidunt est viverra turpis
                </button>
              </h2>
              <div
                id="a2"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.{" "}
                </div>
              </div>
            </div>

            <div className="accordion-item border mb-2">
              <h2 className="accordion-header" id="q3">
                <button
                  className="accordion-button collapsed bg-white fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#a3"
                >
                  Quis cras urna diam id nec amet
                </button>
              </h2>
              <div
                id="a3"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.{" "}
                </div>
              </div>
            </div>

            <div className="accordion-item border mb-2">
              <h2 className="accordion-header" id="q4">
                <button
                  className="accordion-button collapsed bg-white fw-semibold"
                  data-bs-toggle="collapse"
                  data-bs-target="#a4"
                >
                  Id congue bibendum velit blandit massa elementum
                </button>
              </h2>
              <div
                id="a4"
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            className="mx-auto mt-4"
            style={{
              width: "85%",
              borderBottom: "1px solid #e0e0e0",
            }}
          ></div>
        </div>
      </section>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="hero-section d-flex justify-content-center align-items-center text-center mt-5"
        style={{
          backgroundImage: "url(/src/assets/Nike.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "600px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container"
          style={{
            zIndex: 2,
            position: "relative",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "500",
              lineHeight: "1.1",
              fontFamily: "Poppins, sans-serif",
            }}
            className="text-white mb-4"
          >
            Better for People &amp; the Planet
          </h1>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#fff",
            }}
            className="mb-5"
          >
            Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
            dictum in vulputate.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <a
              href="#"
              className="custom-btn btn px-4 py-2"
              style={{
                background: "#fff",
                color: "#000",
                fontWeight: "600",
                borderRadius: "4px",
              }}
            >
              SHOP MEN
            </a>

            <a
              href="#"
              className="custom-btn btn px-4 py-2"
              style={{
                background: "#fff",
                color: "#000",
                fontWeight: "600",
                borderRadius: "4px",
              }}
            >
              SHOP WOMEN
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="py-4 pt-5 bg-light">
        <div className="container">
          <div className="row text-center mb-2">
            <div className="col-md-4 d-flex justify-content-center">
              <ul className="list-unstyled m-0 p-0">
                <li
                  className="d-flex align-items-center gap-2"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fa-solid fa-lock"></i>
                  <span className="fw-semibold">Secure Payment</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <ul className="list-unstyled m-0 p-0">
                <li
                  className="d-flex align-items-center gap-2"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fas fa-truck"></i>
                  <span className="fw-semibold">Express Shipping</span>
                </li>
              </ul>
            </div>

            <div className="col-md-4 d-flex justify-content-center">
              <ul className="list-unstyled m-0 p-0">
                <li
                  className="d-flex align-items-center gap-2"
                  style={{ fontSize: "20px" }}
                >
                  <i className="fas fa-sync-alt"></i>
                  <span className="fw-semibold">Free Return</span>
                </li>
              </ul>
            </div>

            <hr style={{ marginTop: "40px", opacity: "0.2" }} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
