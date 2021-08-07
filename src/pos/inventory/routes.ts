export enum INVENTORY {
    /**
     * Product addition to inventory.
     * @method POST
     * @type { IAddProductToInventoryRequest } requestBody
     * @type { IAddProductToInventoryResponse } responseBody
     */
    CREATE = '/inventories',
    /**
     * list all products in inventory
     * @method GET
     * @type { IGetAllInventoryProductResponse } responseBody
     */
    GET_ALL = '/inventories',
    /**
     * @method GET
     * @type { ISearchResourceQueryParam } queryParams
     * @type { ISearchInventoryProductsResponse } responseBody
     */
    SEARCH = '/inventories/search',
    /**
     * update product - inventory details
     * @method PUT
     */
    EDIT = '/inventories/:id',

    /**
     * delete product from inventory
     * @method DELETE
     */
    DELETE = '/inventories',
}
