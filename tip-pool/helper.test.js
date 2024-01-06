describe("Helpers test",function() {
    // beforeEach(function () {
    //     billAmtInput.value = 100;
    //     tipAmtInput.value = 20;
    //     submitPaymentInfo();
    // });

it("should add all tips together", function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(0);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(20);
});

it("should add all bills together", function(){
    expect(sumPaymentTotal('billAmt')).toEqual(0)
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(100)
})

it("should convert the tip amount into a percent", function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(20);
})
});