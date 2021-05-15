export const CATALOGUE = {
    CATAGORY: {
        /**
         * common namespace that must be appened before all request
         */
        RESOURCE: '/categories',
        /**
         * All available rest actions for catagory
         */
        ACTION: {
            /**
             * @method GET
             * @type {IListCategoryResponse} responseBody
             */
            LIST: '/',
            /**
             * @method GET
             * @pathparam catagoryid
             * @type {IGetCategoryResponse} responseBody
             */
            GET: '/:id',
            /**
             * @method POST
             * @type {ICreateCategoryRequest} requestBody
             * @type {ICreateCategoryResponse} responseBody
             */
            CREATE: '/',
            /**
             * @method PUT
             * @pathparam catagoryid
             * @type {IEditCategoryRequest} requestBody
             * @type {IEditCategoryResponse} responseBody
             */
            EDIT: '/:id',
            /**
             * @method PUT
             * @pathparam {catagoryid} parent id of the sibling should be sent
             * @type {IEditCategorySiblingOrderRequest} requestBody
             * @type {IEditCategorySiblingOrderResponse} responseBody
             */
            EDIT_SIBLING_ORDER: '/:id/siblingorder',
            /**
             * @method PUT
             * @pathparam catagoryid
             * @type {IEditCategoryPositionRequest} requestBody
             * @type {IEditCategoryPositionResponse} responseBody
             */
            EDIT_CATEGORY_POSITION: '/:id/position',
            /**
             * @method DELETE
             * @pathparam catagoryid
             */
            DELETE: '/:id',
        },
    },
};
