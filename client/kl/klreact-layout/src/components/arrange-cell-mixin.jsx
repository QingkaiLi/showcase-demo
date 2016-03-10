/* @flow */
import React from "react";
import classNames from "classnames";

export default (baseClass: any): Object => {
  return {
    displayName: "Arrange",

    propTypes: {
      mediaObject: React.PropTypes.bool,
      noWrap: React.PropTypes.bool
    },

    getDefaultProps(): Object {
      return {
        mediaObject: false,
        noWrap: false
      };
    },

    render(): ReactElement {
      const extras = {
        "arrange-media-object": this.props.mediaObject,
        "no-wrap": this.props.noWrap
      };
      return (
        <div {... this.props}
          className={classNames(baseClass,
            extras, this.props.className,
            this._hideableClasses())}>
          {this.props.children}
        </div>
      );
    }
  };
};
