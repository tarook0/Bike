
import Table from "../../UI/Table";
import Menus from "../../UI/Menus";
import Empty from "../../UI/Empty";
import Spinner from "../../UI/Spinner";
import Pagination from "../../UI/Pagination";
import BikeRow from "./BikeRow";
import { useBikes } from "./useBookings";

function BikeTable() {
  const {  bikes, isLoading, count } = useBikes();
  console.log(bikes);
  if (isLoading) return <Spinner />;
  if (!bikes.length) {
    return <Empty resource={"Bikes "} />;
  }
  return (
    <Menus>
      <Table columns="1.6fr 2fr 2.4fr 1.4fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Image</div>
          <div>title</div>
          <div>Location</div>
          <div>Time</div>
          <div>Serial</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bikes}
          render={(bike) => (
            <BikeRow key={bike.id} bike={bike} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BikeTable;
