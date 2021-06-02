import { IResponse } from '../../utilities';
export interface ICategory {
    id: string;
    title: string;
    /**
     * It will recursively contains its children
     */
    parentId?: string;
    children?: ICategory[];
}

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
export interface IGetAllCategoryResponse extends IResponse {
    data: ICategory[];
}

export interface IGetCategoryResponse extends IResponse {
    data: ICategory;
}

export interface IEditCategorySiblingOrderResponse extends IResponse {
    data: ICategory;
}

export interface IEditCategoryPositionResponse extends IResponse {
    data: ICategory;
}

export interface IEditCategoryResponse extends IResponse {
    data: ICategory;
}
