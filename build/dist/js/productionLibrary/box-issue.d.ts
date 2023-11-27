type Nullable<T> = T | null | undefined
export declare class BigDecimal {
    private constructor();
    static fromString(value: string, $box: Nullable<BigDecimal>): BigDecimal;
    static fromInt(value: number, $box: Nullable<BigDecimal>): BigDecimal;
}