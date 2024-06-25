import Filter from "../../UI/Filter";
import Search from "../../UI/Search";
import TableOperations from "../../UI/TableOperations";

function BikeTableOperations() {
  return (
    <TableOperations>
      <Search/>
      <Filter
        filterField={"status"}
        options={[
          { value: "all", label: "All" },
          { value: "proximity", label: "Proximity" },
          { value: "stolen", label: "Stolen" },
          { value: "non", label: "Non" },
        ]}
      />
      
    </TableOperations>
  );
}

export default BikeTableOperations;
