import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Table } from '../components/Table';
import { Skill } from 'types/skill.type';

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
    padding: 1rem 0;
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
    height: 1.8rem;
    width: 1.8rem;
    margin: 0.2rem;
    object-fit: contain;
    margin-right: 1rem;
    user-select: none;
`;

const Grey = styled.div`
    color: var(--color-alt);
    &:before {
        content: '-';
        margin-left: 0.3rem;
        margin-right: 0.3rem;
    }
    @media screen and (max-width: 765px) {
        display: none;
    }
`;

const RelatedTechnologies = styled.div`
    display: flex;
    gap: 0.3rem;
    justify-content: flex-end;
    width: 100%;
    flex-wrap: wrap;
`;
const RelatedTechnology = styled.div`
    display: flex;
    color: rgba(255,255,255,0.3);
    gap: 0.1rem;
`;
const RelatedTechnologyLabel = styled.a`
    color: lightblue;
`;

export const Skills: FC<{ title: string, set: Skill[], showDescription?: boolean }> = ({ set, title, showDescription }) => {

    const [expanded, setExpanded] = useState<string[]>([]);

    return (
        <Table header={title}>

            {
                set.map(skill => (
                    <SkillEntry key={skill.label} data-expanded={expanded.includes(skill.label)}>
                        <SkillExternal onClick={(c) => {
                            c.preventDefault();
                            if (expanded.includes(skill.label)) {
                                setExpanded(expanded.filter(b => b != skill.label));
                            } else {
                                setExpanded([...expanded, skill.label]);
                            }
                        }}>
                            <SkillIcon src={skill.image} alt={skill.label + 'logo'} />
                            <span>{skill.label}</span>{showDescription && skill.description && <Grey>{skill.description}</Grey>}
                        </SkillExternal>
                        <SkillInternal>
                            {skill.relatedTechnologies &&
                                <RelatedTechnologies>
                                    {
                                        skill.relatedTechnologies.map((relatedTechnology, i) => (
                                            <RelatedTechnology key={i}>
                                                #<RelatedTechnologyLabel href={relatedTechnology.url}>{relatedTechnology.label}</RelatedTechnologyLabel>
                                            </RelatedTechnology>
                                        ))
                                    }
                                </RelatedTechnologies>
                            }
                        </SkillInternal>
                    </SkillEntry>
                ))
            }

        </Table>
    );
};