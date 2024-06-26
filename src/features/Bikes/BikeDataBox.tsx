/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styled from "styled-components";
import { format} from "date-fns";
import Heading from "../../UI/Heading";
import { HiOutlineHomeModern } from "react-icons/hi2";

const StyledBikeDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;
const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    color: #e0e7ff;
    font-size: 2.2rem;
  }

  & span:last-child {
    color: #e0e7ff;
    font-size: 1.2rem;
  }
`;

// const Theft = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.2rem;
//   margin-bottom: 1.6rem;
//   color: var(--color-grey-500);

//   & p:first-of-type {
//     font-weight: 500;
//     color: var(--color-grey-700);
//   }
// `;

// const Footer = styled.footer`
//   padding: 1.6rem 4rem;
//   font-size: 1.2rem;
//   color: var(--color-grey-500);
//   text-align: right;
// `;

// A purely presentational component
function BikeDataBox({ bike: bike }: any) {
  console.log(bike);
  return (
    <StyledBikeDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {"Bike Name  -->"} <span>{bike.title}</span>
          </p>
        </div>
        <Stacked >
          <span> Date of the theft </span>
          <span>
            {format(new Date(bike.date_stolen), "MMM/ dd/ yyyy")}
          </span>
          <span>
            {format(new Date(bike.date_stolen), "aa  hh: mm")}
          </span>
        </Stacked>
        <Stacked >
          <span> Date of reported </span>
          <span>
            {format(new Date(bike.registration_created_at), "MMM/ dd/ yyyy")}
          </span>
          <span>
            {format(new Date(bike.registration_created_at), "aa  hh: mm")}
          </span>
        </Stacked>
      </Header>
      <StyledLayout>
        <Section>
          {bike.name&&<Section>
            <Heading as={"h2"}> Name </Heading>
            <p>
              {bike.name}
            </p>
          </Section>}
          {bike.description&&
          <Section>
            <Heading as={"h2"}> Describtion </Heading>
            <p>
              {" "}
              {bike.description}
            </p>
          </Section>}
          {bike.frame_colors&&<Section>
            <Heading as={"h2"}> Colors </Heading>
            <p>
              {" "}
              {bike.frame_colors}
            </p>
          </Section>}

          {bike.location_found&&<Section>
            <p>
              <Heading as={"h2"}> Location of the theft </Heading>
              <p>
                {bike.location_found}
              </p>
            </p>
          </Section>}

          {bike.stolen_location&&<Section>
            <p>
              <Heading as={"h2"}> Location stolen </Heading>
              <p>
                {bike.stolen_location}
              </p>
            </p>
          </Section>}
        </Section>
        <Section>
          {bike.large_img ? (
            <img src={bike.large_img}></img>
          ) : (
            <img
              src={
                "https://static.vecteezy.com/system/resources/previews/002/427/812/original/simple-bike-line-outline-icon-illustration-flat-design-vector.jpg"
              }
            ></img>
          )}
        </Section>
      </StyledLayout>
    </StyledBikeDataBox>
  );
}

export default BikeDataBox;
