describe("pigLatin", function() {
  it("check if first letter is a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves the first letter to the back of the word until it reaches a vowel", function() {
    expect(pigLatin("start")).to.equal("artstay");
  });

});
