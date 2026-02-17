import api from "../../api";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Women.css";

function Women() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const res = await api.get("/products/category/Women");
        setProducts(res.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWomenProducts();

    const interval = setInterval(fetchWomenProducts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="woocommerce-breadcrumb container mt-5 pt-4">
        <Link to="/" className="text-decoration-none text-muted">
          Home
        </Link>
        <span className="text-muted">&nbsp;/&nbsp;</span>
        <span className="text-dark fw-semibold">Women</span>
      </div>

      <h1
        className="woocommerce-products-header__title page-title my-4 container text-center"
        style={{ fontSize: "50px" }}
      >
        WOMEN
      </h1>

      <section>
        <div className="container mt-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto d-flex align-items-center gap-2">
              <i className="bi bi-sliders2 fs-4"></i>
              <span className="fw-semibold">Filter Products</span>
            </div>

            <div className="col-auto d-flex align-items-center gap-3">
              <div className="dropdown">
                <button
                  className="btn border-0 dropdown-toggle text-muted"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Default sorting
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Newest First</button>
                  </li>
                </ul>
              </div>

              <i className="bi bi-grid-3x3-gap fs-4"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <div className="row justify-content-center" style={{ gap: "80px" }}>
            {products.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card border-0 shadow-sm h-100 product-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const id = product._id || product.id;
                    navigate(`/product/${id}`, { state: product });
                  }}
                >
                  {(product.sale === true || product.oldPrice) && (
                    <span className="sale-badge">Sale</span>
                  )}
                  <button
                    className="quick-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const id = product._id || product.id;
                      navigate(`/product/${id}`, { state: product });
                    }}
                  >
                    Quick View
                  </button>

                  <img
                    src={product.images[0]}
                    className="card-img-top rounded-3"
                    alt={product.name}
                    style={{ objectFit: "cover", height: "320px" }}
                  />

                  <div className="card-body">
                    <p className="card-text fw-semibold">{product.name}</p>
                    <p className="card-text">
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          ${Number(product.oldPrice).toFixed(2)}
                        </span>
                      )}
                      <span className="fw-bold">
                        ${Number(product.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default Women;
