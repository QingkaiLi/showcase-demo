/* @flow */
import React from "react";
import JSMediaSelector from "./js-media-selector";
import CSSMediaSelector from "./css-media-selector";

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<MediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</MediaSelector>
```
@component MediaSelector
@synonym responsive
@import {MediaSelector}
@playground
MediaSelector
```
<MediaSelector mode="hide">
  <div visibleWidths={['small']}>Currently in small</div>
  <div visibleWidths={['medium']}>Currently in medium</div>
  <div visibleWidths={['large']}>Currently in large</div>
  <div visibleWidths={['x-large']}>Currently in x-large</div>
  <div visibleWidths={['xx-large']}>Currently in xx-large</div>
  <hr/>

  <div visibleAbove='small'>visibleAbove: Visible in Medium and above</div>
  <div visibleAbove='medium'>visibleAbove: Visible in Large and above</div>
  <hr/>

  <div visibleAtOrAbove='medium'>visibleAtOrAbove: Visible in Medium and above</div>
  <div visibleAtOrAbove='large'>visibleAtOrAbove: Visible in Large and above</div>
  <hr/>

  <div visibleBelow='medium'>visibleBelow: Visible in Small</div>
  <div visibleBelow='large'>visibleBelow: Visible in Small and Medium</div>
  <hr/>

  <div visibleAtOrBelow='small'>visibleAtOrBelow: Visible in Small</div>
  <div visibleAtOrBelow='medium'>visibleAtOrBelow: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAbove='small'>hiddenAbove: Visible in Small</div>
  <div hiddenAbove='medium'>hiddenAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAtOrAbove='medium'>hiddenAtOrAbove: Visible in Small</div>
  <div hiddenAtOrAbove='large'>hiddenAtOrAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenBelow='medium'>hiddenBelow: Visible above Small</div>
  <div hiddenBelow='large'>hiddenBelow: Visible above Medium</div>
  <hr/>

  <div hiddenAtOrBelow='medium'>hiddenAtOrAbove: Visible in Large</div>
  <div hiddenAtOrBelow='large'>hiddenAtOrAbove: Visible above Large</div>
</MediaSelector>
```
*/
const MediaSelector = React.createClass({
  displayName: "MediaSelector",

  propTypes: {
    /**
     * Children to render in the container
     */
    children: React.PropTypes.node,
    /**
     An event fired when the media width changes
     */
    onChange: React.PropTypes.func,
    /**
     Selects between either `hide`ing the childrens on not displaying them (i.e. `delete`)
     */
    mode: React.PropTypes.oneOf(["css", "hide", "delete"]),
    /**
     Sets the default media width for server rendering
     */
    "default": React.PropTypes.string
  },

  getDefaultProps(): Object {
    return {
      mode: "delete"
    };
  },

  render(): ReactElement {
    if (this.props.mode === "css") {
      return <CSSMediaSelector {... this.props} />;
    } else {
      return <JSMediaSelector {... this.props} />;
    }
  }
});

export default MediaSelector;
