import { Table } from '../components/Table';
import { FC } from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const Wrapper = styled.div``;

type Talk = {
    name: string;
    conference: string;
    date: string[];
    image: string;
    link: string;
};
const Talks: Talk[] = [
    {
        name: 'Passwordless Authentication with Web3',
        conference: 'React Live',
        date: ['1 April 2022'],
        image: 'https://a.storyblok.com/f/84560/x/66bdd5b6a3/react-live-white-circle.svg/m/',
        link: 'https://reactlive.nl/'
    }
];

const RightArrow = styled.div`
    opacity: 0;
    transition: 250ms;
    width: 0;
`;

const TalkComp = styled.a`
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 0.5em;
    flex-wrap: wrap;
    border: 1px solid transparent;
    color: inherit;
    text-decoration: none;

    &:hover, &:focus {
        cursor: pointer;

        border: 1px solid var(--theme-bg-hover);

        ${RightArrow} {
            opacity: 1;
            width: 2rem;
        }
    }
`;

const ConferenceIcon = styled.img`
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    margin-right: 1rem;
    user-select: none;
    background: ${({ color }) => color};
    padding: 0.2rem;
    border-radius: 0.4rem;
`;

const TalkInfo = styled.div`
    flex: 1;
`;

export const TalkedAt: FC = () => {
    return (
        <Table header="Spoken At" sideHeader={<a href="https://luc.show/" target="_blank" aria-label="List of all Presentations">All</a>}>
            {
                Talks.map((talk) => (
                    <TalkComp href={talk.link} target="_blank">
                        <ConferenceIcon src={talk.image} color="#fff"/>
                        <TalkInfo>
                            <div>{talk.name}</div>
                            <div>{talk.conference}</div>
                        </TalkInfo>

                        <RightArrow>
                            <ArrowRight />
                        </RightArrow>
                    </TalkComp>
                ))
            }
        </Table>
    );
};
