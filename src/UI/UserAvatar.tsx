import styled from "styled-components";
const Avatar = styled.img`
  display: block;
  margin-left: 2rem;
  width: 4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
const Stacked = styled.div<{ $type?: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
    justify-items: center;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;
function UserAvatar() {
  const fullName = "Tarek AlHabbal";
  return (
    <>
      <Stacked>
        <span>
          <Avatar src={"/Tarek.jpg"} alt={`Avatar of ${fullName}`} />
        </span>
        <span>
          {"Tarek AlHabbal"}
        </span>
      </Stacked>
    </>
  );
}
export default UserAvatar;
