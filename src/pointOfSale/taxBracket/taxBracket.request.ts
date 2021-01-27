import { tenantDbModels } from '@sellerspot/database-models';
/**
 * Request to get a single taxBracket from server
 */
export interface IGetSingleTaxBracket {
    id: string;
}

/**
 * Request to create new taxBracket
 */
export type ICreateTaxBracket = Omit<
    tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to update a taxBracket data
 */
export interface IUpdateTaxBracket {
    id: string;
    taxBracketData: ICreateTaxBracket;
}

/**
 * Request to delete a taxBracket
 */
export interface IDeleteTaxBracket {
    id: string;
}
