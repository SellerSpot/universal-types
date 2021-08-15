import { EBILL_SIZES } from './billSizes';

export interface IBillSettings {
    bills: {
        [EBILL_SIZES.BILL_A4]: IBillA4Settings;
        [EBILL_SIZES.BILL_90MM]: IBill90MMSettings;
        // make an entry here if adding new bill
    };
    defaultBill: EBILL_SIZES;
}

export interface IBillA4Settings {
    storeDetails: {
        name: string;
        address: string;
    };
    GSTNumber: {
        show: boolean;
        data: string;
    };
    purchaseInvoiceSection: {
        show: boolean;
        discountColumn: boolean;
        taxColumn: boolean;
        MRPColumn: boolean;
    };
    purchaseSummarySection: {
        totalDiscount: boolean;
        youSaved: boolean;
    };
    taxSplitUpSection: {
        show: boolean;
    };
    remarkMessage: {
        show: boolean;
        data: string;
    };
    termsAndConditions: {
        show: boolean;
        data: string;
    };
    signature: {
        authorised: boolean;
        customer: boolean;
    };
    footerMessage: {
        show: boolean;
        data: string;
    };
}

export interface IBill90MMSettings {
    storeDetails: {
        // outlet integration needs to be done here
        name: string;
        address: string;
    };
    remarkMessage: {
        show: boolean;
        data: string;
    };
}
