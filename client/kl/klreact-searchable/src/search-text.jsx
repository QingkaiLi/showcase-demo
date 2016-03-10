import React from "react";

import Searcher from "./searcher";

import _ from "lodash";

export default class SearchText extends Searcher {
  constructor(props) {
    super(props);

    this.state.text = "";

    this._updateText = this._updateText.bind(this);
    this._renderSearchText = this._renderSearchText.bind(this);
    this._renderResults = this._renderResults.bind(this);
  }
  componentDidMount() {
    this._search(this.state.text);
  }
  _updateText(event) {
    let text = event.target.value;
    text = text.replace(/^\s+/, "").replace(/\s+$/, "");
    this.state.text = text;
    this._search(this.state.text);
  }
  _renderSearchText() {
    return (
      <div className={this.props.inputContainer}>
        <input
          type="text"
          className={this.props.className}
          onChange={_.debounce(this._updateText, 200)} />
      </div>
    );
  }
  _renderResults() {
    if(this.props.renderItem && this.props.renderEmpty) {
      if(this.props.noResultOnEmpty) {
        return this.state.text.length > 0 ?
          this.state.found.map(this.props.renderItem) :
          this.props.renderEmpty();
      } else {
        return this.state.found.length > 0 ?
          this.state.found.map(this.props.renderItem) :
          this.props.renderEmpty();
      }
    }
    return null;
  }
  render() {
    let found = this.state.found;
    if(this.props.noResultOnEmpty && this.state.text.length === 0) {
      found = [];
    }
    return (
      <div>
        {this._renderSearchText()}
        {this._renderResults()}
        {React.Children.map(this.props.children, (child, index) =>
          React.cloneElement(child, {found: found, key: index})
        )}
      </div>
    );
  }
}

SearchText.propTypes = {
  noResultOnEmpty: React.PropTypes.bool,
  renderEmpty: React.PropTypes.func,
  renderItem: React.PropTypes.func,
  items: React.PropTypes.array.isRequired,
  inputContainer: React.PropTypes.string
};

SearchText.defaultProps = {
  noResultOnEmpty: false,
  inputContainer: ""
};
