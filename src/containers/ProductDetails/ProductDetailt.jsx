import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/actions/HelperActions";
import "./ProductDetailt.css";
// import ReactImageMagnify from "react-image-magnify";

const ProductDetailt = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = useSelector((select) => select.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);
  return (
    <div className="Detailt-parent-div" key={product.id}>
      <div className="text-div">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt="img" className="imgss" />
        <button onClick={() => navigate(-1)} class="go-back">
          --GO BACK--
        </button>
      </div>
    </div>
  );
};

export default ProductDetailt;
{
}
