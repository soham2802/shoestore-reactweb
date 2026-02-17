import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearchPlus } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [message, setMessage] = useState("");

  const defaultProduct = {
    id: params.id || 999,
    name: "Women’s Mint Sneaker",
    price: "$89.90",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-600x600.jpg",
    category: "",
    desc: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet.",
  };

  const passedProduct = location.state || null;
  const [product, setProduct] = useState(passedProduct || defaultProduct);

  const productImage =
    product?.img ||
    (Array.isArray(product?.images) && product.images.length > 0
      ? product.images[0]
      : defaultProduct.img);

  useEffect(() => {
    if (passedProduct) {
      setProduct(passedProduct);
    } else if (params.id) {
      setProduct({ ...defaultProduct, id: params.id });
    }
    window.scrollTo(0, 0);
  }, [location.state, params.id]);

  const increment = () => setQty((q) => q + 1);
  const decrement = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productId = product._id || product.id;

    const price =
      typeof product.price === "number"
        ? product.price
        : parseFloat(product.price.replace("$", ""));

    const existing = cart.find((i) => i.id === productId);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: productId,
        text: product.name,
        price,
        img: productImage,
        qty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    setMessage("Product added to cart 🛒");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const relatedProducts = [
    {
      id: 444,
      name: "Women’s Tosca City Run",
      price: "$64.00",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012-400x400.jpg",
    },
    {
      id: 473,
      name: "Women’s Cream Suede",
      price: "$59.90",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-400x400.jpg",
    },
    {
      id: 481,
      name: "Women’s Blue Training",
      price: "$60.00",
      img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg",
    },
  ];

  const openRelatedProduct = (p) => {
    navigate(`/product/${p.id}`, { state: p });
  };

  return (
    <>
      <Navbar />
      <div className={`toast-cart ${message ? "show" : ""}`}>
        <span>✔ {message}</span>
      </div>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row gy-5 product-detail-row mt-1">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="product-image-wrap position-relative">
                <div className="product-image-bg">
                  {(product.img ||
                    (Array.isArray(product.images) &&
                      product.images.length > 0)) && (
                    <img
                      src={product.img ? product.img : product.images[0]}
                      alt={product.name}
                      className="img-fluid product-image zoomable-img"
                      onMouseMove={(e) => {
                        const { left, top, width, height } =
                          e.currentTarget.getBoundingClientRect();

                        const x = ((e.clientX - left) / width) * 100;
                        const y = ((e.clientY - top) / height) * 100;

                        e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
                        e.currentTarget.style.transform = "scale(1.8)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transformOrigin = "center center";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 pt-4">
              <p className="text-muted mb-1 small-caps">
                {Array.isArray(product.categories)
                  ? product.categories.join(", ")
                  : product.category || ""}
              </p>

              <h1 className="product-title">{product.name}</h1>

              <div className="d-flex align-items-baseline gap-3 mb-3 price-row">
                <span className="product-price">
                  {typeof product.price === "number"
                    ? `$${product.price.toFixed(2)}`
                    : product.price}
                </span>
                <span className="product-shipping">&amp; Free Shipping</span>
              </div>

              <p className="product-desc">{product.desc}</p>

              <div className="d-flex align-items-center mt-4 gap-3 flex-wrap">
                <div className="qty-control d-inline-flex align-items-center">
                  <button type="button" className="qty-btn" onClick={decrement}>
                    -
                  </button>

                  <input
                    type="number"
                    className="qty-input"
                    value={qty}
                    min={1}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setQty(isNaN(val) || val < 1 ? 1 : val);
                    }}
                  />

                  <button type="button" className="qty-btn" onClick={increment}>
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="btn add-cart-btn"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
              </div>

              <div className="safe-checkout-box mt-4">
                <p className="safe-checkout-title">Guaranteed Safe Checkout</p>

                <div className="payment-icons">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                    alt="American Express"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                    alt="Discover"
                  />
                </div>
              </div>

              {Array.isArray(product.categories) &&
              product.categories.length > 0 ? (
                <div className="mt-3">
                  <span className="text-muted meta-cats">
                    Categories:{" "}
                    {product.categories.map((cat, index) => (
                      <span key={cat}>
                        <a href="#" className="text-decoration-none">
                          {cat}
                        </a>
                        {index < product.categories.length - 1 && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "description" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "reviews" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews (0)
                </button>
              </li>
            </ul>

            <div className="border border-top-0 p-4 bg-white">
              {activeTab === "description" && (
                <>
                  <p>
                    {product.longDesc ||
                      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus."}
                  </p>
                </>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h5 className="mb-3">Reviews</h5>
                  <p className="text-muted mb-4">There are no reviews yet.</p>
                </div>
              )}
            </div>
          </div>

          <section className="section-margin mt-5">
            <h2 className="h4 mb-4">Related products</h2>

            <div className="row g-5">
              {relatedProducts.map((p) => (
                <div className="col-md-4" key={p.id}>
                  <div className="card border-0 shadow-sm h-100 product-card">
                    <button
                      className="quick-view-btn"
                      onClick={() => openRelatedProduct(p)}
                    >
                      Quick View
                    </button>

                    <img
                      src={p.img}
                      className="card-img-top rounded-3"
                      alt={p.name}
                      style={{ height: "320px", objectFit: "cover" }}
                    />

                    <div className="card-body">
                      <p className="fw-semibold">{p.name}</p>
                      <span className="fw-bold">{p.price}</span>
                    </div>
                  </div>
                </div>
              ))}
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
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
