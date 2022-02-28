import { format } from 'date-fns';
import { ArrowRight } from 'react-feather';
import styled from 'styled-components';

import { Table } from '../components/Table';
import { Profile } from '../static/profile';
import { Tags } from '../types/tags.type';
import { getDuration } from '../utils/getDuration';

const RightArrow = styled.div`
    /* margin-right: -50%; */
    opacity: 0;
    transition: 250ms;
    width: 0;
`;

const OrgExternal = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 0.5em;
    &:hover {
        cursor: pointer;
        /* border: 1px solid white; */
        outline: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.2);
        ${RightArrow} {
            opacity: 1;
            width: 2rem;
        }
    }
`;

const OrgEntry = styled.div``;

const OrgIcon = styled.img<{ color: string; standalone?: boolean }>`
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    margin-right: ${({ standalone }) => (standalone ? '' : '1rem')};
    user-select: none;
    background: ${({ color }) => color};
    padding: 0.2rem;
    border-radius: 0.4rem;
`;

const OrgInfo = styled.div`
    flex-grow: 1;
`;

const ListOrgs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const OrgName = styled.div`
    flex-grow: 1;
`;

const OrgDate = styled.div`
    font-size: 0.8rem;
    color: var(--color-alt);
    flex-grow: 0;
    flex-shrink: 0;
    width: fit-content;
`;

const Tag = styled.div<{ color: string }>`
    color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    background: var(--theme-bg);
    padding: 0.5em 0.8em;
    border-radius: 1rem;
    font-size: 0.8em;
    width: fit-content;
`;

const TagContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Organizations = () => {
    return (
        <Table header={'TEAMS'}>
            <ListOrgs>
                {Profile.orgs.map((organization) => (
                    <OrgEntry key={organization.label}>
                        <OrgExternal>
                            <OrgIcon
                                src={organization.image}
                                alt={organization.label + 'logo'}
                                color={organization.color}
                            />
                            <OrgInfo>
                                <OrgName>{organization.label}</OrgName>
                                <OrgDate>
                                    {organization.end_date
                                        ? getDuration(
                                              organization.start_date,
                                              organization.end_date
                                          )
                                        : `Since ${format(
                                              new Date(organization.start_date),
                                              'MMMM yyyy'
                                          )}`}
                                </OrgDate>
                            </OrgInfo>

                            <TagContainer>
                                {organization.tags.map((tag) => (
                                    <Tag color={Tags[tag].color}>
                                        {Tags[tag].label}
                                    </Tag>
                                ))}
                            </TagContainer>
                            <RightArrow>
                                <ArrowRight />
                            </RightArrow>
                        </OrgExternal>
                    </OrgEntry>
                ))}
            </ListOrgs>
        </Table>
    );
};
