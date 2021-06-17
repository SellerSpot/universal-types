export enum ERROR_CODE {
    //General Errors & Internal Server Error

    OPERATION_FAILURE,
    AUTH_FAILURE,
    DB_FAILURE,
    VALIDATION_ERROR,
    UNKNOWN_ERROR,
    NOT_FOUND,
    INVALID_JSON,

    /**
     * Auth Errors -> 1xxx
     */
    //Tenant Sign Up
    DOMAIN_ALREADY_EXIST,
    TENANT_ALREADY_EXIST,
    TENANT_NOT_CREATED,
    NOT_AUTHENTICATED_USER,
    TENANT_INVALID,
    INVALID_TOKEN,

    /**
     * Catalogue Errors -> 2xxx
     */
    //Category
    CATEGORY_NOT_FOUND,
    CATEGORY_TITLE_INVALID,
    //Brand
    BRAND_NAME_INVALID,
    BRAND_NOT_FOUND,
    //TaxBracket
    TAX_BRACKET_NAME_INVALID,
    TAX_GROUP_INVALID_BRACKET,

    // plugin
    PLUGIN_INVALID,
    PLUGIN_ALREADY_INSTALLED,
}
