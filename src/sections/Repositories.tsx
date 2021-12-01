import React, { useState } from "react";
import { Profile } from "../static/profile";
import styled from "styled-components";
import { Table } from "../components/Table";
import { IconMap } from "../types/icons.type";

const SkillExternal = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const SkillInternal = styled.div`
    display: none;
    height: 0;
    overflow: none;
    visibility: hidden;
`;

const SkillEntry = styled.div`
    &[data-expanded="true"] {
        ${SkillInternal} {
            display: flex;
            height: auto;
            visibility: visible;
            overflow: auto;
        }
    }
`;

const SkillIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: contain;
    margin-right: 1rem;
    user-select: none;
`;

export const Repositories = () => {
    const [expanded, setExpanded] = useState<string[]>([]);

    return (
        <Table header={"Repositories"}>
            {Profile.repos.map((a) => (
                <SkillEntry
                    key={a.label}
                    data-expanded={expanded.includes(a.label)}
                >
                    {React.createElement(IconMap[a.icon], { size: 24 }, [])}
                    {/* <SkillIcon src={a.image} alt={a.label + 'logo'} /> */}
                    <span>{a.label}</span>
                    {/* <span>
                        {Object.keys(a).includes("description") &&
                            a.description}
                    </span> */}
                </SkillEntry>
            ))}
        </Table>
    );
};
