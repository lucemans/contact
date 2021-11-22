export type Skill = {
    image: string;
    label: string;
    url?: string;
    color?: string;
    description?: string;
    relatedTechnologies?: RelatedSkill[]
};

export type RelatedSkill = {
    label: string;
    url?: string;
}
