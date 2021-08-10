import { IResponse } from '../../utilities';
import { ITaxBracketData, ITaxGroupData } from './taxSetting';

export type ITaxSettingData = ITaxGroupData | ITaxBracketData;

interface ISingleTaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

interface IMultISingleTaxGroupResponse extends IResponse {
    data: ITaxGroupData[];
}

interface ISingleTaxGroupResponse extends IResponse {
    data: ITaxGroupData;
}
interface IMultiTaxBracketResponse extends IResponse {
    data: ITaxBracketData[];
}

// tax bracket
export type IGetAllTaxBracketResponse = IMultiTaxBracketResponse;
export type ISearchTaxBracketResponse = IMultiTaxBracketResponse;
export type IGetTaxBracketResponse = ISingleTaxBracketResponse;
export type ICreateTaxBracketResponse = ISingleTaxBracketResponse;
export type IEditTaxBracketResponse = ISingleTaxBracketResponse;
export type IDeleteTaxBracketResponse = ISingleTaxBracketResponse;

// tax group
export type IGetAllTaxGroupResponse = IMultISingleTaxGroupResponse;
export type ISearchTaxGroupResponse = IMultISingleTaxGroupResponse;
export type IGetTaxGroupResponse = ISingleTaxGroupResponse;
export type ICreateTaxGroupResponse = ISingleTaxGroupResponse;
export type IEditTaxGroupResponse = ISingleTaxGroupResponse;
export type IDeleteTaxGroupResponse = ISingleTaxGroupResponse;

// tax setting
export interface ISearchTaxSettingResponse extends IResponse {
    data: ITaxSettingData[];
}
