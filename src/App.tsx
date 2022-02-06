import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { HorizontalList } from './components/Flex';
import { NavBar } from './components/Navbar';
import { BasicInfo } from './sections/BasicInfo';
import { Organizations } from './sections/Organizations';
import { Repositories } from './sections/Repositories';
import { Skills } from './sections/Skills';
import { Profile } from './static/profile';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: var(--color-bg);
    color: var(--color-main);
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
    --color-bg: #2d2e2f;
    --color-main: white;
    --color-alt: #6c6c6c;
  }
  @media print {
    html, body {
      --color-bg: white;
      --color-main: #2d2e2f;
      --color-alt: #6c6c6c;
    }
    :root {
      font-size: 14px;
    }
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
    margin: 0 1rem;
    padding-bottom: 10vh;
    > * {
        margin-bottom: 1rem;
    }
`;

export const App = () => {
    useEffect(() => {
        if (
            location.protocol !== 'https:' &&
            !location.href.includes('localhost')
        ) {
            location.replace(
                `https:${location.href.slice(location.protocol.length)}`
            );
        }
    }, [0]);

    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Center className="content">
                <ContentWrapper>
                    <BasicInfo />
                    <HorizontalList>
                        <Organizations />
                    </HorizontalList>
                    <Repositories />
                    <Skills
                        title="Technologies"
                        set={Profile.technologies}
                        showDescription={true}
                    />
                    <HorizontalList>
                        <Skills title="Tools" set={Profile.tools} />
                        <Skills title="Languages" set={Profile.languages} />
                        <Skills title="Databases" set={Profile.database} />
                    </HorizontalList>
                    {/* <Table header={"Timeline"}>
            <Timeline />
          </Table> */}
                </ContentWrapper>
            </Center>
        </>
    );
};
