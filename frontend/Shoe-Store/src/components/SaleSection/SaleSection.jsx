import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import api from "../../api";
import "./Sale.css";

const SaleSection = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const res = await api.get("/products?sale=true");
        setProducts(res.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSaleProducts();
  }, []);

  const handleClick = (product) => {
    const id = product._id || product.id;
    navigate(`/product/${id}`, { state: product });
  };

  return (
    <>
      <Navbar />

      <div className="mt-5 text-center">
        <h1 className="display-3" style={{ fontWeight: "500" }}>
          Sale
        </h1>
      </div>

      <section className="container my-5 mb-2">
        <div className="row g-4">
          <div className="col-md-6">
            <div
              className="promo-box"
              style={{
                backgroundImage:
                  "url('https://paragonfootwear.com/cdn/shop/products/k1012g_tan_1_1.jpg?v=1756716013&width=1920')",
              }}
            >
              <div className="promo-content">
                <h5 className="promo-title-small">Refer a friend</h5>
                <h2 className="promo-title-big">Get 20% OFF</h2>
                <a href="#" className="promo-btn">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="promo-box"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format')",
              }}
            >
              <div className="promo-content">
                <h5 className="promo-title-small">Promotion</h5>
                <h2 className="promo-title-big">Student Discount</h2>
                <a href="#" className="promo-btn">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center" style={{ gap: "80px" }}>
            {products.map((p) => {
              const id = p._id || p.id;
              const image =
                p.images && p.images.length > 0 ? p.images[0] : p.img;

              const price =
                typeof p.price === "number"
                  ? `$${p.price.toFixed(2)}`
                  : p.price;

              const oldPrice =
                typeof p.oldPrice === "number"
                  ? `$${p.oldPrice.toFixed(2)}`
                  : p.old || p.oldPrice;

              return (
                <div key={id} className="col-sm-6 col-md-4 col-lg-3">
                  <div
                    className="card border-0 shadow-sm h-100 product-card"
                    onClick={() => handleClick(p)}
                    style={{ cursor: "pointer" }}
                  >
                    {p.sale && <span className="sale-badge">Sale</span>}

                    <button
                      className="quick-view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(p);
                      }}
                    >
                      Quick View
                    </button>

                    <img
                      src={image}
                      className="card-img-top rounded-3"
                      alt={p.name}
                    />

                    <div className="card-body text-center">
                      <h5 className="fw-semibold">{p.name}</h5>

                      <p>
                        {oldPrice && (
                          <del className="text-muted">{oldPrice}</del>
                        )}{" "}
                        <strong>{price}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-5 py-5 gift-section rounded-4">
        <div className="row align-items-center">
          <div className="col-md-8 d-flex align-items-center gap-3">
            <div className="gift-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-gifts"></i>
            </div>

            <div>
              <h3 className="fw-bold m-0">The best gift</h3>
              <p className="text-muted mb-0">
                Lacus vel sit eu integer leo nec ornare consequat eget dolor
              </p>
            </div>
          </div>

          <div className="col-md-4 text-md-end text-center mt-3 mt-md-0 px-5">
            <a
              href="#"
              className="btn x1 btn-dark px-4 py-2 fw-semibold"
              style={{ borderRadius: "6px" }}
            >
              Shop Gift Card
            </a>
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
};

export default SaleSection;
