import { Icons } from "./icons.type";

export type Repository = {
    icon: "Package";
    label: string;
    description: string;
    repoLink: string;
    npmLink: string;
} | {
    icon: "Book";
    label: string;
    url: string;
} | {
    label: string;
    description: string;
    icon: Icons
};
