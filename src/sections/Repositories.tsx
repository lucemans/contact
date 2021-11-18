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

const SkillInternal = styled.div`
    display: none;
    height: 0;
    overflow: none;
    visibility: hidden;
`;

const SkillEntry = styled.div`
    &[data-expanded=true] {
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

            {
                Profile.skills.map(a => (
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
                        <SkillInternal>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </SkillInternal>
                    </SkillEntry>
                ))
            }

        </Table>
    );
};