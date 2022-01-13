import React, { useState } from "react";
import { Profile } from "../static/profile";
import styled from "styled-components";
import { Table } from "../components/Table";

const SkillInternal = styled.div`
    display: none;
    height: 0;
    overflow: none;
    visibility: hidden;
`;

const RepoEntry = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: 3rem;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    &[data-expanded="true"] {
        ${SkillInternal} {
            display: flex;
            height: auto;
            visibility: visible;
            overflow: auto;
        }
    }
`;

const OrgIcon = styled.img<{ color: string; standalone?: boolean }>`
    height: 2rem;
    width: 2rem;
    object-fit: contain;
    margin-right: ${({ standalone }) => (standalone ? "" : "1rem")};
    user-select: none;
    background: ${({ color }) => color};
    padding: 0.2rem;
    border-radius: 0.3rem;
`;

const OrgName = styled.div`
    flex-grow: 1;
`;

const RepoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const OrgDescription = styled.div`
    font-size: 0.6rem;
    margin-top: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const OrgInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    width: calc(100% - 4rem);
    height: fit-content;
`;

export const Repositories = () => {
    const [expanded, setExpanded] = useState<string[]>([]);

    console.log(Profile.repos);

    return (
        <Table header={"Repositories"} width="50%">
            <RepoList>
                {Profile.repos.map((a) => (
                    <RepoEntry
                        key={a.label}
                        data-expanded={expanded.includes(a.label)}
                    >
                        {a.type === "github" && (
                            <>
                                <OrgInfo>
                                    <OrgIcon
                                        src={a.image}
                                        alt={a.label + "logo"}
                                        color={a.color}
                                    />
                                    <OrgName>{a.label}</OrgName>
                                </OrgInfo>
                                <OrgDescription>{a.description}</OrgDescription>
                            </>
                        )}
                        {/* {React.createElement(IconMap[a.icon], { size: 24 }, [])}
                        */}
                        {/* <SkillIcon src={a.image} alt={a.label + 'logo'} /> */}
                        {/* <span>{a.label}</span> */}
                        {/* {a["description"] && (
                            <span>
                                {Object.keys(a).includes("description") &&
                                    a.description}
                            </span>
                        )} */}
                    </RepoEntry>
                ))}
            </RepoList>
        </Table>
    );
};
