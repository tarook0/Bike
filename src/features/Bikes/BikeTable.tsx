
import Table from "../../UI/Table";
import Menus from "../../UI/Menus";
import Empty from "../../UI/Empty";
import Spinner from "../../UI/Spinner";
import Pagination from "../../UI/Pagination";
import BikeRow from "./BikeRow";
import { useBikes } from "./useBikes";
import { useBikesCount } from "./useBikesCount";
import { useSearchParams } from "react-router-dom";

function BikeTable() {
  const {  bikes, isLoading } = useBikes();
  const [searchParams] = useSearchParams();
  const {  non,stolen} = useBikesCount();
  let count;
  if(searchParams.get("status")==="all"){
    count=Math.max( stolen,non);
  }
  else if(searchParams.get("status")==="non"){
    count=non;
  }
  else if(searchParams.get("status")==="stolen"){
    count=stolen;
  }
  else {
    count=stolen;
  }
  

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
