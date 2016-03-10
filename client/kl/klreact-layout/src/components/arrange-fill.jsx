/* @flow */
import React from "react";

import hideableMixin from '../../../klreact-hideable';
import arrangeCellMixin from "./arrange-cell-mixin";

/**
Wraps an arrange fill cell.
@component Arrange.Fill
@import {Arrange}
@references Arrange
@flags noVisibleRender
@playground
```
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
</Arrange>
```
*/
export default React.createClass({
  mixins: [React.PureRenderMixin,
    arrangeCellMixin("arrange-fill"),
    hideableMixin()]
});
