import { FETCH_PRODUCTS } from "./constants";
import { getList } from "./api";

export function  fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsLoading());

    return getList()
      .then(data => dispatch(fetchProductsSuccess(data)))
      .catch(() => dispatch(fetchProductsFailure()));
  }
}

export function fetchProductsLoading() {
  return {
    type: FETCH_PRODUCTS
  };
}

export function fetchProductsSuccess(payload) {
  return {
    type: FETCH_PRODUCTS,
    status: "success",
    payload
  };
}

export function fetchProductsFailure() {
  return {
    type: FETCH_PRODUCTS,
    status: "failure",
    payload: []
  };
}
