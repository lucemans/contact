export type Tag = {
    label: string;
    color: string;
};

export type TagNames = 'react' | 'typescript';

export const Tags: Record<TagNames, Tag> = {
    react: {
        label: 'React',
        color: '#61DBFB',
    },
    typescript: {
        label: 'Typescript',
        color: '#007acc',
    },
};
