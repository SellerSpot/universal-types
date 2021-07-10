export enum TAX_BRACKET {
    /**
     * @method POST
     * @type { ICreateTaxBracketRequest } requestBody
     * @type { ICreateTaxBracketResponse } responseBody
     */
    CREATE = '/taxbrackets',
    /**
     * @method GET
     */
    GET = '/taxbrackets/:id',
    /**
     * @method GET
     * @type { IGetAllTaxGroupResponse } requestBody
     */
    GET_ALL = '/taxbrackets',
    /**
     * @method POST
     * @type { ICreateTaxGroupRequest } requestBody
     * @type { ICreateTaxGroupResponse } responseBody
     */
    CREATE_GROUP = '/taxbrackets/groups',
}
