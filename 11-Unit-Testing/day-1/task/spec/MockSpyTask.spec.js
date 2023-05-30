var counter = {
  currentValues: function () {
    return 1;
  },
};
//counter.currentValues()  >>1

function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  // spy on counter object currentValue property 
  // and expect that we called the spy function for one time
  it("spying", function () {
    spyOn(counter, 'currentValues');

    sumOfValues();

    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });

  // mock a function that  return number, call it twice and expect that it is called twice
  it("mocking", function () {
    var fakeFunc = jasmine.createSpy();
    
    fakeFunc.and.callFake(()=>{
      return 15;
    })

    fakeFunc();
    fakeFunc();

    expect(fakeFunc).toHaveBeenCalledTimes(2);
  });
});
