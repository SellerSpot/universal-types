import { IUserDetails } from '../../auth';
import { IProductData, IStockUnitData, ITaxSettingData } from '../../catalogue';
import { ICustomerData } from '../../core';
import { IOUtletData } from '..';

export enum EDiscountTypes {
    VALUE = 'VALUE',
    PERCENT = 'PERCENT',
}

export enum ESaleStatus {
    PARKED = 'PARKED',
    COMPLETED = 'COMPLETED',
    VOIDED = 'VOIDED',
    // should we need QUOTED
}

export enum EPaymentMethods {
    CASH = 'CASH',
    CARD = 'CARD',
    // might be DUE in next phase
}

export interface ICartDetails {
    product: {
        name: string;
        reference: string | IProductData;
    };
    stockUnit: {
        name: string;
        reference: string | IStockUnitData;
    };
    quantity: number;
    unitPrice: number; // should we need isModified flag?
    productDiscount: {
        discount: number;
        discountType: EDiscountTypes;
    };
    taxBracket: {
        name: string;
        rate: number;
        group?: [
            {
                name: string;
                rate: number;
                reference: string | ITaxSettingData;
            },
        ];
        reference: string | ITaxSettingData;
    };
}

export interface ISaleData {
    cart: ICartDetails[];
    status: ESaleStatus;
    saleDiscount: {
        discount: number;
        discountType: EDiscountTypes;
    };
    payment: {
        method: EPaymentMethods;
        // all products discount and including total sale discount
        totalDiscount: number;
        // all products consolidated taxes
        totalTax: number;
        // total before applying tax and discount
        subTotal: number;
        // total after applying tax and discount
        grandTotal: number;
        // amount paid by the customer
        amountPaid: number;
        // balance given to the customer
        balanceGiven: number;
        // need to incorporate due schema here in next phase
    };
    // client / customer
    customer: {
        name: string;
        reference: string | ICustomerData;
    };
    // employee / owner
    user: {
        name: string;
        reference: string | IUserDetails;
    };
    outlet: {
        name: string;
        reference: string | IOUtletData;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}
