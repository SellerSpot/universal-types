interface IOutletConfiguration {
    outletId: string;
    stock?: number;
    isTrack?: boolean;
    markup?: number;
    mrp: number;
    isActive?: boolean;
    landingCost?: number;
    sellingPrice: number;
    taxSettingId?: string;
}

export interface IAddProductToInventoryRequest {
    productId: string;
    tags?: string[];
    configurations: IOutletConfiguration[];
}
