import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";
import Row from "./Row";
import Button from "./Button";
import { HiSearch } from "react-icons/hi";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setsearchQuery] = useState("");
  useEffect(() => {
    searchParams.set("search", searchQuery);
    setSearchParams(searchParams);
  }, [searchQuery, searchParams, setSearchParams]);

  return (
    <Row type={"horizental"}>
      <Input
        type="text"
        placeholder="Search for a Bike "
        id="search"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
      <Button>
        <HiSearch />
      </Button>
    </Row>
  );
}
