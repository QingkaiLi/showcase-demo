import React from "react";
import hideableMixin from "../../../klreact-hideable";
import layoutMixin from "./layout-mixin";

/**
 A layout manager that makes it easy to build responsive layouts with different
 numbers of columns at different breakpoints.
 @examples
 This layout is one column in `x-small` media size, and three columns
 in `medium` and above.

 ```jsx
 <Layout x-small={1} medium={3}>
 <div>A</div><div>B</div><div>C</div>
 </Layout>
 ```

 And this layout is one column in `x-small` media size, and three columns
 in `medium` where the columns are 2, 8 and 2 wide (using the 12 grid layout
 sizing).

 ```jsx
 <Layout x-small={1} medium-sizes={[2,8,2]}>
 <div>A</div><div>B</div><div>C</div>
 </Layout>
 ```
 @import {Layout}
 @component Layout
 @flags noVisibleRender
 @synonym responsive
 @playground
 Layout
 ```
 <Layout large={4} medium={3} small={2} x-small={1} padded={true}>
 <div style={{background:'#ccc',padding:'1rem'}}>A</div>
 <div style={{background:'#aaa',padding:'1rem'}}>B</div>
 <div style={{background:'#ccc',padding:'1rem'}}>C</div>
 </Layout>
 ```
 */
const BaseClass = React.createClass({
    displayName: "Layout",

    mixins: [layoutMixin(), hideableMixin()],

    propTypes: {
        /**
         The number of columns for the x-small media size.
         */
        "x-small": React.PropTypes.number,
        /**
         The number of columns for the small media size.
         */
        small: React.PropTypes.number,
        /**
         The number of columns for the medium media size.
         */
        medium: React.PropTypes.number,
        /**
         The number of columns for the large media size.
         */
        large: React.PropTypes.number,
        /**
         The number of columns for the x-large media size.
         */
        "x-large": React.PropTypes.number,
        /**
         An array of column sizes (based on a 12-grid layout) for the x-small media size.
         */
        "x-small-sizes": React.PropTypes.array,
        /**
         An array of column sizes (based on a 12-grid layout) for the small media size.
         */
        "small-sizes": React.PropTypes.array,
        /**
         An array of column sizes (based on a 12-grid layout) for the medium media size.
         */
        "medium-sizes": React.PropTypes.array,
        /**
         An array of column sizes (based on a 12-grid layout) for the large media size.
         */
        "large-sizes": React.PropTypes.array,
        /**
         An array of column sizes (based on a 12-grid layout) for the x-large media size.
         */
        "x-large-sizes": React.PropTypes.array,
        /**
         True if the grid should be padded.
         */
        padded: React.PropTypes.bool,
        /**
         * Horizontal alignment for the container.
         */
        align: React.PropTypes.oneOf(["left", "center", "right"]),
        /**
         Vertical alignment for the container.
         */
        vertical: React.PropTypes.oneOf(["top", "middle", "bottom"]),
        children: React.PropTypes.node,
        className: React.PropTypes.string
    },

    getDefaultProps(): Object {
        return {
            align: "left"
        };
    },

    render(): ReactElement {
        return this.layoutChildren(this.props.children, this.props,
            this.props.className);
    }
});

BaseClass.layoutMixin = layoutMixin;

export default BaseClass;