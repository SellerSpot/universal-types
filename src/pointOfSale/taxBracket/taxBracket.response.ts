import { ITaxBracketSchema } from 'pointOfSale/databaseModels/TaxBracket';
import { IResponse } from '../../utilities';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id' | 'taxPercent';

/**
 * Response when all taxBrackets are fetched from server
 */
export type IGetAllTaxBrackets = IResponse & {
    data?: ITaxBracketSchema[];
    error?: string;
};

/**
 * Response when taxBracket is fetched from server
 */
export type IGetTaxBracket = IResponse & {
    data?: ITaxBracketSchema;
    error?: string;
};

/**
 * Response when a new taxBracket is created
 */
export type ICreateTaxBracket = IResponse & {
    data?: ITaxBracketSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a taxBracket is updated
 */
export type IUpdateTaxBracket = IResponse & {
    data?: ITaxBracketSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a taxBracket is deleted
 */
export type IDeleteTaxBracket = IResponse & {
    data?: ITaxBracketSchema;
    error?: string;
};
