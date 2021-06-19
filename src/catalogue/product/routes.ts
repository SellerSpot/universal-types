export enum PRODUCT {
    /**
     * @method GET
     */
    GET_ALL = '/products',
    /**
     * @method GET
     */
    GET = '/products/:id',
    /**
     * @method POST
     */
    CREATE = '/products',
    /**
     * @method PUT
     */
    EDIT = '/products/:id',
    /**
     * @method DELETE
     */
    DELETE = '/products/:id',
}
