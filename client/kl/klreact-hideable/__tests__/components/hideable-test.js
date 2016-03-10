'use strict';

jest.unmock('../../src/components/hideable.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import hideableMixin from '../../src/components/hideable.jsx';

describe("Hideable", () => {
    let Hideable;

    beforeEach(() => {
        Hideable = React.createClass({
            mixins: [hideableMixin()],

            render() {
                return (
                    <div className={this._hideableClasses()}>
                        hidden classes div
                    </div>
                );
            }
        });
    });

    it("should return not 'hide-content' if props.hidden is false", () => {
        const hideable = TestUtils.renderIntoDocument(<Hideable />);

        const hideableChildren = TestUtils.scryRenderedDOMComponentsWithClass(
            hideable, "hide-content");

        expect(hideableChildren.length).toBe(0);
    });

    it("should return 'hide-content' if props.hidden is true", () => {
        const hideable = TestUtils.renderIntoDocument(<Hideable hidden={true} />);

        const hideableChildren = TestUtils.scryRenderedDOMComponentsWithClass(
            hideable, "hide-content");

        expect(hideableChildren.length).toBe(1);
    });
})