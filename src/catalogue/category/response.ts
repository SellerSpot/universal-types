import { IResponse } from '../../utilities';
export interface ICategoryData {
    id: string;
    title: string;
    /**
     * It will recursively contains its children
     */
    parentId?: string;
    children?: ICategoryData[];
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
    data: ICategoryData[];
}

export interface IGetCategoryResponse extends IResponse {
    data: ICategoryData;
}

export interface IEditCategoryChildrenOrderResponse extends IResponse {
    data: ICategoryData;
}

export interface IEditCategoryPositionResponse extends IResponse {
    data: ICategoryData;
}

export interface IEditCategoryResponse extends IResponse {
    data: ICategoryData;
}
