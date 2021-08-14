import { IUserDetails } from '../../auth';
import { IOutletData, IProductData, IStockUnitData, ITaxBracketData } from '../../catalogue';
import { ICustomerData } from '../../core';

export enum EDiscountTypes {
    VALUE = 'VALUE',
    PERCENT = 'PERCENT',
}

export enum ESaleStatus {
    PARKED = 'PARKED',
    COMPLETED = 'COMPLETED',
    VOIDED = 'VOIDED',
    QUOTED = 'QUOTED',
}

export enum EPaymentMethods {
    CASH = 'CASH',
    CARD = 'CARD',
    // might be DUE in next phase
}

export interface IDiscount {
    discount: number;
    discountType: EDiscountTypes;
}

export interface ISaleTaxBracket {
    name: string;
    rate: number;
    group?: Omit<ISaleTaxBracket, 'group'>[];
    reference: string | ITaxBracketData;
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
    mrp: number;
    landingCost: number;
    sellingPrice: number; // should we need is modified flag
    productDiscount: IDiscount;
    taxBracket: ISaleTaxBracket;
    totalDiscount: number;
    totalTax: number;
    grandTotal: number;
}

export interface ISalePayment {
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
}

export interface ITaxSplitUp {
    name: string;
    rate: number;
    taxableValue: number;
    taxAmount: number;
    cartItemsSerialNumber: number[];
}

export interface ISaleData {
    cart: ICartDetails[];
    status: ESaleStatus;
    taxSplitUps: ITaxSplitUp[];
    saleDiscount: IDiscount;
    payment: ISalePayment;
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
        reference: string | IOutletData;
    };
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}
