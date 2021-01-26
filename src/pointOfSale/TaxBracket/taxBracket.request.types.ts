import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new tax bracket
 */
export type ICreateTaxBracket = Omit<
    tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema,
    '_id' | 'createdAt' | 'updatedAt' | '__v'
>;

/**
 * Request to delete a tax bracket
 */
export interface IDeleteTaxBracket {
    id: string;
}
