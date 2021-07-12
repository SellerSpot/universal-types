export enum TAX_BRACKET {
    // TAX BRACKET ROUTES
    /**
     * @method POST
     * @type { ICreateTaxBracketRequest } requestBody
     * @type { ICreateTaxBracketResponse } responseBody
     */
    CREATE_BRACKET = '/taxbrackets',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetTaxBracketResponse } responseBody
     */
    GET_BRACKET = '/taxbrackets/:id',
    /**
     * @method GET
     * @type { IGetAllTaxBracketResponse } requestBody
     */
    GET_ALL_BRACKET = '/taxbrackets',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditTaxBracketResponse } requestBody
     */
    EDIT_BRACKET = '/taxbrackets/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteTaxBracketResponse} - responseBody
     */
    DELETE_BRACKET = '/taxbrackets/:id',

    // TAX GROUP ROUTES
    /**
     * @method POST
     * @type { ICreateTaxGroupRequest } requestBody
     * @type { ICreateTaxGroupResponse } responseBody
     */
    CREATE_GROUP = '/taxbrackets/groups',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetTaxBracketResponse } responseBody
     */
    GET_GROUP = '/taxbrackets/groups/:id',
    /**
     * @method GET
     * @type { IGetAllTaxGroupResponse } requestBody
     */
    GET_ALL_GROUP = '/taxbrackets/groups',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditTaxGroupResponse } requestBody
     */
    EDIT_GROUP = '/taxbrackets/groups/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteTaxGroupResponse} - responseBody
     */
    DELETE_GROUP = '/taxbrackets/groups/:id',
}
