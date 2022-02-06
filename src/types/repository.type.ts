import { Icons } from './icons.type';

type LanguageType = 'typescript' | 'rust' | 'go' | 'javascript';
type LanguageConfig = {
    color: string;
    label: string;
};

export const Language: Record<LanguageType, LanguageConfig> = {
    go: {
        color: '#00ADD8',
        label: 'Go',
    },
    rust: {
        color: '#dea584',
        label: 'Rust',
    },
    typescript: {
        color: '#2b7489',
        label: 'TypeScript',
    },
    javascript: {
        color: '#f1e05a',
        label: 'JavaScript',
    },
} as const;

export type Repository = {
    type: 'github';
    image: string;
    label: string;
    description: string;
    color: string;
    language: LanguageType;
    link: string;
};
