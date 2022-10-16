import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const path = useLocation();
  console.log(path.pathname);

  return (
    <Container>
      <NavItem to="/">
        <NavIcon>
          <AiFillHome />
        </NavIcon>
        <NavLabel>Home</NavLabel>
      </NavItem>
      <NavItem to="/ranking">
        <NavIcon>
          <GiRank3 />
        </NavIcon>
        <NavLabel>Ranking</NavLabel>
      </NavItem>
      <FAB>
        <FABInner>+</FABInner>
      </FAB>
      <NavItem to="">
        <NavIcon>
          <FaGamepad />
        </NavIcon>
        <NavLabel>Arcades</NavLabel>
      </NavItem>
      <NavItem>
        <NavIcon>
          <AiFillHome />
        </NavIcon>
        <NavLabel>Prizez</NavLabel>
      </NavItem>
    </Container>
  );
};

export default MobileNavbar;

const FAB = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: red;
  position: fixed;
  bottom: 40px;
`;

const FABInner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  position: fixed;
  bottom: 40px;
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
