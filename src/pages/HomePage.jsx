import React from "react";
import styled from "styled-components";
import MobileNavbar from "../components/MobileNavbar";
import QrCodeScanner from "../components/QrCodeScanner";
import Placehoder from "../Portrait_Placeholder.png";

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const onNewScanResult = () => {
    console.log("scan");
  };
  console.log(user);
  return (
    <Container>
      <Appbar>
        <AppBarTitle>
          Welcome, {user.firstName} {user.lastName}
        </AppBarTitle>
      </Appbar>
      <Main>
        <QrCodeScanner
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
        {/* <PlayButton>Play</PlayButton> */}
      </Main>
      <MobileNavbar />
    </Container>
  );
};

export default HomePage;

export const PlayButton = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ff962c;
  border: none;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ff962c;
  margin-bottom: 60px;
`;

const Appbar = styled.div`
  border-bottom: 1px solid #fff;
  padding: 1rem;
  display: flex;
`;

const AppBarTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

const Main = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  border: 1px solid #ccc;
`;

const PlayerCard = styled.div`
  /* border: 1px solid #fff; */
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: none;
  background-color: #ff962c;
  box-shadow: -10px 5px 5px #ff962c24;
`;

const PlayerCardHeader = styled.div`
  display: flex;
  border: 1px solid #ccc;
`;

const PlayerCardName = styled.div`
  border: 1px solid #ccc;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerCardImageContainer = styled.div`
  /* border: 1px solid #fff; */
  overflow: none;
  /* border-radius: 10px; */
  /* padding: 5px; */
  img {
    border-radius: 50%;
    max-width: 96px;
    max-height: 66px;
    object-fit: cover;
  }
`;

const PlayerCardInfoContainer = styled.div`
  /* border: 1px solid #fff; */
  width: 100%;
  color: #fff;
`;

const LatestNewsSection = styled.div`
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionHeader = styled.div`
  font-size: 24px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const SectionMainArea = styled.div`
  display: flex;
  /* width: 100%; */
  /* border: 1px solid #ccc; */
  gap: 1rem;
  overflow-x: scroll;
`;

const NewsCard = styled.div`
  min-height: 200px;
  min-width: 200px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
