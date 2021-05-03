export enum CATALOGUE {
    /**
     * @method GET
     */
    LIST_CATAGORY = '/categories',
    /**
     * @method GET
     * @pathparam catagoryid
     */
    GET_CATAGORY = '/categories:id',
    /**
     * @method POST
     * @type {} requestBody
     * @type {} responseBody
     */
    CREATE_CATAGORY = '/categories',
    /**
     * @method PUT
     * @pathparam catagoryid
     * @type {} requestBody
     * @type {} responseBody
     */
    EDIT_CATAGORY = '/categories:id',
    /**
     * @method DELETE
     * @pathparam catagoryid
     */
    DELETE_CATAGORY = '/categories:id',
}
