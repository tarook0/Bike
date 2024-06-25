import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";


export default function Search() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [searchQuery, setsearchQuery] = useState("");
      useEffect(() => {
        searchParams.set("search",searchQuery); 
        setSearchParams(searchParams)
      }, [searchQuery,searchParams,setSearchParams]);

    return (
        <Input
        type="search"
        id="search"
        value={searchQuery}
        onChange={(e)=>setsearchQuery(e.target.value)}
      />
  )
}
