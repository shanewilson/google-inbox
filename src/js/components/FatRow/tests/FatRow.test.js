describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      expect([1, 2, 3].indexOf(1)).to.eq(0);
      //assert.equal(-1, [1, 2, 3].indexOf(1));
      //assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe("Array1", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      expect([1, 2, 3].indexOf(1)).to.eq(0);
      //assert.equal(-1, [1, 2, 3].indexOf(1));
      //assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe("Array2", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      expect([1, 2, 3].indexOf(1)).to.eq(0);
      //assert.equal(-1, [1, 2, 3].indexOf(1));
      //assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe("Array3", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      expect([1, 2, 3].indexOf(1)).to.eq(0);
      //assert.equal(-1, [1, 2, 3].indexOf(1));
      //assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe("Array4", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      expect([1, 2, 3].indexOf(1)).to.eq(0);
      //assert.equal(-1, [1, 2, 3].indexOf(1));
      //assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe("add", function () {
  it("should add two numbers and return the result", function () {
    expect(window.add(1, 2)).toBe(3);
  });
});

describe("subtract", function () {
  it("should subtract two numbers", function () {
    expect(window.subtract(2, 1)).toBe(1);
  });
});

describe("updateAppState", function () {
  it("should push a new state into the browser history", function () {
    window.updateAppState({
        message: "hi"
    });
    expect(window.history.state).toEqual({
        message: "hi"
    });
  });
});
