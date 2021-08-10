export interface ICategoryData {
    id: string;
    title: string;
    parentId?: string;
    children?: ICategoryData[];
}
