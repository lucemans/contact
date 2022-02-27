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
    --font-fallback: monospace;
    --font-body: 'Hack', var(--font-fallback);
    --font-mono: 'Hack', var(--font-fallback);

    --user-font-scale: 1rem - 16px;
    --max-width: calc(100% - 2rem);
    font-size: 18px;

    --color-gray: #2d2e2f;
    --color-white: #fff;
    --color-text-white: #c8c8c8;
    --color-offwhite: #686868;
    --color-almost-black: #121212;
    --color-black: #000;
    --color-pink: #ff43ac;
    --color-pink-alt: #ff81ba;
    --color-blue: #299bfd;
    --color-blue-alt: #59b8ff;
    --color-red: #ff5459;
    --color-yellow: #ffb85e;
    --color-yellow-alt: #ffcd8c;
    --color-green: #8dffde;

    --theme-round: 4px;

    background: transparent;
  }
  :root {
    font-size: 16px;
    --theme-bg: var(--color-almost-black);
    --theme-text-main: var(--color-white);
    --theme-text-post: var(--color-text-white);
    --theme-text-alt: var(--color-offwhite);
    --theme-link: var(--color-blue);
    --theme-code-border: 1px solid white;
    --theme-code-inline: var(--color-pink);
    --theme-person-link: var(--color-pink);
    --theme-person-bg: var(--color-almost-black);
    --theme-person-border: var(--color-white);
    --theme-person-highlight: rgba(255,255,255,0.1);
    --theme-line-color: #686868;

    --theme-bg-hover: var(--color-offwhite);
    --theme-bg-focus: var(--color-offwhite);

    --color-bg: var(--theme-bg);
    --color-main: var(--theme-text-main);
    --color-alt: var(--theme-text-alt);
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
        margin-bottom: 2rem;
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
