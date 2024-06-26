/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL, PAGE_SIZE } from "../utils/constants";

export async function getBikes({ filter, page ,search}:any) {
  const res = await fetch(
    `${API_URL}/search/?` +
      new URLSearchParams({ page: page }) +
      "&" +
      new URLSearchParams({ per_page: `${PAGE_SIZE}` }) +"&"+
      new URLSearchParams({ stolenness: filter })+"&"+
      new URLSearchParams({ query: search })
  );
  const data  = await res.json();
  return { data: data.bikes,count:data?.bikes?.length };
}
export async function getBike(bikeId: string | undefined) {
  const res = await fetch(
    `${API_URL}/bikes/${bikeId}` 
  );
  const data  = await res.json();
  return { data: data.bike };
}
export async function getBikeCount({ filter}:any) {
  const res = await fetch(
    `${API_URL}/search/count?`+
    new URLSearchParams({ stolenness: filter }) 
  );
  const data  = await res.json();
  return { non: data.non,proximity:data.proximity,stolen:data.stolen};
}
