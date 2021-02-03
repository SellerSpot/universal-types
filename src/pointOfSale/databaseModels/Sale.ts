export enum ESaleStatus {
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
}

export interface ISaleItem {
    _id?: string;
    product: string;
    quantity: number;
}

export interface ISaleSchema {
    _id?: string;
    status: ESaleStatus;
    products?: ISaleItem[];
    subTotal?: number;
    discountPercent?: number;
    totalTax?: number;
    grandTotal?: number;
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}
