// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled from "styled-components";
import Row from "../../UI/Row";
import Heading from "../../UI/Heading";
import Tag from "../../UI/Tag";
import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../UI/Spinner";
import { useBike } from "./useBike";
import ButtonGroup from "../../UI/ButtonGroup";
import Button from "../../UI/Button";
import ButtonText from "../../UI/ButtonText";
import BikeDataBox from "./BikeDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BikeDetail() {
  const { bike, isLoading } = useBike();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const { status, id: bikeId } = bike;
  console.log(bike);
  const statusToTagName : Record<string, string> = {
    "found": "green",
    "stolen": "red",
    "with owner":"blue",
  };

  return (
    <>
      <Row $type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Bike ID  <Tag $type={'silver'}>#{bikeId}</Tag>
          <Tag $type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
          </Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BikeDataBox bike={bike}/>

      <ButtonGroup>
      

        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BikeDetail;
