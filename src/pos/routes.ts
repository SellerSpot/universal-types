export enum POS {
    /**
     * pos service heartbeat
     *
     * @request  GET
     */
    INFO = '/info',

    /** Inventory API starts here */
    /**
     * @description Product addition to inventory. Specify **productId** (maps inventory details with existing product) or **product** (creates new product and maps inventory details)
     * @method POST
     */
    ADD_TO_INVENTORY = '/inventories',

    /**
     * @description list all products in inventory
     * @method GET
     */
    INVENTORY_LIST = '/inventories',

    /**
     * @description update product - inventory details
     * @method PUT
     */
    INVENTORY_EDIT = '/inventories/:id',

    /**
     * @description delete product from inventory
     * @method DELETE
     */
    INVENTORY_DELETE = '/inventories',

    /** Inventory API ends here */
}
