import React, { useState } from 'react';
import { Profile } from '../static/profile';
import styled from 'styled-components';
import { Table } from '../components/Table';

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

const SkillEntry = styled.div`

`;

const SkillIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: contain;
    margin-right: 1rem;
    user-select: none;
`;

export const Organizations = () => {

    const [expanded, setExpanded] = useState<string[]>([]);

    return (
        <Table header={"TEAMS"}>
            {
                Profile.orgs.map(a => (
                    <SkillEntry key={a.label} data-expanded={expanded.includes(a.label)}>
                        <SkillExternal onClick={(c) => {
                            c.preventDefault();
                            if (expanded.includes(a.label)) {
                                setExpanded(expanded.filter(b => b != a.label));
                            } else {
                                setExpanded([...expanded, a.label]);
                            }
                        }}>
                            <SkillIcon src={a.image} alt={a.label + 'logo'} />
                            <span>{a.label}</span>
                        </SkillExternal>
                    </SkillEntry>
                ))
            }
        </Table>
    );
};