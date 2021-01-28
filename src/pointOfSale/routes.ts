/**
 * Holds the major routes for the server
 */
export const ROUTES = {
    AUTHORIZE: 'authorize',
    BRAND: 'brand',
    CATEGORY: 'category',
    TAX_BRACKET: 'taxbracket',
    PROUDCT: 'product',
    STOCK_UNIT: 'stockunit',
    SALE: 'sale',

    // brand routes
    BRAND_GET_ALL_BRANDS: 'getallbrands',
    BRAND_GET_BRAND: 'getbrand',
    BRAND_CREATE_BRAND: 'createbrand',
    BRAND_DELETE_BRAND: 'deletebrand',
    BRAND_UPDATE_BRAND: 'updatebrand',

    // category routes
    CATEGORY_GET_ALL_CATEGORIES: 'getallcategories',
    CATEGORY_GET_CATEGORY: 'getcategory',
    CATEGORY_CREATE_CATEGORY: 'createcategory',
    CATEGORY_DELETE_CATEGORY: 'deletecategory',
    CATEGORY_UPDATE_CATEGORY: 'updatecategory',

    // product routes
    PRODUCT_GET_ALL_PRODUCTS: 'getallproducts',
    PRODUCT_GET_PRODUCT: 'getproduct',
    PRODUCT_CREATE_PRODUCT: 'createproduct',
    PRODUCT_DELETE_PRODUCT: 'deleteproduct',
    PRODUCT_UPDATE_PRODUCT: 'updateproduct',

    // sale routes
    SALE_GET_ALL_SALES: 'getallsales',
    SALE_GET_SALE: 'getsale',
    SALE_CREATE_SALE: 'createsale',
    SALE_DELETE_SALE: 'deletesale',
    SALE_UPDATE_SALE: 'updatesale',

    // stockUnit routes
    STOCKUNIT_GET_ALL_STOCKUNITS: 'getallstockUnits',
    STOCKUNIT_GET_STOCKUNIT: 'getstockUnit',
    STOCKUNIT_CREATE_STOCKUNIT: 'createstockUnit',
    STOCKUNIT_DELETE_STOCKUNIT: 'deletestockUnit',
    STOCKUNIT_UPDATE_STOCKUNIT: 'updatestockUnit',

    // taxBracket routes
    TAXBRACKET_GET_ALL_TAXBRACKETS: 'getalltaxBrackets',
    TAXBRACKET_GET_TAXBRACKET: 'gettaxBracket',
    TAXBRACKET_CREATE_TAXBRACKET: 'createtaxBracket',
    TAXBRACKET_DELETE_TAXBRACKET: 'deletetaxBracket',
    TAXBRACKET_UPDATE_TAXBRACKET: 'updatetaxBracket',
};
