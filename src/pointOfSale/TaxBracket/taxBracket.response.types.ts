import { tenantDbModels } from '@sellerspot/database-models';

/**
 * Response when taxBracket is fetched from server
 */
export type IGetTaxBracket = tenantDbModels.pointOfSaleModels.TaxBracketModel.ITaxBracketSchema;
