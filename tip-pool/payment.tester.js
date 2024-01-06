describe("Payment tests", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });
    it("should add a new payment to the paymentTable", function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should update and append payment table', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        // selects the data in the payment table
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        // add the new data to each of the 3 cells in the payment table
        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
        expect(curTdList[3].innerText).toEqual('X');
    });

    // resets the inputs after each test
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});