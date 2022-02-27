import { format } from 'date-fns';
import React, { useState } from 'react';
import { Grid, List } from 'react-feather';
import styled from 'styled-components';

import { Table } from '../components/Table';
import { Profile } from '../static/profile';
import { getDuration } from '../utils/getDuration';

const OrgExternal = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
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

const GridOrgs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const IconContainer = styled.div`
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    user-select: none;
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

export const Organizations = () => {
    const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('list');

    return (
        <Table header={'TEAMS'}>
            {displayMode == 'grid' && (
                <GridOrgs>
                    {Profile.orgs.map((organization) => (
                        <OrgEntry key={organization.label}>
                            <OrgExternal>
                                <OrgIcon
                                    src={organization.image}
                                    alt={organization.label + 'logo'}
                                    color={organization.color}
                                    standalone
                                />
                            </OrgExternal>
                        </OrgEntry>
                    ))}
                </GridOrgs>
            )}
            {displayMode == 'list' && (
                <ListOrgs>
                    {Profile.orgs.map((organization) => (
                        <OrgEntry key={organization.label}>
                            <OrgExternal>
                                <OrgIcon
                                    src={organization.image}
                                    alt={organization.label + 'logo'}
                                    color={organization.color}
                                />
                                <div>
                                    <OrgName>{organization.label}</OrgName>
                                    <OrgDate>
                                        {organization.end_date
                                            ? getDuration(
                                                  organization.start_date,
                                                  organization.end_date
                                              )
                                            : `Since ${format(
                                                  new Date(
                                                      organization.start_date
                                                  ),
                                                  'MMMM yyyy'
                                              )}`}
                                    </OrgDate>
                                </div>
                            </OrgExternal>
                        </OrgEntry>
                    ))}
                </ListOrgs>
            )}
        </Table>
    );
};
