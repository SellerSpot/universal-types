import { IResponse } from '../../utilities';

export interface ITaxBracketData {
    id: string;
    name: string;
    rate: number;
}

export interface ITaxGroupData {
    id: string;
    name: string;
    bracket: ITaxBracketData[];
}

export type ITaxSettingData = ITaxGroupData | ITaxBracketData;

interface ITaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

interface ITaxGroupsResponse extends IResponse {
    data: ITaxGroupData[];
}

interface ITaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}
interface ITaxBracketsResponse extends IResponse {
    data: ITaxBracketData[];
}

// tax bracket
export type IGetAllTaxBracketResponse = ITaxBracketsResponse;
export type ISearchTaxBracketResponse = ITaxBracketsResponse;
export type IGetTaxBracketResponse = ITaxBracketResponse;
export type ICreateTaxBracketResponse = ITaxBracketResponse;
export type IEditTaxBracketResponse = ITaxBracketResponse;
export type IDeleteTaxBracketResponse = ITaxBracketResponse;

// tax group
export type IGetAllTaxGroupResponse = ITaxGroupsResponse;
export type ISearchTaxGroupResponse = ITaxGroupsResponse;
export type IGetTaxGroupResponse = ITaxGroupResponse;
export type ICreateTaxGroupResponse = ITaxGroupResponse;
export type IEditTaxGroupResponse = ITaxGroupResponse;
export type IDeleteTaxGroupResponse = ITaxGroupResponse;

// tax setting
export interface ISearchTaxSettingResponse extends IResponse {
    data: ITaxSettingData[];
}
