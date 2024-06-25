import styled, { css } from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../UI/Tag";
import Table from "../../UI/Table";
import Modal from "../../UI/Modal";
import ConfirmDelete from "../../UI/ConfirmDelete";
import Menus from "../../UI/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { formatCurrency, formatDistanceFromNow, formatSerialNumber } from "../../utils/helpers";

const BikeTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    ${(props) =>
    props.type === "stolen" &&
    css`
      color: var(--color-red-700);
    `}
  ${(props) =>
    props.type === "found" &&
    css`
      color: var(--color-green-700);
    `}
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

function BikeRow({
  bike: {
     date_stolen,
    description,
    frame_colors,
    frame_model,
    id,
    is_stock_img,
    large_img,
    location_found,
    manufacturer_name,
    external_id,
    registry_name,
    registry_url,
    serial,
    status,
    stolen,
    stolen_coordinates,
    stolen_location,
    thumb,
    title,
    url,
    year,
    propulsion_type_slug,
    cycle_type_slug,
  }
}) {
  const statusToTagName = {
    "found": "green",
    "stolen": "red",
    "with owner":'blue',
  };
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Modal>
      <Img src={large_img}></Img>
        <BikeTitle>{title}</BikeTitle>
        <Stacked type={stolen_location?"stolen":"found"}>
          {stolen_location?<span> STOLEN IN </span>:<span> FOUND IN</span>}
          {stolen_location?<span>  {stolen_location}</span>:<span> {location_found}</span>}
        </Stacked>

<Stacked>
<span>
  {format(new Date(date_stolen), "MMM dd yyyy")}
  </span>
  <span>
  {format(new Date(date_stolen), " h aaa ")} 
  </span>
  </Stacked>
  {(serial==='Hidden'||serial==='Unknown')&&
  <Tag type={'grey'}>{serial}</Tag>}
  {(serial!=='Hidden'&&serial!=='Unknown')&& <Tag type={'indigo'}><Amount>{formatSerialNumber(serial)}</Amount></Tag>}

  <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
{/* 

        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check In
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check Out
              </Menus.Button>
            )}
            <Modal.Open opens={"delete"}>
              <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name={"delete"}>
          <ConfirmDelete
            resourceName={"booking"}
            onConfirm={() => deleteBooking(bookingId)}
            disabled={isDeletingBooking}
          />
        </Modal.Window> */}
      </Modal>
    </Table.Row>
  );
}

export default BikeRow;
