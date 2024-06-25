import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBikes as getBikes } from "../../service/apiBikes";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBikes() {
  const [searchParams] = useSearchParams();
  const queryCleint = useQueryClient();
  //Filter
  const filter = !searchParams.get("status")?"all":searchParams.get("status");
  const search = !searchParams.get("search")?" ":searchParams.get("search");
  console.log(filter);
  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  console.log(getBikes({ filter, page,search}));
  const {
    isLoading,
    data: { data: bikes, count } = {},
    error,
  } = useQuery({
    queryKey: ["bikes", filter,page,search],
    queryFn: () => getBikes({  filter,page,search}),
    
  }
);
  //PRE-FETCHING
  // console.log(count);
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryCleint.prefetchQuery({
      queryKey: ["bikes", filter, page + 1,search],
      queryFn: () => getBikes({ filter, page: page + 1,search }),
    });
  if (page > 1)
    queryCleint.prefetchQuery({
      queryKey: ["bikes", filter, page - 1,search],
      queryFn: () => getBikes({ filter, page: page - 1,search }),
    });
  return { isLoading, error, bikes, count };
}
