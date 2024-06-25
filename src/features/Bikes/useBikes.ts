import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBikes as getBikes } from "../../service/apiBikes";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBikes() {
  const [searchParams] = useSearchParams();
  const queryCleint = useQueryClient();
  //Filter
  const filter = !searchParams.get("status")?"all":searchParams.get("status");
  console.log(filter);
  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  console.log(getBikes({ filter, page }));
  const {
    isLoading,
    data: { data: bikes, count } = {},
    error,
  } = useQuery({
    queryKey: ["Bikes", filter,  page],
    queryFn: () => getBikes({ filter, page }),
  });
  //PRE-FETCHING
  console.log(count);
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryCleint.prefetchQuery({
      queryKey: ["Bikes", filter, page + 1],
      queryFn: () => getBikes({ filter, page: page + 1 }),
    });
  if (page > 1)
    queryCleint.prefetchQuery({
      queryKey: ["Bikes", filter, page - 1],
      queryFn: () => getBikes({ filter, page: page - 1 }),
    });
  return { isLoading, error, bikes, count };
}
