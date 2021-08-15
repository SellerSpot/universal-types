import { IResponse } from '../../utilities';
import { ITaxBracketData } from './taxBracket';

interface ISingleTaxBracketResponse extends IResponse {
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
export type IGetAllTaxGroupResponse = IMultiTaxBracketResponse;
export type ISearchTaxGroupResponse = IMultiTaxBracketResponse;
export type IGetTaxGroupResponse = ISingleTaxBracketResponse;
export type ICreateTaxGroupResponse = ISingleTaxBracketResponse;
export type IEditTaxGroupResponse = ISingleTaxBracketResponse;
export type IDeleteTaxGroupResponse = ISingleTaxBracketResponse;

// all tax brackets // includes both group and bracket
export type ISearchAllBracketAndGroupResponse = IMultiTaxBracketResponse;
export type IGetAllBracketAndGroupResponse = IMultiTaxBracketResponse;
