export interface ICreateInventoryRequest {
    productId: string;
    tags?: string[];
    stock?: number;
    isTrack?: boolean;
    markup?: number;
    landingCost?: number;
    sellingPrice: number;
    taxBracketId?: string;
}
