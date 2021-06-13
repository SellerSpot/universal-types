export enum ERROR_CODE {
    //General Errors & Internal Server Error

    OPERATION_FAILURE,
    AUTH_FAILURE,
    DB_FAILURE,
    VALIDATION_ERROR,
    UNKNOWN_ERROR,
    NOT_FOUND,

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
    //TaxBracket
    TAX_BRACKET_NAME_INVALID,
    TAX_GROUP_INVALID_BRACKET,

    // plugin
    INVALID_PLUGIN,
}

export type TErrorCodeKeys = keyof typeof ERROR_CODE;

export const ERROR_CODE_KEYS = <TErrorCodeKeys[]>Object.keys(ERROR_CODE);

export const ERROR_CODE_VALUES = Object.values(ERROR_CODE);

export const ERROR_CODE_VALUE_KEY = ERROR_CODE_VALUES.reduce(
    (resultObj, currentValue, currentIndex) => {
        resultObj[currentValue as string] = ERROR_CODE_KEYS[currentIndex];
        return resultObj;
    },
    {} as { [key: string]: TErrorCodeKeys },
);
