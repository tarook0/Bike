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

      <BikeDataBox bike={bike} date_stolen={undefined} description={undefined} frame_colors={[]} frame_model={undefined} id={0} is_stock_img={false} large_img={undefined} location_found={undefined} manufacturer_name={""} external_id={undefined} registry_name={undefined} registry_url={undefined} serial={""} status={""} stolen={false} stolen_coordinates={undefined} stolen_location={undefined} thumb={undefined} title={""} url={""} year={undefined} propulsion_type_slug={""} cycle_type_slug={""} registration_created_at={0} registration_updated_at={0} api_url={""} manufacturer_id={0} paint_description={undefined} name={undefined} frame_size={""} rear_tire_narrow={false} front_tire_narrow={false} type_of_cycle={""} test_bike={false} rear_wheel_size_iso_bsd={0} front_wheel_size_iso_bsd={0} handlebar_type_slug={undefined} frame_material_slug={undefined} front_gear_type_slug={undefined} rear_gear_type_slug={undefined} extra_registration_number={undefined} additional_registration={undefined} stolen_record={undefined} public_images={[]} components={[]} />

      <ButtonGroup>
      

        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BikeDetail;
