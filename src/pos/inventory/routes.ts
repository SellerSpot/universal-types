export enum INVENTORY {
    /**
     * Product addition to inventory. Specify **productId** (maps inventory details
     * with existing product) or **product** (creates new product and maps inventory details)
     * @method POST
     */
    ADD = '/inventory',

    /**
     * list all products in inventory
     * @method GET
     */
    GET_ALL = '/inventory',

    /**
     * update product - inventory details
     * @method PUT
     */
    EDIT = '/inventory/:id',

    /**
     * delete product from inventory
     * @method DELETE
     */
    DELETE = '/inventory',
}
