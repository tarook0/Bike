import { API_URL, PAGE_SIZE } from "../utils/constants";

export async function getBikes({ filter, page }) {
  const res = await fetch(
    `${API_URL}/search/?` +
      new URLSearchParams({ page: page }) +
      "&" +
      new URLSearchParams({ per_page: PAGE_SIZE }) +"&"+
      new URLSearchParams({ stolenness: filter })
  );
  const data  = await res.json();
  return { data: data.bikes,count:data?.bikes?.length };
}
export async function getBike(bikeId) {
  const res = await fetch(
    `${API_URL}/bikes/${bikeId}` 
  );
  const data  = await res.json();
  return { data: data.bike };
}
