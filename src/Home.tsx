import { FC } from 'react';
import styled from 'styled-components';

import { HorizontalList } from './components/Flex';
import { BasicInfo } from './sections/BasicInfo';
import { Contributions } from './sections/Contributions';
import { NowLive } from './sections/NowLive';
import { Organizations } from './sections/Organizations';
import { Repositories } from './sections/Repositories';
// import { Skills } from './sections/Skills';
// import { TalkedAt } from './sections/TalkedAt';
// import { Profile } from './static/profile';

const ContentWrapper = styled.div`
    width: 900px;
    max-width: calc(100vw - 2rem);
    /* padding: 0 1rem; */
    padding-bottom: 10vh;
    padding-left: 1rem;
    padding-right: 1rem;
    /* min-height: 100vh; */
    > * {
        margin-bottom: 2rem;
    }
    @media screen and (min-width: 1200px) {
        padding-top: 100px;
    }
`;

export const HomePage: FC = () => {
    return (
        <ContentWrapper>
            <NowLive />
            <BasicInfo />
            <Repositories />
            {/* <TalkedAt /> */}
            <Contributions />
            <HorizontalList>
                <Organizations />
            </HorizontalList>
            {/* <Skills
                title="Technologies"
                set={Profile.technologies}
                showDescription={true}
            /> */}
            {/* <HorizontalList>
                <Skills title="Tools" set={Profile.tools} />
                <Skills title="Languages" set={Profile.languages} />
                <Skills title="Databases" set={Profile.database} />
            </HorizontalList> */}
            {/* <Table header={'Timeline'}>
                <Timeline />
            </Table> */}
        </ContentWrapper>
    );
};
