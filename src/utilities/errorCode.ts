export enum ERROR_CODE {
    //General Errors & Internal Server Error

    OPERATION_FAILURE = 1,
    AUTH_FAILURE = 2,
    DB_FAILURE = 3,
    VALIDATION_ERROR = 4,
    UNKNOWN_ERROR = 5,
    NOT_FOUND = 6,

    /**
     * Auth Errors -> 1xxx
     */
    //Tenant Sign Up
    DOMAIN_ALREADY_EXIST = 1001,
    TENANT_ALREADY_EXIST = 1002,
    TENANT_NOT_CREATED = 1003,
    NOT_AUTHENTICATED_USER = 1004,
    TENANT_INVALID = 1005,
    INVALID_TOKEN = 1006,

    /**
     * Catalogue Errors -> 2xxx
     */
    //Category
    CATEGORY_NOT_FOUND = 2001,
    CATEGORY_TITLE_INVALID = 2002,
}
