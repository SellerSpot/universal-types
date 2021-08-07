export interface IAddProductToInventoryRequest {
    productId: string;
    tags?: string[];
    stock?: number;
    isTrack?: boolean;
    markup?: number;
    landingCost?: number;
    sellingPrice: number;
    taxSettingId?: string;
}
