import { API_ENDPOINT } from "../../config/api";

export function getList() {
  return fetch(`${API_ENDPOINT}/products`)
    .then(res => res.json())
    .then(data => data.products);
}

export function getItem(payload) {
  return fetch(`${API_ENDPOINT}/products/${payload.id}`)
    .then(res => res.json());
}
