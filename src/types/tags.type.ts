export type Tag = {
    icon: string;
    label: string;
    color: string;
};

export type TagNames = 'react' | 'typescript' | 'next' | 'vuejs' | 'eth' | 'storyblok' | 'storybook' | 'gatsby' | 'angular' | 'electron' | 'ionic' | 'nx';

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
    angular: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Angular',
        color: '#007acc',
    },
    electron: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Electron',
        color: '#007acc',
    },
    eth: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Ethereum',
        color: '#007acc',
    },
    gatsby: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Gatsby',
        color: '#007acc',
    },
    ionic: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Ionic',
        color: '#007acc',
    },
    next: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Next.js',
        color: '#007acc',
    },
    storyblok: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Storyblok',
        color: '#007acc',
    },
    storybook: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Storybook',
        color: '#007acc',
    },
    vuejs: {
        icon: require('../../assets/skills/typescript.svg'),
        label: 'Vue',
        color: '#007acc',
    },
    nx:{
        icon: require('../../assets/skills/typescript.svg'),
        label: 'nrwl',
        color: '#007acc',
    },
};
