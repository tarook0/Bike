import { useQuery } from "@tanstack/react-query";
import { getBike } from "../../service/apiBikes";
import { useParams } from "react-router-dom";

export function useBike() {
  const { bikeId } = useParams();
  console.log(getBike(bikeId));
  const {
    isLoading,
    data: {data:bike}={},
    error,
  } = useQuery({
    queryKey: ["bike", bikeId],
    queryFn: () => getBike(bikeId),
    retry: false,
  });

  return { isLoading, error, bike };
}
