import { IResponse } from '../../utilities';
import { ICategoryData } from './category';

interface ISingleCategoryResponse extends IResponse {
    data: ICategoryData[];
}

interface IMultiCategoryResponse extends IResponse {
    data: ICategoryData[];
}

export interface ICreateCategoryResponse extends IResponse {
    data: Pick<ICategoryData, 'id' | 'parentId' | 'title'>;
}
export type IGetAllCategoryResponse = IMultiCategoryResponse;

export type IGetCategoryResponse = ISingleCategoryResponse;

export type IEditCategoryChildrenOrderResponse = ISingleCategoryResponse;

export type IEditCategoryPositionResponse = ISingleCategoryResponse;

export type IEditCategoryResponse = ISingleCategoryResponse;
