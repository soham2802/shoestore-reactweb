import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const id = product._id || product.id;

  const image =
    product.img ||
    (product.images && product.images.length > 0
      ? product.images[0]
      : "/src/assets/placeholder.png");

  const isSale = product.sale || product.oldPrice;

  const price = product.price ? `$${Number(product.price).toFixed(2)}` : "";

  const oldPrice = product.oldPrice
    ? `$${Number(product.oldPrice).toFixed(2)}`
    : null;

  const goToDetails = () => {
    navigate(`/product/${id}`, { state: product });
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div
        className="card border-0 shadow-sm h-100 product-card"
        style={{ cursor: "pointer" }}
        onClick={goToDetails}
      >
        {isSale && <span className="sale-badge">Sale</span>}

        <button
          className="quick-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            goToDetails();
          }}
        >
          Quick View
        </button>

        <img
          src={image}
          alt={product.name}
          className="card-img-top rounded-3"
          style={{ objectFit: "cover", height: "320px" }}
        />

        <div className="card-body">
          <p className="card-text fw-semibold">{product.name}</p>

          {isSale ? (
            <p className="card-text">
              {oldPrice && <del className="text-muted">{oldPrice}</del>}{" "}
              <span className="text-dark fw-bold">{price}</span>
            </p>
          ) : (
            <p className="card-text text-muted">{price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
