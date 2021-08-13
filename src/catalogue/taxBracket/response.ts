import { IResponse } from '../../utilities';
import { ITaxBracketData } from './taxBracket';

interface ISingleTaxBracketResponse extends IResponse {
    data: ITaxBracketData;
}

interface IMultISingleTaxGroupResponse extends IResponse {
    data: ITaxBracketData[];
}

interface ISingleTaxGroupResponse extends IResponse {
    data: ITaxBracketData;
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

// all tax brackets // includes both group and bracket
export interface ISearchAllTaxBracketsResponse extends IResponse {
    data: ITaxBracketData[];
}
