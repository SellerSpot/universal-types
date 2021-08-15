import { ITaxBracketData } from './taxBracket';

// tax bracket
export type ICreateTaxBracketRequest = Pick<ITaxBracketData, 'name' | 'rate'>;
export type IEditTaxBracketRequest = Pick<ITaxBracketData, 'name' | 'rate'>;

// tax group
export type ICreateTaxGroupRequest = Pick<ITaxBracketData, 'name' | 'group'>;
export type IEditTaxGroupRequest = Pick<ITaxBracketData, 'name' | 'group' | 'rate'>;
