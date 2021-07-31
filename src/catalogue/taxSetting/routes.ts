export enum TAX_BRACKET {
    // TAX SETTING ROUTES
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxSettingResponse } responseBody
     */
    SEARCH_TAXSETTING = '/taxsettings/search',

    // TAX BRACKET ROUTES
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxBracketResponse } responseBody
     */
    SEARCH_TAXBRACKET = '/taxsettings/brackets/search',
    /**
     * @method POST
     * @type { ICreateTaxBracketRequest } requestBody
     * @type { ICreateTaxBracketResponse } responseBody
     */
    CREATE_BRACKET = '/taxsettings/brackets',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetTaxBracketResponse } responseBody
     */
    GET_BRACKET = '/taxsettings/brackets/:id',
    /**
     * @method GET
     * @type { IGetAllTaxBracketResponse } requestBody
     */
    GET_ALL_BRACKET = '/taxsettings/brackets',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditTaxBracketResponse } requestBody
     */
    EDIT_BRACKET = '/taxsettings/brackets/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteTaxBracketResponse} - responseBody
     */
    DELETE_BRACKET = '/taxsettings/brackets/:id',

    // TAX GROUP ROUTES
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchTaxGroupResponse } responseBody
     */
    SEARCH_TAXGROUP = '/taxsettings/groups/search',
    /**
     * @method POST
     * @type { ICreateTaxGroupRequest } requestBody
     * @type { ICreateTaxGroupResponse } responseBody
     */
    CREATE_GROUP = '/taxsettings/groups',
    /**
     * @method GET
     * @type { ICommonResourcePathParam } pathParams
     * @type { IGetTaxBracketResponse } responseBody
     */
    GET_GROUP = '/taxsettings/groups/:id',
    /**
     * @method GET
     * @type { IGetAllTaxGroupResponse } requestBody
     */
    GET_ALL_GROUP = '/taxsettings/groups',
    /**
     * @method PUT
     * @type { ICommonResourcePathParam } pathParams
     * @type { IEditTaxGroupResponse } requestBody
     */
    EDIT_GROUP = '/taxsettings/groups/:id',
    /**
     * @method DELETE
     * @type { ICommonResourcePathParam } pathParams
     * @type {IDeleteTaxGroupResponse} - responseBody
     */
    DELETE_GROUP = '/taxsettings/groups/:id',
}
