/* @flow */
import React from "react";

import hideableMixin from '../../../klreact-hideable';
import classNames from "classnames";

/**
Convencience component to apply an arrange-fit layout to all of the children.
@examples
```jsx
<Arrange.FitAll>
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Arrange.FitAll>
```
@component Arrange.FitAll
@import {Arrange}
@flags noVisibleRender
@playground
```
<Arrange.FitAll>
  <div style={{background: '#ccc', padding: '1rem'}}>A</div>
  <div style={{background: '#aaa', padding: '1rem'}}>B</div>
  <div style={{background: '#ccc', padding: '1rem'}}>C</div>
  <div style={{background: '#ccc', padding: '1rem'}}>D</div>
  <div style={{background: '#aaa', padding: '1rem'}}>E</div>
  <div style={{background: '#ccc', padding: '1rem'}}>F</div>
</Arrange.FitAll>
```
*/
export default React.createClass({
  mixins: [hideableMixin()],

  propTypes: {
    /**
     * Children to render in the container
     */
    children: React.PropTypes.array,
    /**
     * Applies `arrange-spaced` to the container.
     */
    spaced: React.PropTypes.bool,
    /**
     * Applies `arrange-middle` to the container.
     */
    middle: React.PropTypes.bool,
    /**
     * Applies `arrange-bottom` to the container.
     */
    bottom: React.PropTypes.bool,
    /**
     * Applies `arrange-equal-spacing` to the container.
     */
    equalSpacing: React.PropTypes.bool,
    /**
     * Applies `arrange-equal` to the container.
     */
    equal: React.PropTypes.bool
  },

  getDefaultProps(): Object {
    return {
      spaced: true,
      middle: false,
      bottom: false,
      equalSpacing: false,
      equal: false
    };
  },

  _renderCell(child: ReactElement, index: number): ReactElement {
    return (
      <div className="arrange-fit" key={index}>
        {child}
      </div>
    );
  },

  render(): ReactElement {
    const extras = {
      "arrange-spaced": this.props.spaced,
      "arrange-middle": this.props.middle,
      "arrange-bottom": this.props.bottom,
      "arrange-equal-spacing": this.props.equalSpacing,
      "arrange-equal": this.props.equal
    };

    return (
      <div
        className={classNames("arrange", extras, this._hideableClasses())}
        {... this.props}>
        {React.Children.map(this.props.children, this._renderCell)}
      </div>
    );
  }
});
