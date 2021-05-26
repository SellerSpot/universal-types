import { IResponse } from '../../utilities';

export interface ICreateCategoryResponse extends IResponse {
    data: {
        id: string;
        title: string;
        /**
         * Id of parent, if empty will be taken as top level Category
         */
        parentId?: string;
    };
}
export interface IListCategory {
    id: string;
    title: string;
    /**
     * It will recursively contains its children
     */
    parentId?: string;
    children?: IListCategory[];
}

export interface IGetCategoryResponse extends IResponse {
    data: IListCategory;
}

export interface IListCategoryResponse extends IResponse {
    data: IListCategory[];
}

export interface IEditCategorySiblingOrderResponse extends IResponse {
    data: IListCategory;
}

export interface IEditCategoryPositionResponse extends IResponse {
    data: IListCategory;
}

export interface IEditCategoryResponse extends IResponse {
    data: IListCategory;
}
