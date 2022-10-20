import React, { useEffect, useState } from "react";
import MobileNavbar from "../components/MobileNavbar";
import styled from "styled-components";
import { BiCrown } from "react-icons/bi";
import axios from "axios";
import { GiPunch } from "react-icons/gi";
const httpClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/",
});

const RankingPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [reqError, setReqError] = useState("");

  const getScores = async () => {
    try {
      const response = await httpClient.get("scores");
      console.log(response.data.data);
    } catch (error) {
      console.log("Req Error:", error.message);
      setReqError(error.message);
    }
  };

  const createLeaderBoardData = () => {
    const scoreboard = [];
    data.forEach((element)=>{
      const dataPoint = {

      }
    })
  };

  useEffect(() => {
    getScores();
  }, []);

  // useEffect(() => {
  //   // getScores();
  // }, [data]);

  return (
    <Container>
      <Appbar>
        <BiCrown size={28} />
        <AppBarTitle>Leader Board</AppBarTitle>
        <BiCrown size={28} />
      </Appbar>
      <FilterArea>
        <FilterButton onClick={() => setFilter("All")}>
          <GiPunch />
          <span>All</span>
        </FilterButton>
        <FilterButton onClick={() => setFilter("Physical")}>
          <GiPunch />
          <span>Physical</span>
        </FilterButton>
        <FilterButton onClick={() => setFilter("IQ")}>
          <GiPunch />
          <span>IQ</span>
        </FilterButton>
        <FilterButton onClick={() => setFilter("Digital")}>
          <GiPunch />
          <span>Digital</span>
        </FilterButton>
      </FilterArea>
      <Main>
        <LeaderBoard>
          <BoardHeader>Leader Board</BoardHeader>
        </LeaderBoard>
      </Main>
      <MobileNavbar />
    </Container>
  );
};

export default RankingPage;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ff962c;
  margin-bottom: 60px;
`;

const Appbar = styled.div`
  border-bottom: 1px solid #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AppBarTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
`;

const Main = styled.div``;

const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LeaderBoard = styled.div``;

const BoardHeader = styled.div``;

const FilterButton = styled.div`
  font-size: 32px;
  background-color: brown;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
  }
`;
