import { IResponse } from '../../utilities';

export interface ITaxBracketData {
    id: string;
    name: string;
    rate: number;
}

export interface ITaxGroupData {
    id: string;
    name: string;
    rate: number;
    bracket: ITaxBracketData[];
}

interface ITaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

interface ITaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}

export interface IGetAllTaxDataResponse extends IResponse {
    data: {
        brackets: ITaxBracketData[];
        groups: ITaxGroupData[];
    };
}

// tax bracket
export interface IGetAllTaxBracketResponse extends IResponse {
    data: ITaxBracketData[];
}
export type IGetTaxBracketResponse = ITaxBracketResponse;
export type ICreateTaxBracketResponse = ITaxBracketResponse;
export type IEditTaxBracketResponse = ITaxBracketResponse;
export type IDeleteTaxBracketResponse = ITaxBracketResponse;

// tax group
export interface IGetAllTaxGroupResponse extends IResponse {
    data: ITaxGroupData[];
}
export type IGetTaxGroupResponse = ITaxGroupResponse;
export type ICreateTaxGroupResponse = ITaxGroupResponse;
export type IEditTaxGroupResponse = ITaxGroupResponse;
export type IDeleteTaxGroupResponse = ITaxGroupResponse;
