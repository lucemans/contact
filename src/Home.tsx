import { FC } from 'react';
import styled from 'styled-components';

import { HorizontalList } from './components/Flex';
import { BasicInfo } from './sections/BasicInfo';
import { Contributions } from './sections/Contributions';
import { Organizations } from './sections/Organizations';
import { Repositories } from './sections/Repositories';
import { Skills } from './sections/Skills';
import { Profile } from './static/profile';

const ContentWrapper = styled.div`
    width: 900px;
    max-width: calc(100vw - 2rem);
    margin: 0 1rem;
    padding-bottom: 10vh;
    > * {
        margin-bottom: 2rem;
    }
`;

export const HomePage: FC = () => {
    return (
        <ContentWrapper>
            <BasicInfo />
            <HorizontalList>
                <Organizations />
            </HorizontalList>
            <Repositories />
            <Contributions />
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
    );
};
