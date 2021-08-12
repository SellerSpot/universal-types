import { ITaxBracketData, ITaxGroupData } from './taxSetting';

export type ITaxBracketRequest = Pick<ITaxBracketData, 'name' | 'rate'>;

export type ITaxGroupRequest = Pick<ITaxGroupData, 'name' | 'bracket'>;

// tax bracket
export type ICreateTaxBracketRequest = ITaxBracketRequest;
export type IEditTaxBracketRequest = ITaxBracketRequest;

// tax group
export type ICreateTaxGroupRequest = ITaxGroupRequest;
export type IEditTaxGroupRequest = ITaxGroupRequest;
