import { FC } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div``;

export const ProjectPage: FC = () => {
    const { project_id } = useParams();

    return <Wrapper>Hi {project_id}</Wrapper>;
};
