export enum TAX_BRACKET {
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxSettingResponse } responseBody
     */
    SEARCH_ALL_BRACKET_AND_GROUP = '/taxbrackets/all',
    /**
     * @method GET
     * @type { IGetAllTaxBracketResponse } requestBody
     */
    GET_ALL_BRACKET_AND_GROUPS = '/taxbrackets/all',

    // TAX BRACKET ROUTES
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxBracketResponse } responseBody
     */
    SEARCH_BRACKET = '/taxbrackets/brackets/search',
    /**
     * @method POST
     * @type { ICreateTaxBracketRequest } requestBody
     * @type { ICreateTaxBracketResponse } responseBody
     */
    CREATE_BRACKET = '/taxbrackets/brackets',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetTaxBracketResponse } responseBody
     */
    GET_BRACKET = '/taxbrackets/brackets/:id',
    /**
     * @method GET
     * @type { IGetAllTaxBracketResponse } requestBody
     */
    GET_ALL_BRACKET = '/taxbrackets/brackets',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditTaxBracketResponse } requestBody
     */
    EDIT_BRACKET = '/taxbrackets/brackets/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteTaxBracketResponse} - responseBody
     */
    DELETE_BRACKET = '/taxbrackets/brackets/:id',

    // TAX GROUP ROUTES
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxGroupResponse } responseBody
     */
    SEARCH_GROUP = '/taxbrackets/groups/search',
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
