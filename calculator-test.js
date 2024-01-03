
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 250000,
    years: 7,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('3359.96');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 15,
    rate: 7.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('4635.06');
});
