import { tenantDbModels } from '@sellerspot/database-models';
import { IResponse } from '../../utils';

// field names for textFields involved in this API
type fieldNames = 'name' | 'taxPercent';

/**
 * Response when a taxBracket is fetched from server
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
        [k in fieldNames]?: string;
    };
};

/**
 * Response when a taxBracket is deleted
 */
export type IDeleteTaxBracket = IResponse & {
    data?: tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
    error?: string;
};
