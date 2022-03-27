export type Tag = {
    icon: string;
    label: string;
    color: string;
};

export type TagNames = 'react' | 'typescript' | 'next' | 'vuejs' | 'eth' | 'storyblok' | 'storybook' | 'gatsby' | 'angular' | 'electron' | 'ionic' | 'nx' | 'sass';

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
        icon: require('../../assets/skills/angular.png'),
        label: 'Angular',
        color: '#dd1b16',
    },
    electron: {
        icon: require('../../assets/skills/electron.png'),
        label: 'Electron',
        color: '#9feaf9',
    },
    eth: {
        icon: require('../../assets/skills/ethereum.png'),
        label: 'Ethereum',
        color: '#62688f',
    },
    gatsby: {
        icon: require('../../assets/skills/gatsby.png'),
        label: 'Gatsby',
        color: '#663399',
    },
    ionic: {
        icon: require('../../assets/skills/ionic.svg'),
        label: 'Ionic',
        color: '#2f4a7c',
    },
    next: {
        icon: require('../../assets/skills/next.svg'),
        label: 'Next.js',
        color: '#fff',
    },
    storyblok: {
        icon: require('../../assets/skills/storyblok.svg'),
        label: 'Storyblok',
        color: '#0AB3AF',
    },
    storybook: {
        icon: require('../../assets/skills/storybook.svg'),
        label: 'Storybook',
        color: '#FF4785',
    },
    vuejs: {
        icon: require('../../assets/skills/vue.svg'),
        label: 'Vue',
        color: '#41b883',
    },
    nx:{
        icon: require('../../assets/skills/nx.png'),
        label: 'nrwl',
        color: '#012f55',
    },
    sass: {
        icon: require('../../assets/skills/sass.svg'),
        label: 'Sass/Scss',
        color: '#CF649A'
    }
};
