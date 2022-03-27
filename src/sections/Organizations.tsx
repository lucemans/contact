import { format } from 'date-fns';
import { FC, useState } from 'react';
import { ArrowRight, ArrowUpLeft, Linkedin } from 'react-feather';
import styled from 'styled-components';
import { Organization } from 'types/organization.type';

import { Table } from '../components/Table';
import { Profile } from '../static/profile';
import { Tags } from '../types/tags.type';
import { getDuration } from '../utils/getDuration';

const RightArrow = styled.div`
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
    flex-wrap: wrap;
    border: 1px solid transparent;

    &:hover {
        cursor: pointer;

        border: 1px solid var(--theme-bg-hover);

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

const TagWrap = styled.div`
    padding-right: 0;
    transition: 250ms;
    &:hover {
        padding-right: 0.5rem;
        &:first-child() {
            padding-right: 0;
        }
    }
`;

const Tag = styled.div<{ color: string, display: boolean }>`
    color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    background: var(--theme-bg);
    padding: 0.5em 0.8em;
    border-radius: 1rem;
    font-size: 0.8em;
    width: fit-content;
    padding: 0.5em;
    display: flex;
    gap: 0.5rem;
    margin-left: ${({display}) => display ? '-1.25em' : '0'};
    .icon {
        display: block;
        width: 1rem;
        height: 1rem;
    }
`;

const TagContainer = styled.div`
    display: flex;
    gap: 0.2rem;
    @media (max-width: 500px) {
        width: 100%;
        justify-content: flex-end;
        gap: 0em;
    }
`;

const PageContainer = styled.div`
    width: 100%;
    /* position: relative; */
    /* display: grid; */
    /* grid-template-columns: 100% 100%; */
    overflow: hidden;
    clear: both;
`;

const PageRow = styled.div<{ move: string }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-left: -100%;
    transform: translateX(${({ move }) => move});
    transition: 250ms;
`;

const PageWidth = styled.div`
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
`;

const Icon = styled.img`
    height: 1rem;
    width: 1rem;
    object-fit: contain;
`;

const OrgsList: FC<{ setOrganization: (d: Organization) => void }> = ({
    setOrganization,
}) => {
    return (
        <ListOrgs>
            {Profile.orgs.map((organization) => (
                <OrgEntry key={organization.label}>
                    <OrgExternal onClick={() => setOrganization(organization)}>
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
                                <TagWrap>
                                    <Tag color={Tags[tag].color} display>
                                        {/* <span className="text">
                                                {Tags[tag].label}
                                            </span> */}
                                        <Icon
                                            src={Tags[tag].icon}
                                            alt={Tags[tag].label}
                                            title={Tags[tag].label}
                                            className="icon"
                                        />
                                    </Tag>
                                </TagWrap>
                            ))}
                        </TagContainer>
                        <RightArrow>
                            <ArrowRight />
                        </RightArrow>
                    </OrgExternal>
                </OrgEntry>
            ))}
        </ListOrgs>
    );
};

const OrgPageIcon = styled.img<{ color: string }>`
    height: 6rem;
    width: 6rem;
    object-fit: contain;
    user-select: none;
    background: ${({ color }) => color};
    padding: 0.2rem;
    border-radius: 0.4rem;
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const OrgInfoWrapper = styled.div`
    display: flex;
    gap: 1rem;
    width: calc(90vw - 10px);
`;

const OrgInfoReturn = styled.div`
    position: absolute;
    left: 0;
    top: 1.5rem;
    background: var(--theme-bg);
    border: 1px solid #686868;
    padding: 0.25rem;
    height: 1.75rem;
    svg {
        width: 1rem;
        height: 1rem;
    }
    cursor: pointer;
    transition: 250ms;
    transform: translateX(-50%);
    &:hover {
        background: var(--theme-bg-hover);
    }
`;

export const OrgInfos: FC<{
    org: Organization;
    setOrganization: (d: Organization) => void;
}> = ({ org, setOrganization }) => {
    return (
        <OrgInfoWrapper>
            <LeftColumn>
                <OrgPageIcon src={org.image} alt="" color={org.color} />
            </LeftColumn>
            <RightColumn>
                <div>{org.label}</div>
                <TagContainer>
                    {org.tags.map((tag) => (
                        <TagWrap>
                            <Tag color={Tags[tag].color} display={false}>
                                <img
                                    src={Tags[tag].icon}
                                    alt={Tags[tag].label}
                                    className="icon"
                                />
                                <span className="text">{Tags[tag].label}</span>
                            </Tag>
                        </TagWrap>
                    ))}
                </TagContainer>
            </RightColumn>
        </OrgInfoWrapper>
    );
};

const WrapperThing = styled.div`
    width: 100%;
`;

const Link = styled.a`
    color: var(--theme-text-main);
    &:hover {
        color: var(--color-blue);
    }
`;

const ab = false;
export const Organizations = () => {
    const [organization, setOrganization] = useState<Organization>(undefined);

    return (
        <WrapperThing>
            <Table
                header={'TEAMS'}
                sideHeader={
                    ab && (
                        <Link
                            href="https://linkedin.com/in/lucemans"
                            target="_blank"
                        >
                            <Linkedin />
                        </Link>
                    )
                }
            >
                <PageContainer>
                    <PageRow move={organization ? 'calc(-100% - 2px)' : ''}>
                        <PageWidth>
                            <OrgsList setOrganization={setOrganization} />
                        </PageWidth>
                        <PageWidth>
                            {organization && (
                                <OrgInfos
                                    org={organization}
                                    setOrganization={setOrganization}
                                >
                                    hi
                                </OrgInfos>
                            )}
                        </PageWidth>
                    </PageRow>
                </PageContainer>
                {organization && (
                    <OrgInfoReturn
                        onClick={() => {
                            setOrganization(null);
                        }}
                    >
                        <ArrowUpLeft />
                    </OrgInfoReturn>
                )}
            </Table>
        </WrapperThing>
    );
};
