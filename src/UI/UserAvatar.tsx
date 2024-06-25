import styled from "styled-components";
const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
function UserAvatar() {
  const {fullName} ="Tarek AlHabbal ";
  return <Avatar src={"/Tarek.jpg"} alt={`Avatar of ${fullName}`}></Avatar>;
}
export default UserAvatar;
