// intentionally assigned equivalent values in enum, in some type matching we need the billSizes name to be layed out the same
export enum EBILL_SIZES {
    BILL_A4 = 'BILL_A4',
    BILL_90MM = 'BILL_90MM',
}

export const getBillSizeByName = (billName: keyof typeof EBILL_SIZES): keyof typeof EBILL_SIZES =>
    EBILL_SIZES[EBILL_SIZES[billName]] as keyof typeof EBILL_SIZES;
