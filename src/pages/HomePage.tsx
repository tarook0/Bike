import BikeTable from "../features/Bikes/BikeTable";
import BikeTableOperations from "../features/Bikes/BikeTableOperations";
import Heading from "../UI/Heading";
import Row from "../UI/Row";
function HomePage() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Bikes</Heading>
        <BikeTableOperations/>
      </Row>
      <BikeTable/>
    </>
  );
}

export default HomePage;
