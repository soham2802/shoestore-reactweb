import api from "../../api";
import { useState } from "react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductCard from "./ProductCard";
import "./Shop.css";

function Shop() {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();

    const interval = setInterval(fetchProducts, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const itemsPerPage = 12;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageProducts = products.slice(start, end);

  return (
    <>
      <Navbar />

      <div className="woocommerce-breadcrumb container mt-5 pt-4">
        <Link to="/" className="text-decoration-none text-muted">
          Home
        </Link>
        <span className="text-muted">&nbsp;/&nbsp;</span>
        <span className="text-dark fw-semibold">Shop</span>
      </div>

      <h1
        className="woocommerce-products-header__title page-title my-4 container"
        style={{ fontSize: "50px" }}
      >
        SHOP
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
                  data-bs-toggle="dropdown"
                >
                  Default sorting
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">Low to High</button>
                  </li>
                  <li>
                    <button className="dropdown-item">High to Low</button>
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
            {pageProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <nav className="woocommerce-pagination mb-5">
        <ul className="pagination justify-content-center">
          {currentPage === 2 && (
            <li className="page-item">
              <Link to="/shop/1" className="page-link">
                ←
              </Link>
            </li>
          )}

          {/* Page 1 */}
          {currentPage === 1 ? (
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
          ) : (
            <li className="page-item">
              <Link to="/shop/1" className="page-link">
                1
              </Link>
            </li>
          )}

          {/* Page 2 */}
          {currentPage === 2 ? (
            <li className="page-item active">
              <span className="page-link">2</span>
            </li>
          ) : (
            <li className="page-item">
              <Link to="/shop/2" className="page-link">
                2
              </Link>
            </li>
          )}

          {currentPage === 1 && (
            <li className="page-item">
              <Link to="/shop/2" className="page-link">
                →
              </Link>
            </li>
          )}
        </ul>
      </nav>

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

export default Shop;
