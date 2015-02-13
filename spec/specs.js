describe('triangleCheck', function() {
  it('will return "not a triangle" for dimensions that are not a triangle', function() {
    expect(triangleCheck(2,2,8)).to.equal("not a triangle");
  });

});
