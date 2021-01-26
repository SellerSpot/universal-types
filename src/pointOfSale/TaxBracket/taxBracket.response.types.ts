import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
export type fieldNames = 'name' | 'id';

/**
 * Response when all taxBrackets are fetched from server
 */
export type IGetTaxBrackets = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema[];
    error?: string;
};

/**
 * Response when taxBracket is fetched from server
 */
export type IGetTaxBracket = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
    error?: string;
};

/**
 * Response when a new taxBracket is created
 */
export type ICreateTaxBracket = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Respose when a taxBracket is updated
 */
export type IUpdateTaxBracket = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
    error?: {
        name: fieldNames;
        message: string;
    }[];
};

/**
 * Response when a taxBracket is deleted
 */
export type IDeleteTaxBracket = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
    error?: string;
};
