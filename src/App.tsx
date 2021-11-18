import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NavBar } from './components/Navbar';
import { useEffect } from 'react';
import { Skills } from './sections/Skills';
import { Organizations } from './sections/Organizations';
import { HorizontalList } from './components/Flex';
import { Timeline } from './sections/Timeline';
import { Table } from './components/Table';
import { Repositories } from './sections/Repositories';
import { BasicInfo } from './sections/BasicInfo';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #2d2e2f;
    color: white;
    font-family: 'Hack', monospace;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  html {
    overflow-y: scroll;
  }
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 18px;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 900px;
  max-width: calc(100vw - 2rem);
  display: flex;
  display: flex;
  margin: 0 1rem;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 10vh;
`;

export const App = () => {

  useEffect(() => {
    if (location.protocol !== 'https:' && !location.href.includes('localhost')) {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
  }, [0]);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Center className="content">
        <ContentWrapper>
          <BasicInfo />
          <Skills />
          <HorizontalList>
            <Organizations />
            <Repositories />
          </HorizontalList>
          <Table header={"Timeline"}>
            <Timeline />
          </Table>
        </ContentWrapper>
      </Center>
      {/* <script defer data-domain="luc.computer" src="https://analytics.lvksh.cloud/js/plausible.js"></script> */}
    </>
  )
};