/* @flow */
import React from "react";

import hideableMixin from '../../../klreact-hideable';
import arrangeCellMixin from "./arrange-cell-mixin";

/**
Wraps an arrange fit cell.
@import {Arrange}
@component Arrange.Fit
@references Arrange
@flags noVisibleRender
@playground
```
<Arrange>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
*/
export default React.createClass({
  mixins: [
    React.PureRenderMixin,
    arrangeCellMixin("arrange-fit"),
    hideableMixin()]
});
