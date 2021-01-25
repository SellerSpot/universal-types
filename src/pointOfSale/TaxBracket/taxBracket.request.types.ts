import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Request to create new tax bracket
 */
export type ICreateTaxBracket = Pick<
    tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema,
    '_id' | 'createdAt' | 'updatedAt'
>;

/**
 * Request to delete a tax bracket
 */
export interface IDeleteTaxBracket {
    id: string;
}
