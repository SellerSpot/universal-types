export enum ERROR_CODE {
    /**
     * General Errors & Internal Server Error
     */
    OPERATION_FAILURE = 1,
    AUTH_FAILURE = 2,
    DB_FAILURE = 3,
    VALIDATION_ERROR = 4,
    UNKNOWN_ERROR = 5,

    /**
     * Auth Errors -> 1xxx
     */
    NOT_AUTHENTICATED_USER = 1001,
    TENANT_NOT_CREATED = 1002,
    TENANT_INVALID = 1003,
    INVALID_TOKEN = 1004,
}
