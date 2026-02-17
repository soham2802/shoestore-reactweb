import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurStory.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function OurStory() {
  return (
    <>
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1
            className="fw"
            style={{
              fontSize: "60px",
              fontWeight: "600",
              fontFamily: "poppins",
            }}
          >
            Our Story
          </h1>
          <h2 className="mt-3 text-muted">
            Taking a stylish and sustainable footwear <br /> with a focus on
            creating a positive impact <br /> on both the world and the people
          </h2>
        </div>
      </section>

      <section className="py-5">
        <div className="container" style={{ paddingBottom: "60px" }}>
          <div className="row align-items-start gy-5">
            <div className="col-lg-12">
              <iframe
                width="1150"
                height="600"
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title="Video Placeholder"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-lg-12">
              <div className="row gx-5 gy-5">
                <div className="col-md-4">
                  <i
                    className="fas fa-hand-holding-heart"
                    style={{ fontSize: "32px", color: "#6c6f3d" }}
                  ></i>
                  <h5 className="mt-3 fw-semibold" style={{ fontSize: "20px" }}>
                    Ethics and equality
                  </h5>
                  <p
                    style={{
                      opacity: "0.5",
                      fontSize: "17px",
                      lineHeight: "26px",
                    }}
                  >
                    Pellentesque quam convallis massa enim, faucibus ornare
                    sollicitudin gravida justo sit suspendisse pellentesque.
                  </p>
                </div>

                <div className="col-md-4">
                  <i
                    className="fas fa-leaf"
                    style={{ fontSize: "32px", color: "#6c6f3d" }}
                  ></i>
                  <h5 className="mt-3 fw-semibold" style={{ fontSize: "20px" }}>
                    Eco-design
                  </h5>
                  <p
                    style={{
                      opacity: "0.5",
                      fontSize: "17px",
                      lineHeight: "26px",
                    }}
                  >
                    Risus leo molestie a aliquam amet urna orci nisl dignissim
                    elementum nibh felis ultricies vitae consectetur.
                  </p>
                </div>

                <div className="col-md-4">
                  <i
                    className="fas fa-cat"
                    style={{ fontSize: "32px", color: "#6c6f3d" }}
                  ></i>
                  <h5 className="mt-3 fw-semibold" style={{ fontSize: "20px" }}>
                    Wildlife Preservation
                  </h5>
                  <p
                    style={{
                      opacity: "0.5",
                      fontSize: "17px",
                      lineHeight: "26px",
                    }}
                  >
                    Pellentesque nunc ante augue adipiscing sed suspendisse amet
                    sed pellentesque convallis erat nibh vivamus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2">
        <div
          className="container"
          style={{
            background: "#efefec",
            padding: "80px 60px",
            borderRadius: "0px",
          }}
        >
          <div className="row" style={{ paddingBottom: "120px" }}>
            <div className="col-md-4">
              <h3 className="fw-semibold" style={{ fontSize: "28px" }}>
                Mission
              </h3>
            </div>

            <div className="col-md-7">
              <p
                className="text"
                style={{ fontSize: "18px", opacity: "0.5", lineHeight: "30px" }}
              >
                Pulvinar sed nunc ultrices consequat adipiscing sagittis feugiat
                at dui, arcu nec id non pellentesque dolor feugiat dolor ac ac
                sem semper nulla dis vitae, quis elit odio nunc dignissim
                aliquam ipsum.
              </p>

              <p
                className="text"
                style={{ fontSize: "18px", opacity: "0.5", lineHeight: "30px" }}
              >
                Mattis pretium nec tellus viverra phasellus sed tortor ac
                tincidunt adipiscing nibh eget, adipiscing sit penatibus
                lobortis placerat.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <h3 className="fw-semibold" style={{ fontSize: "28px" }}>
                Vision
              </h3>
            </div>

            <div className="col-md-7">
              <p
                className="text"
                style={{
                  fontSize: "18px",
                  fontFamily: "inherit",
                  opacity: "0.5",
                  lineHeight: "30px",
                }}
              >
                Sit etiam est, nunc sollicitudin malesuada tincidunt senectus
                venenatis, adipiscing nulla vel diam, lorem donec sit blandit
                nec tortor, diam cras ut velit nulla purus ullamcorper ornare
                elit bibendum augue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center mt-5">
          <h1 className="fw-bold mb-3">See how your shoes are made</h1>
          <p
            className="text-muted mx-auto mb-5"
            style={{ maxWidth: "700px", fontSize: "1.10rem" }}
          >
            Urna, felis enim orci accumsan urna blandit egestas mattis egestas
            feugiat viverra ornare donec adipiscing semper aliquet integer risus
            leo volutpat nulla enim ultrices.
          </p>
          <div className="row align-items-center justify-content-between mt-4">
            <div className="col-md-4 text-md-start text-center mb-5 ">
              <div className="mb-5">
                <h6 className="fw-bold text-warning">01.</h6>
                <h4 className="fw-semibold">Pet canvas</h4>
                <p
                  className="text"
                  style={{
                    color: "#928888ff",
                    fontFamily: "sans-serif",
                    marginBottom: "40px",
                  }}
                >
                  Morbi eget bibendum sit <br />
                  adipiscing morbi ac nisl vitae <br />
                  maecenas nulla cursus.
                </p>
                <hr style={{ width: "50%", marginLeft: "0" }} />{" "}
              </div>

              <div>
                <h6 className="fw-bold text-warning">02.</h6>
                <h4 className="fw-semibold">
                  Algae foam + <br />
                  vegan glue
                </h4>
                <p
                  className="text"
                  style={{ color: "#928888ff", fontFamily: "sans-serif" }}
                >
                  Enim tincidunt donec vulputate <br /> magna pharetra mattis
                  in.
                </p>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-center mt-5">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
                className="img-fluid"
                alt=""
                style={{ maxWidth: "550px" }}
              />
            </div>

            <div className="col-md-4 text-md-end text-center mt-4 mt-md-0">
              <div className="mb-5">
                <h6 className="fw-bold text-warning">03.</h6>
                <h4 className="fw-semibold">Organic cotton</h4>
                <p
                  className="text"
                  style={{
                    color: "#928888ff",
                    fontFamily: "sans-serif",
                    marginBottom: "40px",
                  }}
                >
                  A vel ipsum, sed dignissim <br />
                  elementum ultrices amet.
                </p>
                <hr style={{ width: "50%", marginLeft: "auto" }} />{" "}
              </div>

              <div>
                <h6 className="fw-bold text-warning">04.</h6>
                <h4 className="fw-semibold">
                  Upcycled plastic <br />
                  bottles
                </h4>
                <p
                  className="text"
                  style={{ color: "#928888ff", fontFamily: "sans-serif" }}
                >
                  Pellentesque viverra amet <br /> netus facilisis amet felis
                  odio <br />
                  tortor orci cursus est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <hr
          style={{
            marginLeft: "50px",
            marginRight: "60px",
            paddingTop: "30px",
          }}
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <p
                className="text-muted mb-0"
                style={{ fontSize: "20px", lineHeight: "1.8", opacity: "0.7" }}
              >
                Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam{" "}
                <br />
                sapien pulvinar laoreet vulputate sem aliquet phasellus egestas
                felis, <br /> est, vulputate morbi massa mauris vestibulum dui
                odio.
              </p>
            </div>

            <div className="col-md-5 d-flex justify-content-center gap-5">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
                width="100"
                alt=""
              />
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
                width="100"
                alt=""
              />
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
                width="100"
                alt=""
              />
            </div>
          </div>
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

export default OurStory;
