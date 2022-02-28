export type Tag = {
    icon: string;
    label: string;
    color: string;
};

export type TagNames = 'react' | 'typescript';

export const Tags: Record<TagNames, Tag> = {
    react: {
        icon: require('../../assets/skills/react.png'),
        label: 'React',
        color: '#61DBFB',
    },
    typescript: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Typescript',
        color: '#007acc',
    },
};
