import React, { FC, useMemo, useState } from 'react';
import { Profile } from '../static/profile';
import styled from 'styled-components';
import { Organization } from 'types/organization.type';
import { getMonthName } from '../utils/getMonthName';

const Wrapper = styled.div`
`;

const Line = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
    > * {
        padding-top: 3rem;
        margin-bottom: 2rem;
    }
    @media screen and (max-width: 765px) {
        flex-direction: column;
        height: 600px;
        > * {
            padding-right: 0;
            width: calc(100% - 5.5rem);
            margin-left: 5rem;
            padding-top: 0;
            margin-bottom: 0;
        }
    }
`;

const LineEntryBackground = styled.div<{ color: string }>`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: ${({ color }) => color};
    opacity: 0;
`;

const LineEntryContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.2;
    @media screen and (max-width: 765px) {
        bottom: unset;
        left: 0;
    }
`;

const LineEntryStartDate = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0.2;
    @media screen and (max-width: 765px) {
        top: 0;
        left: unset;
        left: 0;
        padding-right: 0.5rem;
        transform: translateX(-100%);
    }
`;

const LineEntryContainerInternal = styled.div`
    opacity: 0;
    display: none;
    gap: 0.2rem;
    align-items: center;
    padding: 0.2rem;
    img {
        width: 2rem;
        height: 2rem;
    }
    a {
        color: var(--color-main);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
const LineEntryContainerExternal = styled.div`
    opacity: 1;
`;

const LineEntryWrapper = styled.div<{ color: string, duration: number }>`
    border-bottom: 1px solid ${(a) => a.color};
    flex: ${({ duration }) => duration};
    position: relative;
    &:hover {
        ${LineEntryBackground} {
            opacity: 0.5;
        }
        ${LineEntryStartDate} {
            opacity: 1;
        }
        ${LineEntryContainer} {
            opacity: 1;
            ${LineEntryContainerInternal} {
                opacity: 1;
                display: flex;
            }
            ${LineEntryContainerExternal} {
                opacity: 0;
                display: none;
            }
        }
    }
    @media print {
        ${LineEntryBackground} {
            opacity: 0.5;
        }
        ${LineEntryStartDate} {
            opacity: 1;
        }
        ${LineEntryContainer} {
            opacity: 1;
            ${LineEntryContainerInternal} {
                opacity: 1;
                display: flex;
            }
            ${LineEntryContainerExternal} {
                opacity: 0;
                display: none;
            }
        }
    }
    @media screen and (max-width: 765px) {
        border-left: 1px solid ${(a) => a.color};
        border-bottom: 0;
        ${LineEntryBackground} {
            opacity: 0.5;
        }
        ${LineEntryStartDate} {
            opacity: 1;
        }
        ${LineEntryContainer} {
            opacity: 1;
            ${LineEntryContainerInternal} {
                opacity: 1;
                display: flex;
            }
            ${LineEntryContainerExternal} {
                opacity: 0;
                display: none;
            }
        }
    }
`;

const LineEntryCorner = styled.div<{ color: string }>`
    height: 1rem;
    width: 1px;
    background: ${({ color }) => color};
    position: absolute;
    top: calc(100% - 0.5rem);
    @media screen and (max-width: 765px) {
        height: 1px;
        width: 1rem;
        top: unset;
        right: calc(100% - 0.5rem);
    }
`;

const LineEntryFinal = styled.div`
    width: 4rem;
    border-bottom: 1px dotted #686868;
    @media screen and (max-width: 765px) {
        height: 4rem;
        width: unset;
        border-bottom: 0;
        border-left: 1px dotted #686868;
    }
`;

const LineEntry: FC<{ org: Organization, totalDuration: number, last: boolean }> = ({ org, totalDuration, last }) => {

    const duration = (Math.ceil(((org.end_date ? new Date(org.end_date) : new Date()).getTime() - new Date(org.start_date).getTime()) / (1000 * 3600 * 24)) * 100) / totalDuration + (last ? 40 : 0);
    const startDate = new Date(org.start_date);

    return (
        <LineEntryWrapper color={org.color} duration={duration}>
            <LineEntryCorner color={org.color} />
            <LineEntryBackground color={org.color} />
            <LineEntryContainer>
                <LineEntryContainerExternal>
                    {org.label}
                </LineEntryContainerExternal>
                <LineEntryContainerInternal>
                    <img src={org.image} alt="" />
                    <a href={org.url} target="_blank">{org.label}</a>
                </LineEntryContainerInternal>
            </LineEntryContainer>
            <LineEntryStartDate>
                {`${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`}
            </LineEntryStartDate>
            <LineEntryCorner color={org.color} />
        </LineEntryWrapper>
    )
}

export const Timeline = () => {

    const totalDuration = useMemo(() => {
        return Profile.orgs.reduce((a, b) => a + Math.ceil(((b.end_date ? new Date(b.end_date) : new Date()).getTime() - new Date(b.start_date).getTime()) / (1000 * 3600 * 24)), 0);
    }, [Profile.orgs]);

    return (
        <Wrapper>
            <Line>
                {
                    Profile.orgs.map((org, i, ar) => (
                        <LineEntry org={org} key={org.label} totalDuration={totalDuration} last={i == ar.length - 1} />
                    ))
                }
                <LineEntryFinal />
            </Line>
        </Wrapper>
    );
};