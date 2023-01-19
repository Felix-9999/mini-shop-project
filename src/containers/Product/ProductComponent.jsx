import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.css";
const ProductComponent = () => {
  const products = useSelector((select) => select.allReducer.goods);
  return (
    <>
      <div className="parent-div">
        <div className="chilt-div">
          <Splide
            options={{
              type: "loop",
              padding: "5rem",
              gap: "15",
              speed: 3000,
              height: "10%",
              autoplay: true,
              interval: "200",
              pagination: false,
              arrows: false,
              autoWidth: true,
            }}
          >
            {products.map((goods) => (
              <SplideSlide className="sliderDiv" key={goods.id}>
                <Link to={`/product/${goods.id}`}>
                  <img className="goods_parent_image" src={goods.image} />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {products.map((goods) => {
        return (
          <div className="goods_parent_div" key={goods.id}>
            <Link to={`/product/${goods.id}`}>
              <img className="goods_parent_image" src={goods.image} />
              <p className="goods_parent_price">{goods.category}</p>
              <p className="goods_parent_price">{goods.price}$</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
