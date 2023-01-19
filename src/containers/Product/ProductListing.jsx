import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/HelperActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((select) => select);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ProductListing">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
