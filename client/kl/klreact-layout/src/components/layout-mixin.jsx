import React from "react";

import classNames from "classnames";

import getColumnMap from "./utils/map-columns";

export default (): Object => {
  return {
    layoutChildren(children: Array<ReactElement>, options:Object, className: string) {
      const cMap = getColumnMap(options, "sizes");
      const coMap = getColumnMap(options, "offsets");

      const wrappedChildren = React.Children.map(children,
        (child: ReactElement, index: number) => {
          const classes = className ? [className] : [];
          classes.push("Grid-col");
          for (const k in cMap) {
            if (cMap[k][index % cMap[k].length] === 12) {
              classes.push(`u-size-1${k}`); // there is no 12-12 class
            } else {
              classes.push(`u-size-${cMap[k][index % cMap[k].length]}-12${k}`);
            }
          }
          for (const k in coMap) {
            classes.push(`u-offset-${coMap[k][index % coMap[k].length]}-12${k}`);
          }
          classes.push(classNames({
            "valign-top": options.vertical === "top",
            "valign-middle": options.vertical === "middle",
            "valign-bottom": options.vertical === "bottom"
          }));
          return (<div className={classes.join(" ")}>{child}</div>);
        }
      );

      return (
        <div className={classNames({
          "Grid--gutters": options.padded,
          "text-left": options.align === "left",
          "text-center": options.align === "center",
          "text-right": options.align === "right"
        }, "Grid", this._hideableClasses())}
        >
          {wrappedChildren}
        </div>
      );
    }
  };
};
