import { useQuery} from "@tanstack/react-query";
import { getBikeCount  } from "../../service/apiBikes";
import { useSearchParams } from "react-router-dom";

export function useBikesCount() {
  const [searchParams] = useSearchParams();
  //Filter
  const filter = !searchParams.get("status")?"all":searchParams.get("status");
  // console.log(filter);
  console.log(getBikeCount({ filter }))
  const {
    isLoading,
    data:{non,stolen,proximity} = {},
    error,
  } = useQuery({
    queryKey: ["count", filter],
    queryFn: () => getBikeCount({ filter }),
  });
  return { isLoading,error, non, stolen, proximity };
}
