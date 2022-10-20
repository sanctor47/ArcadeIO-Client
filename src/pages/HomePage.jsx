import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobileNavbar from "../components/MobileNavbar";
import { GiPunch } from "react-icons/gi";
import QrCodeScanner from "../components/QrCodeScanner";
import Placehoder from "../Portrait_Placeholder.png";
import { useNavigate } from "react-router-dom";
const httpClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/",
});
const HomePage = () => {
  const [data, setData] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const nav = useNavigate();
  // console.log(user);
  const getUserData = async () => {
    try {
      const response = await httpClient.get(`users/id/${user._id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log("Req Error:", error.message);
      // setReqError(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const getPlayerHighScore = async () => {
      try {
        if (data.gamesPlayed.length > 0) {
          const response = await httpClient.get(
            `playerHighScores/id/${user._id}`
          );
        }
      } catch (error) {}
    };
    getPlayerHighScore();
  }, [data]);

  return (
    <Container>
      {data ? (
        <>
          <Appbar>
            <AppBarTitle>
              Welcome, {data.firstName} {data.lastName}
            </AppBarTitle>
          </Appbar>
          <Main>
            <TagLine>
              <PlayerScore>Your Score: 200</PlayerScore>
              <RankLine>Rank: 12</RankLine>
            </TagLine>
            {/* <PlayButton>Play Now</PlayButton> */}
            <button class="button" onClick={()=>nav('/scan')}></button>
            <div className="title">Games Played</div>
            <GamesPlayedSection>
              {data.gamesPlayed.length > 0 ? (
                <>
                  <GamePlayed>
                    <div className="iconArea">
                      <GiPunch />
                    </div>
                    <div className="gameName">{data.gamesPlayed[0].name}</div>
                  </GamePlayed>
                  <GamePlayed>{JSON.stringify(data.gamesPlayed[0])}</GamePlayed>
                </>
              ) : (
                <h1>No Games Played</h1>
              )}
            </GamesPlayedSection>
          </Main>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <MobileNavbar />
    </Container>
  );
};

export default HomePage;

const GamePlayed = styled.div`
  width: 100%;
  min-width: 220px;
  height: 320px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
`;

const GamesPlayedSection = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-y: scroll;
  margin-bottom: 70px;
`;

const TagLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayerScore = styled.div`
  /* font- */
`;

const RankLine = styled.div``;

// const Badge = styled.div`

// `

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
`;

const Appbar = styled.div`
  border-bottom: 1px solid #fff;
  padding: 1rem;
  display: flex;
`;

const AppBarTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

const Main = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  .title {
    font-size: 32px;
  }
  /* border: 1px solid #ccc; */
  .button {
    position: relative;
    border: 5px solid #f00;
    border-radius: 50%;
    background-color: #1eff5b;
    height: 200px;
    width: 200px;
    margin-left: 0.5px;
    margin-right: 0.5px;
    margin-top: 0.5px;
    margin-bottom: 0.5px;
  }
  /* .button:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: -0px;
    left: -11px;
    right: 5px;
    bottom: 87px;
    border: 56px solid #252523;
    border-radius: 50%;
  } */
`;

const PlayerCard = styled.div`
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: none;
  background-color: #ff962c;
  color: white;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionHeader = styled.div`
  font-size: 24px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
`;

const SectionMainArea = styled.div`
  display: flex;
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
