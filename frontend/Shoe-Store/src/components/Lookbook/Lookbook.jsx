import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const lookbookData = [
  {
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg",
    title: "Fall/Winter 2021",
    text: "Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.",
  },
  {
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg",
    title: "Spring/Summer 2021",
    text: "Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.",
  },
  {
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg",
    title: "Go & Play",
    text: "Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.",
  },
  {
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg",
    title: "Adventurer Gear",
    text: "Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.",
  },
];

export default function Lookbook() {
  return (
    <>
      <Navbar />

      <div className="py-5 text-center">
        <h1
          className="fw display-5"
          style={{ fontSize: "75px", fontWeight: "500" }}
        >
          Lookbook
        </h1>
      </div>

      {lookbookData.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <section key={index} className="my-5">
            <div className="container px-0">
              <div className="row g-0 align-items-center">
                <div className={`col-lg-7 ${isReverse ? "order-lg-2" : ""}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-100"
                    style={{
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  className={`col-lg-5 d-flex align-items-center ${isReverse ? "order-lg-1" : ""}`}
                >
                  <div style={{ padding: "80px 60px", maxWidth: "500px" }}>
                    <h2
                      style={{
                        fontSize: "42px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {item.title}
                    </h2>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.8",
                        color: "#555",
                        marginBottom: "35px",
                      }}
                    >
                      {item.text}
                    </p>

                    <a
                      href="#"
                      style={{
                        textTransform: "uppercase",
                        fontSize: "15px",
                        letterSpacing: "2px",
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "600",
                        borderBottom: "2px solid #f7a928",
                        paddingBottom: "4px",
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

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
              href="/Men"
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
              href="/Women"
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
}
