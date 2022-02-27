import { FC, useState } from 'react';
import { Book, GitHub } from 'react-feather';
import styled from 'styled-components';

import { Table } from '../components/Table';
import { Profile } from '../static/profile';
import { Language, Repository as IRepository } from '../types/repository.type';

const RepoEntry = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const OrgName = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    text-transform: none;
`;

const RepoList = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const OrgInfo = styled.div`
    font-size: 1rem;
    text-transform: none;
    color: var(--color-alt);
`;

const OrgGithub = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const Tags = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    margin-top: 1rem;
`;

const Tag = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    text-transform: none;
    font-size: 0.8rem;
`;

const TagCircle = styled.div<{ color: string }>`
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: ${({ color }) => color};
`;

const EntryLink = styled.a`
    color: inherit;
`;

const Repository: FC<{ repo: IRepository }> = ({ repo }) => {
    return (
        <Table
            header={
                repo.label
                // <>
                //     <OrgName>
                //         <Book />
                //         {repo.label}
                //     </OrgName>
                //     <OrgGithub>
                //         <EntryLink href={repo.link}>
                //             <GitHub />
                //         </EntryLink>
                //     </OrgGithub>
                // </>
            }
        >
            <RepoEntry>
                <OrgInfo>{repo.description}</OrgInfo>
                <Tags>
                    <Tag>
                        <TagCircle color={Language[repo.language].color} />
                        {Language[repo.language].label}
                    </Tag>
                </Tags>
            </RepoEntry>
        </Table>
    );
};

export const Repositories = () => {
    const [expanded, setExpanded] = useState<string[]>([]);

    console.log(Profile.repos);

    return (
        <RepoList>
            {Profile.repos.map((a) => (
                // <RepoEntry
                //     key={a.label}
                //     data-expanded={expanded.includes(a.label)}
                // >
                <>
                    {a.type === 'github' && (
                        <Repository repo={a} key={a.link} />
                    )}
                </>
            ))}
        </RepoList>
    );
};

// <>
// <OrgInfo>
//     <Book/>
//     {/* <OrgIcon
//         src={a.image}
//         alt={a.label + "logo"}
//         color={a.color}
//     /> */}
//     <OrgName>{a.label}</OrgName>
// </OrgInfo>
// </><OrgDescription>{a.description}</OrgDescription>
