import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const path = useLocation();
  console.log(path.pathname);

  return (
    <Container>
      {/* <NavItem to="/">
        <NavIcon>
          <AiFillHome />
        </NavIcon>
        <NavLabel>Home</NavLabel>
      </NavItem> */}
      <NavItem to="/ranking">
        <NavIcon>
          <GiRank3 />
        </NavIcon>
        <NavLabel>Ranking</NavLabel>
      </NavItem>
      <FAB to={"/"}>
        <FABInner>
          <FaGamepad size={40} />
        </FABInner>
      </FAB>
      {/* <NavItem to="">
        <NavIcon>
          <FaGamepad />
        </NavIcon>
        <NavLabel>Arcades</NavLabel>
      </NavItem> */}
      <NavItem to={"/prizes"}>
        <NavIcon>
          <BsGift />
        </NavIcon>
        <NavLabel>Prizes</NavLabel>
      </NavItem>
    </Container>
  );
};

export default MobileNavbar;

const FAB = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* background-color: red; */
  background-color: #331f49;
  position: fixed;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FABInner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  /* bottom: 40px; */
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  /* position: sticky; */
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #000000;
  /* flex: 1; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* padding: 10px; */
`;
const NavIcon = styled.div`
  font-size: 28px;
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavLabel = styled.div`
  font-size: 16px;
  /* border: 1px solid black; */
  width: 100%;
  text-align: center;
`;
