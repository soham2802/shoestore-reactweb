import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";


const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Men’s Black Running",
      price: "$79.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg",
      sale: false,
      oldPrice: "",
    },
    {
      id: 2,
      name: "Women’s Cream Suede",
      price: "$59.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-400x400.jpg",
      sale: false,
      oldPrice: "",
    },
    {
      id: 3,
      name: "Women’s Peach Training",
      price: "$57.90",
      oldPrice: "$69.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg",
      sale: true,
    },
    {
      id: 4,
      name: "Men’s Classic Mint",
      price: "$79.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg",
      sale: false,
    },
    {
      id: 5,
      name: "Women’s Green Training",
      price: "$49.90",
      oldPrice: "$64.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg",
      sale: true,
    },
    {
      id: 6,
      name: "Men’s Red Running",
      price: "$69.90",
      oldPrice: "$79.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg",
      sale: true,
    },
  ];

  const handleProductClick = (product) => {
    navigate("/product", { state: product });
  };

  return (
    <>
      <Navbar />
      {/* ================= HERO SECTION ================= */}
      <section
        className="d-flex align-items-center text-white container"
        style={{
          height: "800px",
          backgroundImage:
            "url('https://websitedemos.net/shoe-store-04/wp-content/uploads/sites/247/2021/03/sports-shoe4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        ></div>

        <div className="container position-relative">
          <h1 className="fw-bold display-3">
            Love the <br /> Planet we <br /> walk on
          </h1>
          <p className="mt-3 fs-5">
            Bibendum fermentum, aenean donec pretium aliquam <br /> blandit
            tempor imperdiet arcu arcu ut nunc in dictum <br /> mauris at ut.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/Men" className="btn btn-light px-4 py-2 fw-semibold">
              SHOP MEN
            </Link>
            <Link to="/Women" className="btn btn-light px-4 py-2 fw-semibold">
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED IN ================= */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            <h6 className="text-uppercase text-secondary mb-0 fw-semibold">
              As seen in:
            </h6>
            {[
              "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg",
              "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg",
              "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg",
              "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg",
              "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Logo ${index + 1}`}
                style={{
                  width: "140px",
                  height: "auto",
                  opacity: "0.9",
                  transition: "opacity 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "0.9")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-5 bg-light mb-5 mt-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-lg-6">
              <h6 className="text-uppercase text-secondary mb-3 fw-semibold">
                About Us
              </h6>
              <h2 className="fw-bold mb-4 lh-base">
                Selected materials designed for comfort and sustainability
              </h2>
              <p className="text-muted mb-4 fs-5 lh-lg">
                Nullam auctor faucibus ridiculus dignissim sed et auctor sed
                eget auctor nec sed elit nunc, magna non urna amet ac neque ut
                quam enim pretium risus gravida ullamcorper adipiscing at ut
                magna.
              </p>
              <a href="#" className="btn btn-dark px-4 py-2">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW SHOES ARE MADE ================= */}
      <section className="py-5 bg-light text-dark mb-5 mt-5">
        <div className="container text-center bg-light">
          <h2 className="fw-bold mb-3">See how your shoes are made</h2>
          <p
            className="text-muted mx-auto mb-5"
            style={{ maxWidth: "700px", fontSize: "1.05rem" }}
          >
            Urna, felis enim orci accumsan urna blandit egestas mattis egestas
            feugiat viverra ornare donec adipiscing semper aliquet integer risus
            leo volutpat nulla enim ultrices.
          </p>

          <div className="row align-items-center justify-content-center">
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
                <hr style={{ width: "50%", marginLeft: "0" }} />
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

            <div
              className="col-md-4 position-cover text-center align-items-center d-flex flex-wrap d-inline-block"
              style={{ verticalAlign: "middle" }}
            >
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
                alt="Shoe process"
                className="img"
                style={{ maxWidth: "500px" }}
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
                <hr style={{ width: "50%", marginLeft: "auto" }} />
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
      {/* ================= OUR BEST SELLER ================= */}
      <section className="best-sellers py-5 bg-light">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h4 className="fw mb-3">Our Best Seller</h4>
            <a
              href="#"
              className="btn btn-sm rounded-pill"
              style={{ fontSize: "16px" }}
            >
              View All Best Sellers
            </a>
          </div>

          <div className="row g-5">
            {[
              {
                id: 1,
                name: "Men’s Black Running",
                price: "$79.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg",
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-600x600.jpg",
                ],
              },
              {
                id: 2,
                name: "Women’s Cream Suede",
                price: "$59.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-400x400.jpg",
                ],
              },
              {
                id: 3,
                name: "Women’s Peach Training",
                price: "$57.90",
                oldPrice: "$69.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg",
                ],
              },
              {
                id: 4,
                name: "Men’s Classic Mint",
                price: "$79.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg",
                ],
              },
              {
                id: 5,
                name: "Women’s Green Training",
                price: "$49.90",
                oldPrice: "$64.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg",
                ],
              },
              {
                id: 6,
                name: "Men’s Red Running",
                price: "$69.90",
                oldPrice: "$79.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg",
                ],
              },
            ].map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4">
                <div
                  className="card h-100 text-center border-0 shadow-sm rounded-4"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/product/${product.id}`, { state: product })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/product/${product.id}`, { state: product });
                    }
                  }}
                >
                  <div className="position-relative">
                    {product.sale && <span className="sale-badge">Sale</span>}

                    {Array.isArray(product.images) &&
                      product.images.length > 0 && (
                        <img
                          src={product.images[0]}
                          className="card-img-top"
                          alt={product.name}
                        />
                      )}
                  </div>

                  <div className="card-body">
                    <h6
                      className="card-title mb-2"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      {product.name}
                    </h6>

                    <p
                      className="card-text fw-bold mb-0"
                      style={{ opacity: "0.7" }}
                    >
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          {product.oldPrice}
                        </span>
                      )}
                      {product.price}
                    </p>

                    <button
                      className="btn btn-outline-secondary btn-sm mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product.id}`, { state: product });
                      }}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ CATEGORY SECTION (MEN & WOMEN) ================ */}
      <section className="py-5 bg-light mt-5">
      <div className="container">
        <div className="row g-5">
          {/* MEN */}
          <div className="col-12 col-md-6">
            <div
              className="rounded-4 position-relative text-white d-flex justify-content-center align-items-center"
              style={{
                height: "600px",
                background: "url('/Images/feet.jpg') center/cover",
                overflow: "hidden",
                transition: "0.35s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() => navigate("/men")}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: "rgba(0,0,0,0.45)" }}
              ></div>

              <div className="position-relative text-center">
                <h2 className="fw-bold" style={{ fontSize: "42px" }}>
                  Men
                </h2>
                <button
                  className="btn btn-outline-light rounded-0 px-4 py-2 mt-3"
                  style={{
                    letterSpacing: "2px",
                    borderWidth: "2px",
                    fontWeight: "bold",
                  }}
                >
                  SHOP MEN
                </button>
              </div>
            </div>
          </div>

          {/* WOMEN */}
          <div className="col-12 col-md-6">
            <div
              className="rounded-4 position-relative text-white d-flex justify-content-center align-items-center"
              style={{
                height: "600px",
                background:
                  "url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de') center/cover",
                overflow: "hidden",
                transition: "0.35s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() => navigate("/women")}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: "rgba(0,0,0,0.45)" }}
              ></div>

              <div className="position-relative text-center">
                <h2 className="fw-bold" style={{ fontSize: "42px" }}>
                  Women
                </h2>
                <button
                  className="btn btn-outline-light rounded-0 px-4 py-2 mt-3"
                  style={{
                    letterSpacing: "2px",
                    borderWidth: "2px",
                    fontWeight: "bold",
                  }}
                >
                  SHOP WOMEN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* =============== NEW ARRIVALS =============== */}
      <section className="py-5 bg-light mt-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-3">New Arrivals</h4>
            <a
              href="#"
              className="btn btn-sm rounded-pill"
              style={{ fontSize: "16px" }}
            >
              View all new arrivals
            </a>
          </div>

          <div className="row g-5">
            {[
              {
                id: 101,
                name: "Men’s Navy Running",
                price: "$104.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-600x600.jpg",
                ],
              },
              {
                id: 102,
                name: "Men’s Green Running",
                price: "$89.90",
                oldPrice: "$104.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg",
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-600x600.jpg",
                ],
              },
              {
                id: 103,
                name: "Women’s Tan Sneaker",
                price: "$80.00",
                oldPrice: "$89.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg",
                ],
              },
              {
                id: 104,
                name: "Women’s Mint Sneaker",
                price: "$89.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-400x400.jpg",
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
                ],
              },
              {
                id: 105,
                name: "Women’s Peach Training",
                price: "$57.90",
                oldPrice: "$69.90",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg",
                ],
              },
              {
                id: 106,
                name: "Men’s Earth-Tone Sneaker",
                price: "$74.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg",
                ],
              },
              {
                id: 107,
                name: "Men’s MoonStone Sneaker",
                price: "$74.90",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-600x600.jpg",
                ],
              },
              {
                id: 108,
                name: "Women’s Blue Training",
                price: "$60.00",
                sale: false,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-600x600.jpg",
                ],
              },
              {
                id: 109,
                name: "Women’s Candy City Run",
                price: "$40.00",
                oldPrice: "$54.00",
                sale: true,
                images: [
                  "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-600x600.jpg",
                ],
              },
            ].map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4">
                <div
                  className="card h-100 border-0 shadow-sm text-center rounded-3"
                  role="button"
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/product/${product.id}`, { state: product })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/product/${product.id}`, { state: product });
                    }
                  }}
                >
                  <div className="position-relative">
                    {product.sale && <span className="sale-badge">Sale</span>}

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="card-img-top"
                    />
                  </div>

                  <div className="card-body">
                    <h6 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                      {product.name}
                    </h6>

                    <p className="fw-bold mb-0" style={{ opacity: 0.7 }}>
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          {product.oldPrice}
                        </span>
                      )}
                      {product.price}
                    </p>

                    <button
                      className="btn btn-outline-secondary btn-sm mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/${product.id}`, { state: product });
                      }}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-5 container mt-5 mb-5"
        style={{ backgroundColor: "#F1F1EF" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                  color: "#979A9B",
                }}
              >
                Eu eget felis erat mauris aliquam mattis lacus, <br />
                arcu leo aliquam sapien pulvinar laoreet vulputate <br /> sem
                aliquet phasellus egestas felis, est, vulputate <br /> morbi
                massa mauris vestibulum dui odio.
              </p>

              <div className="d-flex flex-wrap gap-5 mt-5 mb-2">
                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
                  width="100"
                  alt="badge"
                />

                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
                  width="100"
                  alt="badge"
                />

                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
                  width="100"
                  alt="badge"
                />
              </div>
            </div>

            <div className="col-md-6 text-center mb-2 py-5">
              <img
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg"
                className="img-fluid rounded-circle "
                alt="eco"
                style={{
                  maxWidth: "350px",
                  borderStyle: "dashed",
                  borderColor: "#6E7051",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUSTOMERS TESTIMONIAL SECTION ================= */}

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="mb-5">Our Customers speak for us</h1>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="mb-3 text-warning fs-4">
                  {"★".repeat(4)}
                  {"☆"}
                  <span className="ms-2 text-dark small">4.8/5</span>
                </div>

                <p className="text-muted fst-italic mb-4">
                  “Felis semper duis massa scelerisque ac amet porttitor ac
                  tellus venenatis aliquam varius mauris integer”
                </p>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
                    alt="Julia Keys"
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <h6 className="fw-semibold mb-0">Julia Keys</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="mb-3 text-warning fs-4">
                  {"★".repeat(4)}
                  {"☆"}
                  <span className="ms-2 text-dark small">4.8/5</span>
                </div>

                <p className="text-muted fst-italic mb-4">
                  “Non malesuada fringilla non varius odio in id pellentesque
                  aliquam volutpat sapien faucibus”
                </p>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg"
                    alt="Luis Adrian"
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <h6 className="fw-semibold mb-0">Luis Adrian</h6>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <div className="mb-3 text-warning fs-4">
                  {"★".repeat(4)}
                  {"☆"}
                  <span className="ms-2 text-dark small">4.8/5</span>
                </div>

                <p className="text-muted fst-italic mb-4">
                  “Tortor suspendisse tincidunt accumsan platea pellentesque
                  hac.”
                </p>

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg"
                    alt="Maria Anna"
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <h6 className="fw-semibold mb-0">Maria Anna</h6>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-5 text-muted fw-semibold fs-5"
            style={{ opacity: "0.7" }}
          >
            4.8 average rating from 1814 reviews
          </div>
        </div>
      </section>

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
              fontWeight: "5/00",
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

      <section className="py-4  pt-5 bg-light">
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

export default Home;
