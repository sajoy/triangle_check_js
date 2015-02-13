describe('triangleCheck', function() {
  it('will return "not a triangle" for dimensions that are not a triangle', function() {
    expect(triangleCheck(2,2,8)).to.equal("not a triangle");
  });

  it('will return "equilateral" if all sides are equal', function() {
    expect(triangleCheck(3,3,3)).to.equal("equilateral");
  });

  it('will return "isosceles" if two sides are equal', function() {
    expect(triangleCheck(6,6,4)).to.equal("isosceles");
  });

});
