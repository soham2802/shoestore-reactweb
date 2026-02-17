import React, { useEffect, useState } from "react";
import { FiUser, FiShoppingBag, FiLogOut } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    const username = localStorage.getItem("username") || "User";

    alert(`${username} logged out successfully ✅`);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    window.dispatchEvent(new Event("storage"));
    setShowUserMenu(false);
    navigate("/");
  };

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <>
      <p className="text-center bg-light py-2 small text-muted m-0">
        Free Express Shipping on all orders with all duties included
      </p>

      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-4">
        <div className="container">
          <span
            className="navbar-brand fw-bold fs-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            PLASH
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul
              className="navbar-nav gap-3 me-auto"
              style={{ cursor: "pointer" }}
            >
              <li className="nav-link" onClick={() => navigate("/men")}>
                MEN
              </li>
              <li className="nav-link" onClick={() => navigate("/women")}>
                WOMEN
              </li>
              <li className="nav-link" onClick={() => navigate("/shop")}>
                COLLECTION
              </li>
              <li className="nav-link" onClick={() => navigate("/lookbook")}>
                LOOKBOOK
              </li>
              <li className="nav-link" onClick={() => navigate("/salesection")}>
                SALE
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 position-relative">
              <span
                className="d-none d-lg-block text-muted"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/ourstory")}
              >
                OUR STORY
              </span>

              <span
                className="d-none d-lg-block text-muted"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/contact")}
              >
                CONTACT
              </span>

              <div
                className="position-relative fs-4"
                style={{ cursor: "pointer" }}
                onClick={() => setShowCart(true)}
              >
                <FiShoppingBag />
                {cartCount > 0 && (
                  <span className="badge bg-dark position-absolute top-0 start-100 translate-middle">
                    {cartCount}
                  </span>
                )}
              </div>

              <div className="position-relative">
                <div
                  className="fs-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <FiUser />
                </div>

                {showUserMenu && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2 shadow">
                    {!isLoggedIn ? (
                      <>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setShowUserMenu(false);
                            navigate("/login");
                          }}
                        >
                          Login
                        </button>

                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setShowUserMenu(false);
                            navigate("/orders");
                          }}
                        >
                          My Orders
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setShowUserMenu(false);
                            navigate("/profile");
                          }}
                        >
                          Profile
                        </button>

                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setShowUserMenu(false);
                            navigate("/orders");
                          }}
                        >
                          My Orders
                        </button>

                        <div className="dropdown-divider"></div>

                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          <FiLogOut className="me-2" />
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Navbar;
