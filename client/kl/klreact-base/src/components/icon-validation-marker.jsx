/* @flow */
import React from "react";
import classNames from "classnames";
import hideableMixin from "../../../klreact-hideable";

/**
Validation marker component
@examples
```jsx
<Icon.ValidationMarker />
```
@component Icon.ValidationMarker
@import {Icon}
@playground
```
<Icon.ValidationMarker />
```
*/
export default React.createClass({
  mixins: [React.PureRenderMixin, hideableMixin()],
  propTypes: {
    /**
    The error string
    */
    error: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  render(): ReactElement {
    const classes = classNames(
      "validation-marker validation-marker-error",
      this._hideableClasses(),
      this.props.className);

    return (
      <i
        className={classes}
        {... this.props}>
          <span className="visuallyhidden">{this.props.error}</span>
      </i>
    );
  }
});
