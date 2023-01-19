import Apis from "../../apis/Apis";
import { ActionTypes } from "../ActionConstants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await Apis.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await Apis.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};
