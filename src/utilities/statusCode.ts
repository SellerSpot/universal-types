/** response status codes */
export enum STATUS_CODE {
    /**
     * validation errors in the request
     */
    BAD_REQUEST = 400,
    /**
     * requested resource has been createe successfully
     */
    CREATED = 201,
    /**
     * a duplicate of the data to be created already exists in database
     */
    CONFLICT = 409,
    /**
     * unknown server errors
     */
    INTERNAL_SERVER_ERROR = 500,
    /**
     * operation successfully completed
     */
    OK = 200,
    /**
     * for denoting that no content is being sent in the response
     */
    NO_CONTENT = 204,
    /**
     * for denoting that the required resource has not been found in database
     */
    NOT_FOUND = 404,
    /**
     * for denoting authentication errors such as invalid tokens
     */
    UNAUTHORIZED = 401,
}
