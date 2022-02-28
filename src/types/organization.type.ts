import { TagNames } from './tags.type';

export type Organization = {
    image: string;
    label: string;
    url?: string;
    position?: string;
    time?: string;
    description?: string;
    color: string;

    start_date: string;
    end_date?: string;

    tags: TagNames[];
};
