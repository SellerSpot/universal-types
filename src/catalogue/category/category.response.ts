import { IResponse } from '../../utilities';

export interface ICreateCategoryResponse extends IResponse {
    id: string;
    title: string;
    /**
     * Id of parent, if empty will be taken as top level Category
     */
    parentId?: string;
}

export interface IListCategoryResponse {
    id: string;
    title: string;
    /**
     * It will recursively contains its children
     */
    children: IListCategoryResponse[];
}
