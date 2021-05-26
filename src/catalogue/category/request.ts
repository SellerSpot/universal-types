export interface ICreateCategoryRequest {
    title: string;
    /**
     * Id of parent, if empty will be taken as top level Category
     */
    parentId?: string;
}

export interface IEditCategorySiblingOrderRequest {
    siblingOrder: string[];
}

export interface IEditCategoryPositionRequest {
    newParentId: string;
    oldParentId: string;
}
export interface IEditCategoryRequest {
    title: string;
}
