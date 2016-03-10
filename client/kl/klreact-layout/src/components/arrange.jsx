import React from "react";

import hideableMixin from '../../../klreact-hideable';
import classNames from "classnames";

import ArrangeFit from "./arrange-fit";
import ArrangeFill from "./arrange-fill";
import ArrangeFitAll from "./arrange-fit-all";

const BaseClass = React.createClass({
    mixins: [hideableMixin()],

    propTypes: {
        /**
         * Children to render in the container
         */
        children: React.PropTypes.node,
        /**
         Applies `arrange-spaced` class
         */
        spaced: React.PropTypes.bool,
        /**
         Applies `arrange-middle` class
         */
        middle: React.PropTypes.bool,
        /**
         Applies `arrange-bottom` class
         */
        bottom: React.PropTypes.bool,
        /**
         Applies `arrange-equal-spacing` class
         */
        equalSpacing: React.PropTypes.bool,
        /**
         Applies `arrange-equal` class
         */
        equal: React.PropTypes.bool
    },

    getDefaultProps(): Object {
        return {
            spaced: false,
            middle: false,
            bottom: false,
            equalSpacing: false,
            equal: false
        };
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
                {this.props.children}
            </div>
        );
    }
});

BaseClass.Fit = ArrangeFit;
BaseClass.Fill = ArrangeFill;
BaseClass.FitAll = ArrangeFitAll;

export default BaseClass;