interface IProductRequest {
    name: string;
    barcode?: string;
    description?: string;
    brand?: string;
    category?: string;
    stockUnit?: string;
}

export type IEditProductRequest = IProductRequest;

export type ICreateProductRequest = IProductRequest;
