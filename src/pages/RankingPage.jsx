import React from 'react'
import MobileNavbar from '../components/MobileNavbar';
import styled from 'styled-components';
const RankingPage = () => {
  return (
    <Container>
        <MobileNavbar/>
    </Container>
  )
}

export default RankingPage

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ff962c;
  margin-bottom: 60px;
`;