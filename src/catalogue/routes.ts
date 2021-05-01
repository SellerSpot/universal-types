export enum CATALOGUE {
    /**
     * @request GET
     */
    LIST_CATAGORY = '/catagory',
    /**
     * @request GET
     * @pathparam catagoryid
     */
    GET_CATAGORY = '/catagory:id',
    /**
     * @request POST
     * @type {} requestBody
     * @type {} responseBody
     */
    CREATE_CATAGORY = '/catagory',
    /**
     * @request PUT
     * @pathparam catagoryid
     * @type {} requestBody
     * @type {} responseBody
     */
    EDIT_CATAGORY = '/catagory:id',
    /**
     * @request DELETE
     * @pathparam catagoryid
     */
    DELETE_CATAGORY = '/catagory:id',
}
