/**
 * Request to create new tax bracket
 */
export interface ICreateTaxBracket {
    name: string;
    percent: number;
}

/**
 * Request to delete a tax bracket
 */
export interface IDeleteTaxBracket {
    id: string;
}
