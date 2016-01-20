describe("pigLatin", function() {
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("takes the first letter and moves it to the end", function() {
    expect(pigLatin("chris")).to.equal("hriscay");
  });

  it("checks word for consonant until it reaches a vowel", function () {
    expect(pigLatin("what")).to.equal("atwhay");
  });

});
