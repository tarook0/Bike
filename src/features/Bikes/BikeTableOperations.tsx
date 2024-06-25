import Filter from "../../UI/Filter";
import TableOperations from "../../UI/TableOperations";

function BikeTableOperations() {
  return (
    <TableOperations>
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
