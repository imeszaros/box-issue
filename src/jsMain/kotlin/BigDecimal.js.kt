@JsExport
actual class BigDecimal {

    @JsName("fromString")
    actual constructor(value: String)

    @JsName("fromInt")
    actual constructor(value: Int)
}
