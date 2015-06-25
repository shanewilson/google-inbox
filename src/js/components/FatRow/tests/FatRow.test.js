import React from "react/addons";
var {TestUtils} = React.addons;
var shallowRenderer = TestUtils.createRenderer();
import FatRow from "FatRow";

describe("FatRow", function() {
  it("should exists", function() {
    let s = shallowRenderer.render( <FatRow title="Test 1" /> );
    let fatrow = shallowRenderer.getRenderOutput();
    expect(fatrow.type).to.eq("li");
  });
  it("should have a title", function() {
    let s = shallowRenderer.render( <FatRow title="Test 1" /> );
    let fatrow = shallowRenderer.getRenderOutput();
    expect(fatrow.props.children).to.eq("Test 1");
  });
});
