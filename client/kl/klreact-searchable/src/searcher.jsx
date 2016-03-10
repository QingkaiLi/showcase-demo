import React from 'react';

export default class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      found: []
    }
    this._search = this._search.bind(this);
    this._matches = this._matches.bind(this);
  }
  _matches(item) {
    let matches = true;

    if(this.state.pattern) {
      matches = false;
      if(this.state.pattern.test(item.title)) {
        matches = true;
      }
      let synonyms = item.synonyms;
      if(synonyms) {
        for(var s in synonyms) {
          if(this.state.pattern.test(synonyms[s])) {
            matches = true;
          }
        }
      }
    }
    return matches;
  }
  _search(text) {
    let f = [];

    this.state.pattern = text.length > 0 ?
      new RegExp(text, 'i') : null;

    for(var i in this.props.items) {
      if(this._matches(this.props.items[i])) {
        f.push(this.props.items[i]);
      }
    }

    this.setState({
      found: f
    });
  }
}
