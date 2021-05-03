export interface ICreateCategoryRequest {
    title: string;
    /**
     * Id of parent, if empty will be taken as top level Category
     */
    parentId?: string;
}
